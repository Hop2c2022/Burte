const User = require("../database/module/Users");
const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../index");

jest.useRealTimers();

const setUpEnvironment = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://BonteGB:Burt3wather@cluster0.1kyvhbr.mongodb.net/test_for_test"
    );
    console.log("successfully test connected");
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
};
beforeAll(async () => {
  await setUpEnvironment();
});

describe("Our very first test", () => {
  it("should return a user", async () => {
    const res = await request(app).get("/user");
    expect(res.statusCode).toEqual(200);
  });
  it("should return a user", async () => {
    const res = await request(app).get("/login").send({
      password: "qwerty1234",
      email: "blabla@gmail.com",
    });

    expect(res.statusCode).toEqual(200);
  });
  it("First taste case", async () => {
    const res = await request(app).post("/user").send({
        password: "qwerty1234",
        email: "blabla@gmail.com",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.text).toEqual("successfully created new user");
  });
  it("First taste delete", async () => {
    const id = "63e0c97a4ad5b6b99cfc1741s";
    const res = await request(app).delete(`/users/${id}`);
    expect(res.statusCode).toEqual(200);
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});