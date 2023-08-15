{
  // form element
  <body>
    <form name="commentForm">
      <label for="comment">
        Comment : <input type="text" name="comment" id="comment"></input>
      </label>
      <label for="from">
        From : <input type="text" name="from" id="from"></input>
      </label>
      <input type="submit" value="Submit"></input>
    </form>

    <div id="commentList"></div>
  </body>;

  document.querySelector("form[name=commentForm]").onsubmit = function (event) {
    event.preventDefault();
    const commentList = document.getElementById("commentList");
    const comment = document.getElementById("comment").value;
    const from = document.getElementById("from").value;

    const commentItem = document.createElement("p");
    commentItem.textContent = `${comment} - ${from}`;
    commentList.appendChild(commentItem);

    document.querySelector("form[name=commentForm]").reset();
  };
}

{
  //akses form via name
  <body>
    <form name="commentForm">
      <label for="comment">
        Comment : <input type="text" name="comment" id="comment"></input>
      </label>
      <label for="from">
        From : <input type="text" name="from" id="from"></input>
      </label>
      <input type="submit" value="Submit"></input>
    </form>

    <div id="commentList"></div>
  </body>;

  document.fomrs["commentForm"].onsubmit = function (event) {
    event.preventDefault();

    const commentList = document.getElementById("commentList");
    const comment = document.forms["commentForm"]["comment"].value;
    const from = document.forms["commentForm"]["from"].value;

    const commentItem = document.createElement("p");
    commentItem.textContent = `${comment} - ${from}`;
    commentList.appendChild(commentItem);

    document.forms["commentForm"].reset();
  };
}
