import styled from "styled-components";
import React, { useEffect, useState } from "react";
import moment from "moment";
import Flex from "./components/Flex/index";
import { motion, transform } from "framer-motion";

const Background = styled(motion.div)`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "initial"};
  align-items: ${(props) => props.align || "initial"};
  width: 100vw;
  height: 100vh;
`;

const Box = styled(motion.div)`
  opacity: 0.9;
  width: 160px;
  height: 80px;
  border-radius: 6px;
  background-color: white;
  box-shadow: 0 3px 10px 8px rgba(0, 0, 0, 0.17);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Typo = styled.div`
  color: black;
  font-size: ${(props) => props.size || "14px"}; // 단축 평가 표현식
`;

const Animation = {
  start: { background: "linear-gradient(45deg, #325565d6, #71d890d6)" },
  end: {
    background:
      "linear-gradient(45deg, rgb(215 78 78 / 50%), rgb(249 181 103 / 50%))",
    transition: { duration: 5, repeatType: "reverse", repeat: Infinity },
  },
};
function App() {
  const [days, setDays] = useState();

  useEffect(() => {
    // setInterval로 시계만드는 법을 잘 모르겠다.. 고쳐야할 듯
    const now = moment(); // 현재 날짜와 시간 객체 생성
    const christmas = moment("2022-12-25"); // 날짜 및 시간 지정 생성

    setDays(christmas.diff(now, "days"));
  }, []);

  return (
    <Background
      justify="center"
      align="center"
      direction="column"
      initial="start"
      animate="end"
      variants={Animation}
    >
      <Box
        whileHover={{ scale: [null, 1.3, 1.2] }}
        transition={{ duration: 0.3 }}
        whileTap={{ scale: 0.9 }}
      >
        <Typo style={{ marginBottom: "10px" }}>🎄♡◟(●•ᴗ•●)◞♡🎄</Typo>
        <Typo size="20px" style={{ fontWeight: "700" }}>
          D - {days}
        </Typo>
      </Box>
    </Background>
  );
}

export default App;
/*

scale은 0.1 차이가 제일 적당함
 왜 이상하게 배포가 되는걸까...
 */
