const express = require("express");

const router = express.Router();

const {
  analyzeProject
} = require("../controllers/analyzeController");

router.post("/analyze", analyzeProject);

module.exports = router;