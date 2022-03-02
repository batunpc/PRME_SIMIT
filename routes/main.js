const express = require("express");
const router = express.Router();

//home
router.get("/", (req, res) => {
  res.render("home", {
    layout: "main",
    title: " Home | Simit The Sustain",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    layout: "main",
    title: "About Us | Simit The Sustain",
  });
});

module.exports = router;
