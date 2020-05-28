import styled from "vue-styled-components";

const typeButton = {
  background: String,
  ripple: String,
  animation: Number,
  height: String,
  width: String,
  radius: Number,
  fontSize: String
};

const StyledTitle = styled("button", typeButton)`
  font-size: ${props => props.fontSize};
  text-align: center;
  font-weight: 400;
  height: ${props => props.height};
  width: ${props => props.width};
  border: none;
  border-radius: ${props => props.radius}px;
  cursor: pointer;
  transition: opacity 0.5s;
  outline: none;
  overflow: hidden;
  position: relative;
  color: #fff;
  text-transform: capitalize;
  display: inline-block;
  background-color: ${props => props.background};

  span {
    cursor: pointer;
    background-color: ${props => props.ripple};
    width: 1rem;
    height: 1rem;
    position: absolute;
    border-radius: 50%;
    transform: translateX(-100%) translateY(-100%);
    animation: ripple ${props => props.animation}ms ease-out forwards;
  }

  @keyframes ripple {
    0% {
      transform: translate(-100%, -100%);
    }
    80% {
      transform: translate(-100%, -100%) scale(50);
    }
    100% {
      transform: translate(-100%, -100%) scale(50);
      opacity: 0;
    }
  }
`;
export default StyledTitle;
