import React from "react";

function ProductLayouts({ children }) {
  return (
    <div>
      <h1>Logout</h1>
      <div className="w-3/4 m-5 flex justify-start">
        <div className="flex flex-wrap items-start py-5 gap-5">{children}</div>
      </div>
    </div>
  );
}

export default ProductLayouts;
