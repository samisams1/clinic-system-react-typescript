import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import IsAuthenticated from "./components/scensComponents/account/IsAuthenticated";
import { Admin, Cashier, Doctor, Login, Nurse } from "./scenes";
import ChangePassword from "./scenes/account/ChangePassword";
import ForgotPassword from "./scenes/account/ForgotPassword";
import Checkup from "./scenes/Checkup";
import Patient from "./scenes/Patient";
import PatientAppointments from "./scenes/PatientAppointments";
import PatientVitals from "./scenes/PatientVitals";
import Profile from "./scenes/Profile";
const RoutePage=()=>{
    return(
<>
 <BrowserRouter>
    <Routes>
        <Route element={<Login/>} path="/" />
        <Route path ="/login" element={ <Login/>}/>
<Route path="/admin" element={<IsAuthenticated><Admin /></IsAuthenticated>}/>
<Route path="/nurse" element={<IsAuthenticated><Nurse /></IsAuthenticated>}/>
<Route path="/cashier" element={<IsAuthenticated><Cashier /></IsAuthenticated>}/>
<Route path="/doctor" element={<IsAuthenticated><Doctor /></IsAuthenticated>}/>
<Route path="/checkup" element={<IsAuthenticated><Checkup /></IsAuthenticated>}/>
<Route path="/patient" element={<IsAuthenticated><Patient /></IsAuthenticated>}/>
<Route path="/patientVitals" element={<IsAuthenticated><PatientVitals /></IsAuthenticated>}/>
<Route path="/patientAppointments" element={<IsAuthenticated><PatientAppointments /></IsAuthenticated>}/>
<Route path="/forgotPassword" element={<IsAuthenticated><ForgotPassword /></IsAuthenticated>}/>
<Route path="/changePassword" element={<IsAuthenticated><ChangePassword /></IsAuthenticated>}/>
<Route path="/profile" element={<IsAuthenticated><Profile /></IsAuthenticated>}/>
    </Routes>
    </BrowserRouter>
</>
    )
   
}
export default RoutePage;