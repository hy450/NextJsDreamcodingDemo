"use client";

import React, { useEffect, useState } from "react";
import styles from "./MeoArticle.module.css";

const MeoArticle = () => {
  const [text, setText] = useState("데이터 준비중...");

  useEffect(() => {
    fetch("https://meowfacts.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => setText(data.data[0]))
      .catch((err) => {
        setText("meowfacts get error!");
        console.log(err);
      });
  }, []);

  return <article className={styles.article}>{text}</article>;
};

export default MeoArticle;
