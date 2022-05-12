const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "I want to punch my computer",
    "postContent": "It had it coming...",
    "userId": 1
  },
  {
    "postTitle": "Home Alone 2 Lost in New York is a classic",
    "postContent": "All star cast, quality movie content.",
    "userId": 2
  },
  {
    "postTitle": "Any new music out there woth checking out?",
    "postContent": "I want some new bands to listen to!",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;