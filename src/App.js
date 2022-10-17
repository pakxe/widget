import styled from "styled-components";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { motion } from "framer-motion";

// 뒤의 그라데이션 배경
const Background = styled(motion.div)`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "initial"};
  align-items: ${(props) => props.align || "initial"};
  width: 100vw;
  height: 100vh;
`;

// 중앙에 하얀 박스
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

// 박스 안의 글자
const Typo = styled.div`
  color: black;
  font-size: ${(props) => props.size || "14px"};
`;

// 그라데이션 애니메이션 객체
const Animation = {
  start: { background: "linear-gradient(45deg, #325565d6, #71d890d6)" },
  end: {
    background:
      "linear-gradient(45deg, rgb(215 78 78 / 50%), rgb(249 181 103 / 50%))",
    transition: { duration: 5, repeatType: "reverse", repeat: Infinity },
  },
};

function App() {
  const [days, setDays] = useState(); // 디데이를 저장할 변수

  // 날짜 갱신을 위해..
  useEffect(() => {
    const christmas = moment("2022-12-25");
    const id = setInterval(() => {
      const now = moment();
      setTime(setDays(christmas.diff(now, "days")));
    }, 1000);
    return () => clearInterval(id);
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
