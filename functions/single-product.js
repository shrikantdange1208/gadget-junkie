// domain/.netlify/functions/single-product

const dotenv = require('dotenv')
dotenv.config()

const Airtable = require('airtable-node')
const airtable = new Airtable({ apiKey: process.env.VITE_AIRTABLE_BASE_TOKEN })
  .base(process.env.VITE_AIRTABLE_REACT_BASE_ID)
  .table(process.env.VITE_AIRTABLE_PRODUCT_TABLE)

exports.handler = async function (event, context, callback) {
  const { id } = event.queryStringParameters

  if (id) {
    try {
      let product = await airtable.retrieve(id)
      if (product.error) {
        return {
          statusCode: 404,
          body: `Product with id ${id} does not exists.`,
        }
      }

      product = { id: product.id, ...product.fields }
      console.log(product)
      return {
        statusCode: 200,
        body: JSON.stringify(product),
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Error occurred while retrieving the product',
      }
    }
  } else {
    return {
      statusCode: 400,
      body: 'Please provide product id',
    }
  }
}
