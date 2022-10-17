import styled from "styled-components";
import { css } from "styled-components";

// Input, LabelText를 감쌀 Label
const Label = styled.label`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;

// checkbox인 input
const Input = styled.input.attrs({ type: "checkbox" })``;
const LabelText = styled.span`
  // 아래처럼 앞부분에 작성하면 props를 많이 사용해야하는 코드에서 편리하다. props반복작성할 필요가 없으므로..
  ${(props) => {
    switch (props.$mode) {
      case "dark": // props.$mode의 값이 'dark'인 경우
        return css`
          background-color: black;
          color: white;
          ${Input}: checked + && {
            // 체크된 Input 컴포넌트 다음에 오는 <LabelText>에 적용
            color: blue;
          }
        `;
      default: // 그 외
        return css`
          background-color: white;
          color: black;
          ${Input}: checked + && {
            color: red;
          }
        `;
    }
  }}
`;

function App() {
  return (
    <>
      <Label>
        <Input defaultChecked />
        <LabelText>Foo</LabelText>
      </Label>
      <Label>
        <Input />
        <LabelText $mode="dark">Foo</LabelText>
        <LabelText $mode="dark">Foo</LabelText>
      </Label>
      <Label>
        <Input defaultChecked />
        <LabelText $mode="dark">Foo</LabelText>
        <LabelText $mode="dark">Foo</LabelText>
      </Label>
      <Label>
        <Input defaultChecked />
        <LabelText>Foo</LabelText>
      </Label>
    </>
  );
}

export default App;
