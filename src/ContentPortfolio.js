import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function ContentPortfolio() {
  return (
    <div className="content__portfolio">
      <h2>My Works</h2>
      <Splide
        options={{
          type: "loop",
          perPage: 3,
          focus: "center",

          breakpoints: {
            920: {
              perPage: 1,
            },
          },
        }}
        aria-label="My Works"
      >
        <SplideSlide className="slide">
          <img src="../img/employersApp.png" alt="employersApp" />
        </SplideSlide>
        <SplideSlide className="slide">
          <img src="../img/coffeShop.png" alt="coffe-shopApp" />
        </SplideSlide>
        <SplideSlide className="slide">
          <img src="../img/currencyApp.png" alt="currencyApp" />
        </SplideSlide>
        <SplideSlide className="slide">
          <img src="../img/uberWeb.png" alt="uber_lending" />
        </SplideSlide>
      </Splide>
    </div>
  );
}
