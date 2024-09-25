import Spline from "@splinetool/react-spline";
import React from "react";
import styled from "styled-components";
import "./styles/App.css";

export default function ComputerHero({ id }) {
  return (
    <div className="ThreedContainer" id={id}>
      <Wrapper>
        <Spline
          scene="https://prod.spline.design/A8GqjKLBpzrMR-JR/scene.splinecode
    "
          loading="lazy"
        />
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
  margin: 0 auto;
`;
