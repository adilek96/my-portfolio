import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import ContentHome from "./ContentHome";
import ContentAbout from "./ContentAbout";
import ContentSkills from "./ContentSkills";
import ContentEdu from "./ContentEdu";
import ContentContact from "./ContentContact";
import ContentPortfolio from "./ContentPortfolio";
import { debounce } from "lodash";

import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const handleWheel = (event) => {
      if (isNavigating) return; // Если уже идет навигация, пропустить дополнительные события

      const delta = Math.round(event.deltaY);
      console.log(delta);

      setIsNavigating(true); // Устанавливаем флаг начала навигации

      if (delta > 5) {
        // Прокрутка вниз - переход на следующую страницу
        switch (location.pathname) {
          case "/":
            navigate("/portfolio");
            break;
          case "/portfolio":
            navigate("/contact");
            break;
          case "/contact":
            navigate("/education");
            break;
          case "/education":
            navigate("/skills");
            break;
          case "/skills":
            navigate("/about");
            break;
          case "/about":
            navigate("/");
            break;
          default:
            setIsNavigating(false); // Если ни один из маршрутов не совпал, сбросить флаг навигации
        }
      } else if (delta < -5) {
        // Прокрутка вверх - переход на предыдущую страницу
        switch (location.pathname) {
          case "/":
            navigate("/about");
            break;
          case "/about":
            navigate("/skills");
            break;
          case "/skills":
            navigate("/education");
            break;
          case "/education":
            navigate("/contact");
            break;
          case "/contact":
            navigate("/portfolio");
            break;
          case "/portfolio":
            navigate("/");
            break;
          default:
            setIsNavigating(false); // Если ни один из маршрутов не совпал, сбросить флаг навигации
        }
      }

      // Ждем небольшой интервал перед снятием флага, чтобы избежать повторной обработки быстрого скролла
      setTimeout(() => setIsNavigating(false), 300);
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isNavigating, navigate, location]);

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
