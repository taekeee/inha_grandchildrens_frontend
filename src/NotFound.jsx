import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Con = styled.div`
  font-weight: 100px;
  font-size: 80%;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 30%;
  text-align: center;
`;

const NextButton = styled.button`
  width: 60%;
  height: 8vh;
  background: linear-gradient(97.27deg, #df7857 0%, #e7ab9a 100%);
  border-radius: 5px;
  color: white;
  font-size: 1.6rem;
  margin-top: 10%;
  margin-bottom: 10%;
  font-weight: bold;
  border: none;
  text-align: center;
`;

const Img = styled.img`
  content: url(/startPageLogo.png);
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20%;
  margin-bottom: 20%;
`;
const NotFound = () => {
  const Back = () => {
    navigate(-1);
  };

  const navigate = useNavigate();
  return (
    <Con>
      <h1>
        페이지를
        <br /> 찾을 수 없습니다.
      </h1>
      <Div>
        <Img />
      </Div>
      <NextButton onClick={Back}>이전으로</NextButton>
    </Con>
  );
};

export default NotFound;
