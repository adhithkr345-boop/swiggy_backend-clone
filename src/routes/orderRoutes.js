const express = require("express");
const router = express.Router();

const { protect, authorize } = require("../middleware/authMiddleware");
const {
  placeOrder,
  getMyOrders,
  getRestaurantOrders,
  updateOrderStatus,
  mockPayment,
} = require("../controllers/orderController");

router.use(protect);
router.use(authorize("user"));
router.post("/", placeOrder);
router.get("/my", getMyOrders);
router.post("/verify", mockPayment);
router.get("/restaurant", authorize("restaurant"), getRestaurantOrders);
router.put("/:id/status", authorize("restaurant"), updateOrderStatus);

module.exports = router;
