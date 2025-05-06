import React from "react";

function ForList({ src }) {
  return (
    <dl>
      {src.map((elm) => (
        <>
          <dt>
            <a href="">{elm.title}</a>
          </dt>
          <dd>
            {elm.summary}({elm.price}円)
          </dd>
        </>
      ))}
    </dl>
  );
}

export default ForList;
