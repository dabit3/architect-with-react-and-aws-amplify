let arc = require('@architect/functions')

exports.handler = async function http (req) {
  try {
    let body = arc.http.helpers.bodyParser(req)
    let data = await arc.tables()
    await data.posts.put(body.post)
    return {
      statusCode: 200,
      body: 'Successfully created a new post',
      headers: {
        "Access-Control-Allow-Origin": "*",
      }
    }
  } catch (err) {
    return {
      statusCode: 500,
      error: JSON.stringify(err),
      headers: {
        "Access-Control-Allow-Origin": "*",
      }
    }
  }
}