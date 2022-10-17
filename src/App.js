import styled from "styled-components";

const Button = styled.button`
  // color props가 있다면 그 props의 값으로 배경색을 지정한다.
  // 전달받은 props가 없다면 기본값인 palevioletred로 배경색을 지정한다.
  background: ${(props) => props.color || "palevioletred"};
  color: white;

  border: 2px solid white;
  padding: 10px;
  margin: 10px;
`;

function App() {
  return (
    <>
      <Button color="tomato">OFF</Button>
      <Button>ON</Button>
    </>
  );
}

export default App;
