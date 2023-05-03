import React, { useState } from "react";
import "./App.css";
import Header from "./components/layouts/Header";
import Sidebar from "./components/layouts/Sidebar";
import AppRouter from "./components/routes";
import Footer from "./components/layouts/Footer";
import Rightbar from "./components/layouts/Rightbar";
function App() {
  const [display, setDisplay] = useState(false);
  const [homeId, setHomeId] = useState("");
  return (
    <div className="App">
      {/* <Header /> */}
      <div className="appSidebar-router">
        <Sidebar
          display={display}
          setDisplay={setDisplay}
          homeId={homeId}
          setHomeId={setHomeId}
        />
        <AppRouter
          display={display}
          setDisplay={setDisplay}
          homeId={homeId}
          setHomeId={setHomeId}
        />
        <Rightbar homeId={homeId} />
      </div>
      <Footer />
    </div>
  );
}
export default App;
