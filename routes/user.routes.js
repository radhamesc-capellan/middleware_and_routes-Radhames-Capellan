const { Router } = require("express");

const router = Router();

router.get("/users", (req, res) => {
  res.send("esto es un GET a users desde mi servidor");
});

router.post("/users", (req, res) => {
    const body = req.body;
    console.log(req.body);
  res.json(body);
});

module.exports = router;
