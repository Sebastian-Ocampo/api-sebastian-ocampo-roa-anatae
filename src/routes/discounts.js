const { Router } = require("express");
const { countOrders } = require("../handlers/orders");

const discountsRouter = Router();

discountsRouter.get("/orders", countOrders);

module.exports = discountsRouter;
