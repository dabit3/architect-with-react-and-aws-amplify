let arc = require('@architect/functions')

exports.handler = async function http (req) {
  const { postID } = req.pathParameters

  try {
    let data = await arc.tables()
    const post = await data.posts.get({ postID })
    console.log('post: ', post)
    return {
      statusCode: 200,
      body: JSON.stringify(post),
      headers: {
        "Access-Control-Allow-Origin": "*",
     }
    }
  } catch (err) {
    console.log('err: ', err)
    return {
      statusCode: 500,
      error: JSON.stringify(err),
      headers: {
        "Access-Control-Allow-Origin": "*",
      }
    }
  }
}