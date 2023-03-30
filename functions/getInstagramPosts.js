// functions/getInstagramPosts.js

// const axios = require("axios");

// exports.handler = async function (event, context) {
//   const { INSTAGRAM_ACCESS_TOKEN } = process.env;

//   if (!INSTAGRAM_ACCESS_TOKEN) {
//     return {
//       statusCode: 500,
//       body: "INSTAGRAM_ACCESS_TOKEN is not set",
//     };
//   }

//   try {
//     const response = await axios.get(
//       `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,thumbnail_url,timestamp,username&access_token=${INSTAGRAM_ACCESS_TOKEN}`
//     );
//     const posts = response.data.data;

//     return {
//       statusCode: 200,
//       body: JSON.stringify(posts),
//     };
//   } catch (error) {
//     console.error(error);

//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: "Failed to fetch Instagram posts" }),
//     };
//   }
// };
