import React from "react";
import { Outlet } from "react-router-dom";

export default function Content() {
  return (
    <section className="content">
      <Outlet />
    </section>
  );
}
