const express = require("express");
const router = express.Router();

const getSheet = require("../config/googleSheet");

router.get("/", async (req, res) => {
  try {
    const sheet = await getSheet();

    const rows = await sheet.getRows();

    const leads = rows.map((row) => ({
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

module.exports = router;