const express = require("express");
const router = express.Router();

const { create, list, read, remove } = require("../controllers/category");
const { runValidation } = require("../validators");
const { categoryCreateValidator } = require("../validators/category");
const { requireSignin, adminMiddleware } = require("../controllers/auth");

router.get("/categories", list);
router.get("/category/:slug", read);

router.post(
  "/category",
  categoryCreateValidator,
  runValidation,
  requireSignin,
  adminMiddleware,
  create
);

router.delete("/category/:slug", requireSignin, adminMiddleware, remove);

module.exports = router;
