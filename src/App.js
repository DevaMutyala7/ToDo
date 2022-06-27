import React from "react"
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainSection from "./components/MainSection";
import { AppStyle } from "./AppStyles";

function App() {
  return (
    <div className="App">
      <Header />
      <AppStyle>
        <Sidebar />
        <MainSection />
      </AppStyle>
    </div>
  );
}

export default App;
