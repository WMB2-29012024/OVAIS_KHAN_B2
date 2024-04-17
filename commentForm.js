const addComment = () => {
  const commentInputElement = document.getElementById("comment-box");
  if (commentInputElement.value) {
    const commentInptdata = new Date().toLocaleString();
    const commentData = {
      date: commentInptdata,
      text: commentInputElement.value,
    };
    const savedComment = JSON.parse(localStorage.getItem("comment") || "[]");
    savedComment.push(commentData);
    localStorage.setItem("comment",JSON.stringify([commentData]));
    commentInputElement.value = "";
  } else {
    alert("Please enter something to add");
  }
};

export { addComment };
