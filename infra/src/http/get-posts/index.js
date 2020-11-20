let arc = require('@architect/functions')

exports.handler = async function http () {
  try {
    let data = await arc.tables()
    console.log("data from arc: ", data)
    let posts = await data.posts.scan({})
    return {
      statusCode: 200,
      body: JSON.stringify(posts),
      headers: {
        "Access-Control-Allow-Origin": "*",
      }
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify(err),
      headers: {
        "Access-Control-Allow-Origin": "*",
      }
    }
  }
}