import React from "react";
import "./css/loading.css";

function Loading() {
  return (
    <div>
      <div class="ring">
        Loading
        <span class="span1"></span>
      </div>
      <div
        style={{
          height: "1000px",
        }}
      ></div>
    </div>
  );
}

export default Loading;
