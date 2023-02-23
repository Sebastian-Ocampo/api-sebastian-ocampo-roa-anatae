const { Shopify } = require("@shopify/shopify-api");

/*
 *
 * @returns {import('@shopify/shopify-api/dist/clients/graphql/graphql_clients').GraphqlClient} shopify client
 */
const shopifyApi = () =>
  new Shopify.Clients.Graphql(
    process.env.SHOP,
    process.env.SHOPIFY_ACCESS_TOKEN
  );

module.exports = shopifyApi;
