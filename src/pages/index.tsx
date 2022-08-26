import React, { useState } from "react";
import styles from "./index.less";

export default function Page() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <h1
        className={styles.title}
        onClick={() => {
          // 这里故意设置了一个错误，会触发运行时配置
          // @ts-ignore
          setCount({ a: 123123 });
        }}
      >
        Page index
      </h1>
    </div>
  );
}
