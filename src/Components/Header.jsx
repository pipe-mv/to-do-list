import React from "react";
import icon from "../images/checklist-2.png";

function Header() {
  return (
    <header>
      <h1>
        <img className="icon" src={icon} alt="" />
        <a href="https://www.fontspace.com/category/cool">
          <img
            src="https://see.fontimg.com/api/renderfont4/3zRBM/eyJyIjoiZnMiLCJoIjoxNDMsInciOjEwMDAsImZzIjoxNDMsImZnYyI6IiNGRkZGRkYiLCJiZ2MiOiIjMTcxNjE2IiwidCI6MX0/VGhlIExpc3Rlcg/attack-graffiti.png"
            alt="Cool fonts"
          />
        </a>
      </h1>
    </header>
  );
}

export default Header;
