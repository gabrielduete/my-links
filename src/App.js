import React from "react"
import Header from "./components/Header/Header"
import ParticlesBG from "./components/Particles/ParticlesBG"
import WrapperButtons from "./components/Wrapperbuttons/WrapperButtons.jsx"
import { GlobalStyle, WrapperAll, Wrapper } from "./style/styles"

function App() {
  return (
    <WrapperAll>
      <ParticlesBG />
      <Wrapper>
        <GlobalStyle whiteColor />
        <Header />
        <WrapperButtons />
      </Wrapper>
    </WrapperAll>
  );
}

export default App
