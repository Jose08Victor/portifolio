import styled from "styled-components";
import { BackgroundShapes } from "./components/back-shapes/index.jsx";
import { GlobalStyle } from "./global-style.jsx";
import { AppRoutes } from "./pages/routes.jsx";
import { ThemeProvider } from "./theme-context/index.jsx";

function App() {

  return (
    <>
      <GlobalStyle />
      
      <ThemeProvider>

        <BackgroundShapes />

        <Container>

          <AppRoutes />

        </Container>
      </ThemeProvider>
    </>
  )
}

const Container = styled.div`
    width: 99%;
    background-color: #222;
    margin: 1vh auto auto;
    position: relative;
    min-height: 98vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default App