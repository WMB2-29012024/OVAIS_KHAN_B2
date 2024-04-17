

// const pTag= document.getElementById("p");
// const commentBox= document.getElementById("comment-box");

import { addComment } from "./commentForm.js";
import { showComments} from "./commentlist.js";
showComments();

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addComment();
  showComments();
})






























































