import styled from "styled-components";
import React, { useEffect, useState } from "react";
import moment from "moment";
import Flex from "./components/Flex/index";
import { motion } from "framer-motion";

const Background = styled(Flex)`
  background-color: #c8dcc9;
  width: 100vw;
  height: 100vh;
`;

const Typo = styled.div`
  color: white;
  font-size: ${(props) => props.size || "22px"}; // 단축 평가 표현식
`;

function App() {
  const [days, setDays] = useState();

  useEffect(() => {
    // setInterval로 시계만드는 법을 잘 모르겠다.. 고쳐야할 듯
    const now = moment(); // 현재 날짜와 시간 객체 생성
    const christmas = moment("2022-12-25"); // 날짜 및 시간 지정 생성

    setDays(christmas.diff(now, "days"));
  }, []);

  return (
    <Background justify="center" align="center" direction="column">
      <Typo style={{ marginBottom: "10px" }}>🎄♡◟(●•ᴗ•●)◞♡🎄</Typo>
      <Typo size="18px">D - {days}</Typo>
    </Background>
  );
}

export default App;
