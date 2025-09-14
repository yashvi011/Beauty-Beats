// Change these lines:
// import express from "express";
// export default router;

// To these lines:
const express = require("express");
const router = express.Router();

// login user register
router.post("/register",registerUser);
// login user router
router.post("/login",loginUser);
// login user user
router.get("/logout",logoutUser);

module.exports = router;