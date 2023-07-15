import React from "react";

export default function ContentHome() {
  return (
    <article className="content__home">
      <div className="content__home-text">
        <h2>
          <span>Hello,</span>
          <br /> my name is <br />
          <span>Adil Ashurov</span>
        </h2>
        <p>
          I`m a <b>front-end developer.</b>
        </p>
      </div>
      <div className="content__home-img">
        <img src="../img/image.png" />
      </div>
    </article>
  );
}
