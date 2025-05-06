import React from "react";
import ForItem from "./ForItem";

function ForNest({ src }) {
  return (
    <>
      <p>{src.length > 0 && `${src.length}件データがあります`}</p>
      <dl>
        {src.map((elm) => (
          <ForItem book={elm} key={elm.isbn} />
        ))}
      </dl>
    </>
  );
}

export default ForNest;
