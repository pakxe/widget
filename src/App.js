import styled from "styled-components";

const Thing = styled.div`
  color: blue;

  &:hover {
    // <Thing>에 hover상태일 때
    color: red;
  }

  & ~ & {
    // 첫번째 출현하는 <Thing> 뒤에 있는 모든 <Thing>에게 적용. 첫번째 <Thing>은 적용되지 않음
    background: tomato;
  }

  & + & {
    // <Thing> 출현 후 바로 뒤따르는 B요소에게 적용
    background: lime;
  }

  &.something {
    // 클래스명이 'something'인 <Thing>에게 적용
    background: orange;
  }

  .something-else & {
    // 클래스명이 'something-else'인 임의의 컴포넌트 안에 있는 모든 <Thing>
    border: 1px solid red;
  }
`;

function App() {
  return (
    <>
      <Thing>normal</Thing>
      <Thing>& + &</Thing>
      <Thing className="something">
        Im Thing, and my className='something'
      </Thing>
      <div>im div tag</div>
      <Thing>& ~ &</Thing>
      <div className="something-else">
        <Thing>
          Im Thing inside div tag, and the div className='something'
        </Thing>
      </div>
    </>
  );
}

export default App;
