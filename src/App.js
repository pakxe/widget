import styled from "styled-components";
import { css } from "styled-components";

const Input = styled.input.attrs((props) => ({
  // 미리 props를 설정한다. Input 컴포넌트는 <input type='text' size='1em'>와 같아진다.
  type: "text",
  size: props.size || "1em",
}))`
  // css 스타일링
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

function App() {
  return (
    <>
      <Input></Input>
      <Input size="2em"></Input>
    </>
  );
}

export default App;
