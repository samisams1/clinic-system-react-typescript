//import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import {Admin, Cashier, Dashboard, Doctor, Login, Nurse, Register} from "./scenes";
import Patient from "./scenes/Patient";

function App() {
  const [theme, colorMode] = useMode();
 // const [isSidebar, setIsSidebar] = useState<boolean>(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes> <Route path="/" element={<Dashboard />} /></Routes>
            <Routes><Route path="/admin" element={<Admin />} /> </Routes>
            <Routes><Route path="/doctor" element={<Doctor />} /></Routes>
            <Routes><Route path="/patient" element={<Patient />} /></Routes>
            <Routes><Route path="/nurse" element={<Nurse />} /></Routes>
            <Routes><Route path="/cashier" element={<Cashier />} /></Routes>
            <Routes><Route path="/login" element={<Login />} /></Routes>
            <Routes><Route path="/register" element={<Register />} /></Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;