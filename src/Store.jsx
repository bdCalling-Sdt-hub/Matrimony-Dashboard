import { configureStore } from "@reduxjs/toolkit";
import SigninReducer from "./ReduxSlices/SigninSlice";
import BookingDataReducer from "./ReduxSlices/BookingSlice";
import DashboardHomeDataReducer from "./ReduxSlices/DashboardHomeSlice";
import UserInformationReducer from "./ReduxSlices/UserInformationSlice";
import HostInformationReducer from "./ReduxSlices/HostInformationSlice";
import ResidenceInformationReducer from "./ReduxSlices/ResidenceInformationSlice";
import NotificationsSlice from "./ReduxSlices/NotificationsSlice";
import LoginActivitySlice from "./ReduxSlices/LoginActivitySlice";
import AdditionalMatchRequestSlice from "./ReduxSlices/AdditionalMatchRequestSlice";
import SubscriptionSlice from "./ReduxSlices/SubscriptionSlice";
import PaymentSlice from "./ReduxSlices/PaymentSlice";
import SubscriptionCountSlice from "./ReduxSlices/SubscriptionCountSlice";
import ReportedUserSlice from "./ReduxSlices/ReportedUserSlice";
import SuspendUsersSlice from "./ReduxSlices/SuspendUsersSlice";

export const Store = configureStore({
  reducer: {
    UserData: SigninReducer,
    // BookingData: BookingDataReducer,
    // DashboardHomeData: DashboardHomeDataReducer,
    UserInformationData: UserInformationReducer,
    AdditionalMatchRequestData: AdditionalMatchRequestSlice,
    SubscriptionData: SubscriptionSlice,
    PaymentData: PaymentSlice,
    SubscriptionCountData: SubscriptionCountSlice,
    ReportedUserData: ReportedUserSlice,
    SuspendUsersData: SuspendUsersSlice,
    // HostInformationData: HostInformationReducer,
    // ResidenceInformationData: ResidenceInformationReducer,
    // NotificationsData: NotificationsSlice,
    // LoginActivity: LoginActivitySlice,
  },
});
