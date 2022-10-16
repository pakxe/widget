import styled from "styled-components";

const Button = styled.button`
  // 함수를 CSS 속성에 전달해줬다. 삼항연산자로 어떤 색을 적용할지 선택한다.
  background: white;
  color: palevioletred;
  border: 2px solid palevioletred;
  border-radius: 3px;
  padding: 10px;
  margin: 10px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

function App() {
  return (
    <>
      <Button>Normal Button</Button>
      <TomatoButton>Tomato Button</TomatoButton>
    </>
  );
}

export default App;
