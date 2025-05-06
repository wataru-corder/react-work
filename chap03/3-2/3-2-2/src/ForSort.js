import React from "react";
import ForSortItem from "./ForSortItem";

const ForSort = ({ src }) => {
  const sortItem = [...src].sort((m, n) => m.price - n.price);
  console.log(sortItem);

  return (
    <>
      <p>以下ソート</p>
      <dl>
        {sortItem.map((elm) => (
          <ForSortItem ForSortItem={elm} key={elm.isbn} />
        ))}
      </dl>
    </>
  );
};

export default ForSort;
