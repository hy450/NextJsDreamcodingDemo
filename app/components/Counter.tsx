"use client";
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((count) => count + 1)}>
        숫자 증가시키기
      </button>
    </>
  );
}
