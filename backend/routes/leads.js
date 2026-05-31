const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json({
      message: "Leads route working"
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

module.exports = router;