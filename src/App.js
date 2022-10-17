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
  font-size: ${(props) => props.size || "14px"}; // 단축 평가 표현식
`;

// 그라데이션 애니메이션 객체
const Animation = {
  start: { background: "linear-gradient(45deg, #325565d6, #71d890d6)" }, // 시작 그라데이션
  end: {
    background:
      "linear-gradient(45deg, rgb(215 78 78 / 50%), rgb(249 181 103 / 50%))", // 종료 그라데이션
    transition: { duration: 5, repeatType: "reverse", repeat: Infinity },
    // 움직임에 걸리는 시간은 5초, 반복하는 방법은 왔다갔다.., 반복은 무한번 반복
  },
};

function App() {
  const [days, setDays] = useState(); // 디데이를 저장할 변수

  // 날짜 갱신을 위해..
  useEffect(() => {
    // setInterval로 시계만드는 법을 잘 모르겠다.. 고쳐야할 듯
    const christmas = moment("2022-12-25"); // 날짜 및 시간 지정 생성
    const id = setInterval(() => {
      const now = moment(); // 현재 날짜와 시간 객체 생성
      setTime(setDays(christmas.diff(now, "days")));
    }, 1000); // 1초마다 갱신한다
    return () => clearInterval(id);
  }, []);

  return (
    <Background
      justify="center"
      align="center"
      direction="column"
      initial="start"
      animate="end"
      variants={Animation} // 배경에 애니메이션 객체 연결
    >
      <Box
        whileHover={{ scale: [null, 1.3, 1.2] }} // 호버 애니메이션
        transition={{ duration: 0.3 }} // 움직임에 걸리는 시간
        whileTap={{ scale: 0.9 }} // 클릭 애니메이션
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

 */
