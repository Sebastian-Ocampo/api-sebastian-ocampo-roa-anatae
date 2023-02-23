const shopifyApi = require("../services/shopify");

const countOrders = async (req, res) => {
  try {
    const data = await shopifyApi().query({
      data: `query {
        orders(first: 250) {
          edges {
            node {
              id
            } 
          }
        }
      }`,
    });
    res.status(200).json(data.body.data.orders.edges);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  countOrders,
};
