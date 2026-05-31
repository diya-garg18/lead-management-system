const express = require("express");
const router = express.Router();

const getSheet = require("../config/googleSheet");
const transporter = require("../config/mailer");
router.get("/", async (req, res) => {
  try {
    const sheet = await getSheet();

    const rows = await sheet.getRows();

    const leads = rows.map((row) => ({
  rowNumber: row.rowNumber,
  name: row.get("Name"),
  email: row.get("Email"),
  phone: row.get("Phone"),
  status: row.get("Status"),
  submittedAt: row.get("Submitted At"),
}));

    res.json(leads);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

router.put("/:rowNumber", async (req, res) => {
    console.log("BODY", req.body);
  try {
    const { rowNumber } = req.params;
    const { status } = req.body;

    const sheet = await getSheet();
    const rows = await sheet.getRows();

    const row = rows.find(
      (r) => r.rowNumber === Number(rowNumber)
    );

    if (!row) {
      return res.status(404).json({
        message: "Lead not found",
      });
    }

    row.set("Status", status);
    await row.save();

    res.json({
      message: "Status updated",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/test-email", async (req, res) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Lead Management Test",
      text: "Email sending is working successfully!",
    });

    res.json({
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;