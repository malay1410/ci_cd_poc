/* eslint-env jest */

import request from "supertest";
import app from "../src/index.js";

describe("GET /", () => {
  it("returns hello payload", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ ok: true, message: "CI/CD PoC says hi 👋" });
  });
});
