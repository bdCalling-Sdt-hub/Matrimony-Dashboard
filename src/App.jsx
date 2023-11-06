import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import Earning from "./Pages/Dashboard/Earning/Earning";
import MatchRequest from "./Pages/Dashboard/Subscription/MatchRequest";
import Subscription from "./Pages/Dashboard/Subscription/Subscription";
import KycForm from "./Pages/Dashboard/Kyc/KycForm";
import Notification from "./Pages/Dashboard/Notification/Notification";
import Wallet from "./Pages/Dashboard/Wallet/Wallet";
import Email from "./Pages/Email/Email";
import Otp from "./Pages/Otp/Otp";
import Signin from "./Pages/Signin/Signin";
import UpdatePass from "./Pages/UpdatePass/UpdatePass";

import NotFound from "./404";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import CarInformation from "./Pages/Dashboard/CarInformation/CarInformation";
import CarKyc from "./Pages/Dashboard/CarKyc/CarKyc";
import HostKyc from "./Pages/Dashboard/HostKyc/HostKyc";
import HostPayment from "./Pages/Dashboard/HostPayment/HostPayment";
import RentisIncome from "./Pages/Dashboard/RentisIncome/RentisIncome";
import Setting from "./Pages/Dashboard/Setting/Setting";
import SettingPage from "./Pages/Dashboard/Setting/SettingPage/SettingPage";
import StripeBills from "./Pages/Dashboard/StripeBills/StripeBills";
import UserKyc from "./Pages/Dashboard/UserKyc/UserKyc";
import UserPayment from "./Pages/Dashboard/UserPayment/UserPayment";
import MembersInformation from "./Pages/Dashboard/Members/MembersInformation";
import PersonalDetails from "./Pages/Dashboard/Members/PersonalDetails";
import ReportAccountInfo from "./Pages/Dashboard/ReportAccount/ReportAccountInfo";

function App() {
  return (
    <>
      <div className="maincontainer">
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path="/" element={<DashboardHome />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/earning/:income" element={<Earning />} />
              <Route path="/match-request" element={<MatchRequest />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/kyc-form" element={<KycForm />} />
              <Route path="/wallet" element={<Wallet />} />

              <Route path="/report-account" element={<ReportAccountInfo />} />
              <Route path="/rent-info" element={<MembersInformation />} />
              <Route path="/pesonal-details/:id" element={<PersonalDetails />} />
              <Route path="/car-info" element={<CarInformation />} />
              <Route path="/user-payment" element={<UserPayment />} />
              <Route path="/renti-income" element={<RentisIncome />} />
              <Route path="/host-payment" element={<HostPayment />} />
              <Route path="/stripe-bills" element={<StripeBills />} />
              <Route path="/host-kyc" element={<HostKyc />} />
              <Route path="/user-kyc" element={<UserKyc />} />
              <Route path="/car-kyc" element={<CarKyc />} />
              <Route path="/setting" element={<Setting />}></Route>
              <Route path="/setting/:dynamic" element={<SettingPage />} />
            </Route>


            <Route path="/signin" element={<Signin />} />
            <Route path="/email" element={<Email />} />
            <Route path="/forget-password" element={<Otp />} />
            <Route path="/update-password" element={<UpdatePass />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
