//import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import {Admin, Cashier, Dashboard, Doctor, Login, Nurse} from "./scenes";
import Patient from "./scenes/Patient";
import PatientAppointments from "./scenes/PatientAppointments";
import PatientVitals from "./scenes/PatientVitals";
import Checkup from "./scenes/Checkup";
import Profile from "./scenes/Profile";
import ChangePassword from "./scenes/account/ChangePassword";
import ForgotPassword from "./scenes/account/ForgotPassword";

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
            <Routes><Route path="/profile" element={<Profile />} /> </Routes>
            <Routes><Route path="/doctor" element={<Doctor />} /></Routes>
            <Routes><Route path="/patient" element={<Patient />} /></Routes>
            <Routes><Route path="/nurse" element={<Nurse />} /></Routes>
            <Routes><Route path="/cashier" element={<Cashier />} /></Routes>
            <Routes><Route path="/patientAppointments" element={<PatientAppointments />} /></Routes>
            <Routes><Route path="/patientVitals" element={<PatientVitals />} /></Routes>
            <Routes><Route path="/checkup" element={<Checkup />} /></Routes>
            <Routes><Route path="/changePassword" element={<ChangePassword />} /></Routes>
            <Routes><Route path="/forgotPassword" element={<ForgotPassword />} /></Routes>
            <Routes><Route path="/login" element={<Login />} /></Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;