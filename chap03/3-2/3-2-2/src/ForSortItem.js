import React from "react";

export default function ForSortItem({ ForSortItem }) {
  return (
    <div>
      <dt>{ForSortItem.title}</dt>
      <dd>
        {ForSortItem.summary}({ForSortItem.price}円)
      </dd>
    </div>
  );
}
