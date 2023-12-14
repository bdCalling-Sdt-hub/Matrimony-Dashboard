import { configureStore } from "@reduxjs/toolkit";
import SigninReducer from "./ReduxSlices/SigninSlice";
import UserInformationReducer from "./ReduxSlices/UserInformationSlice";
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
    UserInformationData: UserInformationReducer,
    AdditionalMatchRequestData: AdditionalMatchRequestSlice,
    SubscriptionData: SubscriptionSlice,
    PaymentData: PaymentSlice,
    SubscriptionCountData: SubscriptionCountSlice,
    ReportedUserData: ReportedUserSlice,
    SuspendUsersData: SuspendUsersSlice,
    LoginActivity: LoginActivitySlice,
  },
});
