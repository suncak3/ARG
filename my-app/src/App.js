import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Slider from "./components/Slider";
import ToolsList from "./components/ToolsList";
import AboutCompany from "./components/AboutCompany";
import PartnersList from "./components/PartnersList";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
          <Slider />
          <ToolsList />
          <AboutCompany />
          <PartnersList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
