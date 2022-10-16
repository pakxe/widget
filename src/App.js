import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => (props.on ? "palevioletred" : "white")};
  color: ${(props) => (props.on ? "white" : "palevioletred")};

  border: 2px solid palevioletred;
  border-radius: 3px;
  padding: 10px;
  margin: 10px;
`;

function App() {
  return (
    <>
      <Button>OFF</Button>
      <Button on>ON</Button>
    </>
  );
}

export default App;
