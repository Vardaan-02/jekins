import Router from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send("Hello, World");
});

router.get("/vardaan", (req, res) => {
  res.status(200).send("Hello, Vardaan");
});

export default router;
