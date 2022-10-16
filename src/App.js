import styled from "styled-components";

const Back = styled.div`
  height: 390px;
  width: 100%;
  background-color: pink;
`;
const Title = styled.h1`
  // Title 컴포넌트 = h1태그를 스타일링한 컴포넌트
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  // Wrapper 컴포넌트 = section태그를 스타일링한 컴포넌트
  padding: 4em;
  background: papayawhip;
`;

function App() {
  return (
    <>
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
    </>
  );
}

export default App;
