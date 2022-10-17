import styled from "styled-components";
import { motion } from "framer-motion";

const Flex = styled(motion.div)`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "initial"};
  align-items: ${(props) => props.align || "initial"};
`;

export default Flex;
//테마같이 명확한 값이 있을때만 사용해야하는 건가!?
// const Flex = styled.div(
//   ({ props }) => css`
//     display: flex;
//     flex-direction: ${props.direction || "row"};
//     justify-content: ${props.justify};
//     align-items: ${props.align};
//   `
// );
// 함수가 아니면 {} 쓰지말고,, 그냥 ₩₩으로 감싸면 되는 듯
/*
  styled-components has full theming support by exporting a <ThemeProvider> wrapper component. This component provides a theme to all React components underneath itself via the context API. In the render tree all styled-components will have access to the provided theme, even when they are multiple levels deep.

  [interpolation]
  flex-direction: ${(props) => props.direction || "row"} 같은 표현은 
  
  flex-direction: ${(props = row) => {
    return (props.direction)
  }}
  와 같은 표현이다. 

  Q: 왜 화살표 함수를 사용해서 만들까?
  A: 

  export const Title = styled.div(({ theme }) => css`
  margin-top: 48px;
  font-family: ${theme.font};
  font-size: ${theme.sizeBig};
  color: ${theme.dark};
  font-weight: ${theme.fontWeight}
`)

*/
