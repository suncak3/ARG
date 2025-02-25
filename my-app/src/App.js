import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <h1 className="text-center text-2xl font-bold mt-10">Главная страница</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
