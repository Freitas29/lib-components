import styled from "vue-styled-components";

const Wrapper = styled.div`
  transition: background .3s cubic-bezier(0.45, 0.05, 0.55, 0.95);
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text}
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
 `;

export default Wrapper;
