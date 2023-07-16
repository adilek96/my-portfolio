import React from "react";
import Layout from "./Layout";
import ContentHome from "./ContentHome";
import ContentAbout from "./ContentAbout";
import ContentSkills from "./ContentSkills";
import ContentEdu from "./ContentEdu";
import ContentContact from "./ContentContact";
import ContentPortfolio from "./ContentPortfolio";

import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ContentHome />} />
        <Route path="about" element={<ContentAbout />} />
        <Route path="skills" element={<ContentSkills />} />
        <Route path="education" element={<ContentEdu />} />
        <Route path="contact" element={<ContentContact />} />
        <Route path="portfolio" element={<ContentPortfolio />} />
      </Route>
    </Routes>
  );
}

export default App;
