import styled from "styled-components";
import { BackgroundShapes } from "./components/back-shapes/index.jsx";
import { GlobalStyle } from "./global-style.jsx";
import { AppRoutes } from "./pages/routes.jsx";
import { ThemeProvider } from "./theme-context";

function App() {

  return (
    <>
      <ThemeProvider>

        <GlobalStyle />

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
    background-color: #181818;
    margin: 1vh auto auto;
    position: relative;
    min-height: 98vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(max-width: 900px) {
       width: 98%;
    }

    @media(max-width: 475px) {
       width: 97%;
    }
`

export default App