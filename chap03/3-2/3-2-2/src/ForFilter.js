import React from "react";
import ForFilterItem from "./ForFilterItem";

function ForFilter({ src }) {
  const lowPrice = src.filter((elm) => elm.price > 3000);

  return (
    <dl>
      {lowPrice.map((elem) => (
        <ForFilterItem ForFilterItem={elem} key={elem.isbn} />
      ))}
    </dl>
  );
}

export default ForFilter;
