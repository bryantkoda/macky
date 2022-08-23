import React from "react";
import { useNavigate } from "react-router-dom";
import { CardContainer, ButtonFooter } from "../components";

export default function HomePage() {
  const navigate = useNavigate();

  const footer = (
    <ButtonFooter title="Begin" onClick={() => navigate("/quiz")} />
  );

  return (
    <CardContainer footer={footer}>
      <div className="home">
        <img src={require("../images/logo.png")} alt="company-logo" />
        <h1>Welcome to the Trivia Challenge!</h1>
        <p>You will be presented with 10 True or False questions.</p>
        <div className="home-highlight">
          <p>Can you score 100%?</p>
        </div>
      </div>
    </CardContainer>
  );
}
