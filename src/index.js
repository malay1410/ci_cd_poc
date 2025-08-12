import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.json({ ok: true, message: "CI/CD PoC says hi 👋 first test" });
});

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => console.log(`Server listening on :${port}`));
}

export default app;
