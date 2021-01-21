import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
.fade-in{
  animation-name: fadeIn;
  animation-duration: 500ms;
  transition-timing-function: ease-in-out;
}
.fade-in-up{
  animation-name: fadeInUp;
  animation-duration: 500ms;
  transition-timing-function: ease-in-out;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
`

export default GlobalStyle
