import React from "react";

function ForFilterItem({ ForFilterItem }) {
  return (
    <div>
      <dt>{ForFilterItem.title}</dt>
      <dd>
        {ForFilterItem.summary}({ForFilterItem.price}円)
      </dd>
    </div>
  );
}

export default ForFilterItem;
