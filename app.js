const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.connect(
  `mongodb+srv://<user>:<password>@clusterN.*****.mongodb.net/<database>`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "./index.html");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server started");
});

// const postSchema = new Schema({
//     title: String,
//     body: String,
//     slug: String,
//   });

//   const Post = mongoose.model("Post", postSchema);

// app.get("/posts/:postName", function (req, res) {
//     const requestedTitle = _.kebabCase(
//       _.lowerCase(req.params.postName.toLowerCase())
//     );
//     const path = "/posts/";
//     const blogSlug = path + requestedTitle;

//     console.log(blogSlug);

//     Post.findOne({ slug: blogSlug }, function (err, foundPost) {
//       if (!err) {
//         res.render("post", {
//           postTitle: foundPost.title,
//           postBody: foundPost.body,
//         });
//       }
//     });
//   });
