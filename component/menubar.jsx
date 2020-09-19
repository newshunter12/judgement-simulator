import Link from "next/Link";
import React from "react";

function Menubar() {
  return (
    <div className="grid">
      <p className="description">내가 판사라니!?</p>
      <a href="/cases" className="card">
        <h3>판결하러 가기</h3>
      </a>

      {/*<a href="https://nextjs.org/learn" className="card">
        <h3>(2) 양형 조건 </h3>
      </a>

      <a href="https://github.com/zeit/next.js/tree/master/examples" className="card">
        <h3>(3) 가중/감경 </h3>
      </a>

      <a
        href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className="card"
      >
        <h3>(4) 판결 결과와 실제 형량 </h3>
      </a>*/}
    </div>
  );
}
export default Menubar;
