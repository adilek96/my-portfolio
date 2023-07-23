import React from "react";

import Header from "./Header";
import Aside from "./Aside";
import Content from "./Content";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Aside />
        {<Content />}
      </main>
      <Footer />
    </div>
  );
}
