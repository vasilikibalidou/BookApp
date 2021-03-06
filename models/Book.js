const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    required: true,
    type: String
  },
  subtitle: {
    type: String
  },
  authors: {
    type: Array,
    required: true
  },
  description: String,
  ISBN_10: {
    type: String
  },
  ISBN_13: {
    type: String
  },
  pageCount: Number,
  categories: Array,
  averageRating: Number,
  language: String,
  coverImageURL: String,
  infoLinkURL: String,
  googleId: {
    type: String
  },
  owners: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
