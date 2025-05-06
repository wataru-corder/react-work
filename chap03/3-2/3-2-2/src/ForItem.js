import React from "react";
import DownLoad from "./DownLoad";

function ForItem({ book }) {
  return (
    <>
      <dt>
        <a href="">{book.title}</a>
      </dt>
      {book.download ? <DownLoad isbn={book.isbn} /> : null}
    </>
  );
}

export default ForItem;
