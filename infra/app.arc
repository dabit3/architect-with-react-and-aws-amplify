@app
react-arc

@http
get /
get /posts
get /posts/:postID
post /posts
delete /posts/:postID

@tables
posts
  postID *String

@indexes
posts
  type *String

# @aws
# profile default
# region us-east-1

@macros
arc-macro-no-bucket