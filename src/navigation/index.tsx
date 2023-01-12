import React, { memo } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "configs";
import Login from "container/Account/Login";
import ForgetPassword from "container/Account/ForgetPassword";
import RecoveryPassword from "container/Account/RecoveryPassword";
import ChangePasswordSuccessful from "container/Account/ChangePasswordSuccessful";
import SignUp from "container/Account/SignUp";
import VerifyPhoneNumber from "container/Account/VerifyPhoneNumber";
import SignUpSuccessful from "container/Account/SignUpSuccessful";
import FollowTopic from "container/UpdateProfile/FollowTopic";
import OtherInformation from "container/UpdateProfile/OtherInformation";
import BasicInformation from "container/UpdateProfile/BasicInformation";
import SentVerifySuccessful from "container/UpdateProfile/SentVerifySuccessful";
import MainTab from "./MainTab";
import Notification from "container/HomeDashboard/Notification";
import TodayTasks from "container/TodayTasks/TodayTasks";
import TodayTasksDetail from "container/TodayTasks/TodayTasksDetail";
import OnBoarding from "container/OnBoarding";
import DoctorProfile from "container/DoctorProfile";
import AccountFiles from "container/Setting/AccountFiles";
import AccountPaymentMethod from "container/Setting/AccountPaymentMethod";
import MyRecord from "container/MyRecord/MyRecord";
import MyRecordBasicInformation from "container/MyRecord/MyRecordBasicInformation";
import MyRecordHealthMetric from "container/MyRecord/MyRecordHealthMetric";
import MyRecordCondition from "container/MyRecord/MyRecordCondition";
import HealthQuestion from "container/AskFreeQuestion/HealthQuestion";
import HealthSearch from "container/HealthSearch";
import InviteFriendsForFriend from "container/Setting/InviteFriendForFriend";
import InviteFriendForYou from "container/Setting/InviteFriendForYou";
import PastConsultMessage from "container/PastConsult/PastConsultMessage";
import PastConsultLiveChat from "container/PastConsult/PastConsultLiveChat";
import PastConsultLiveChatHistory from "container/PastConsult/PastConsultLiveChatHistory";
import PastConsultAppointment from "container/PastConsult/PastConsultAppointment";
import PastConsultVideoCall from "container/PastConsult/PastConsultVideoCall";
import PastConsultNewReminder from "container/PastConsult/PastConsultNewReminder";
import SentSuccessQuestion from "container/AskFreeQuestion/SentSuccessQuestion";
import MyQuestion from "container/MyPlus/MyQuestion";
import OnlineConsult from "container/OnlineConsult";
import SelectSpecial from "container/PrivateCareService/SelectSpecial";
import MyQuestionDetail from "container/MyPlus/MyQuestionDetail";
import HealthGuide from "container/MyPlus/HealthGuide";
import HealthGuideDetail from "container/MyPlus/HealthGuideDetail";
import PrivateCareDetails from "container/PrivateCareService/PrivateCareDetails";
import PrivateCarePayment from "container/PrivateCareService/PrivateCarePayment";
import PaymentAddCard from "container/PrivateCareService/PaymentAddCard";
import PaymentChangeCard from "container/PrivateCareService/PaymentChangeCard";
import PaymentSuccessful from "container/PrivateCareService/PaymentSuccessful";
import PastConsultReminder from "container/PastConsult/PastConsultReminder";
import MyCareTeam from "container/MyPlus/MyCareTeam";
import Consult from "container/Consult/Consult";
import ConsultCalendar from "container/Consult/ConsultCalendar";
import ConsultAppointment from "container/Consult/ConsultAppointment";
import ConsultLiveChat from "container/Consult/ConsultLiveChat";
import ConsultVoiceCall from "container/Consult/ConsultVoiceCall";
import FamilyDetail from "container/MyPlus/FamilyDetail";
import FamilyRecord from "container/MyPlus/FamilyRecord";
import BookAppointmentSuccessful from "container/BookAppointment/BookAppointmentSuccessful";
import BookAppointmentDetail from "container/BookAppointment/BookAppointmentDetail";
import BookAppointmentPayment from "container/BookAppointment/BookAppointmentPayment";
import MessageSentSuccessful from "container/SendMessage/MessageSentSuccessful";
import MessageConsultDetail from "container/SendMessage/MessageConsultDetail";
import MessagePayment from "container/SendMessage/MessagePayment";
import HealthFeed from "container/HealthFeed/HealthFeed";
import HealthFeedQuestionDetail from "container/HealthFeed/HealthFeedQuestionDetail";
import HealthFeedTipsDetail from "container/HealthFeed/HealthFeedTipsDetail";
import HealthFeedTopicDetail from "container/HealthFeed/HealthFeedTopicDetail";
import HealthFeedTopicDetailCondition from "container/HealthFeed/HealthFeedTopicDetailCondition";
import SearchResult from "container/Search/SearchResult";
import SearchFilter from "container/Search/SearchFilter";
import SelectVisitTime from "container/BookAppointment/SelectVisitTime";
import SearchSpecialDoctor from "container/SearchSpecial/SearchSpecialDoctor";
import SearchSpecialDoctorAround from "container/SearchSpecial/SearchSpecialDoctorAround";
import SearchSpecialCondition from "container/SearchSpecial/SearchSpecialCondition";
import SearchSpecialMedication from "container/SearchSpecial/SearchSpecialMedication";
import SearchSpecialMedicationDetail from "container/SearchSpecial/SearchSpecialMedicationDetail";
import SearchSpecialHospitals from "container/SearchSpecial/SearchSpecialHospitals";
import SearchSpecialHospitalsDetail from "container/SearchSpecial/SearchSpecialHospitalsDetail";
import CareServiceDetails from "container/PrivateCareServicesVideoCall/CareServiceDetails";
import ServiceSentSuccessful from "container/PrivateCareServicesVideoCall/ServiceSentSuccessful";
import VideoCall from "container/PrivateCareServicesVideoCall/VideoCall";
import ReviewDoctor from "container/PrivateCareServicesVideoCall/ReviewDoctor";
import ServicesPayment from "container/PrivateCareServicesVideoCall/ServicesPayment";
import PrivateCareLiveChat from "container/PrivateCareServicesVideoCall/PrivateCareLiveChat";

const Stack = createStackNavigator();

const RootStack = memo(() => {
  return (
    <Stack.Navigator initialRouteName={Routes.OnBoarding}>
      <Stack.Screen
        name={Routes.OnBoarding}
        component={OnBoarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.MainTab}
        component={MainTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.Login}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={Routes.ForgetPassword} component={ForgetPassword} />
      <Stack.Screen
        name={Routes.RecoveryPassword}
        component={RecoveryPassword}
      />
      <Stack.Screen
        name={Routes.ChangePasswordSuccessful}
        component={ChangePasswordSuccessful}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={Routes.SignUp} component={SignUp} />
      <Stack.Screen
        name={Routes.VerifyPhoneNumber}
        component={VerifyPhoneNumber}
      />
      <Stack.Screen
        name={Routes.SignUpSuccessful}
        component={SignUpSuccessful}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.BasicInformation}
        component={BasicInformation}
      />
      <Stack.Screen name={Routes.FollowTopic} component={FollowTopic} />
      <Stack.Screen
        name={Routes.OtherInformation}
        component={OtherInformation}
      />
      <Stack.Screen
        name={Routes.SentVerifySuccessful}
        component={SentVerifySuccessful}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={Routes.Notification} component={Notification} />
      <Stack.Screen name={Routes.SelectVisitTime} component={SelectVisitTime} />
      <Stack.Screen name={Routes.ReviewDoctor} component={ReviewDoctor} />
      <Stack.Screen
        name={Routes.VideoCall}
        component={VideoCall}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.CareServiceDetails}
        component={CareServiceDetails}
      />
      <Stack.Screen
        name={Routes.BookAppointmentDetail}
        component={BookAppointmentDetail}
      />
      <Stack.Screen
        name={Routes.BookAppointmentPayment}
        component={BookAppointmentPayment}
      />
      <Stack.Screen
        name={Routes.BookAppointmentSuccessful}
        component={BookAppointmentSuccessful}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={Routes.Consult} component={Consult} />
      <Stack.Screen
        name={Routes.ConsultVoiceCall}
        component={ConsultVoiceCall}
      />
      <Stack.Screen name={Routes.ConsultLiveChat} component={ConsultLiveChat} />
      <Stack.Screen
        name={Routes.MessageConsultDetail}
        component={MessageConsultDetail}
      />
      <Stack.Screen name={Routes.MessagePayment} component={MessagePayment} />

      <Stack.Screen
        name={Routes.MessageSentSuccessful}
        component={MessageSentSuccessful}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.ConsultAppointment}
        component={ConsultAppointment}
      />
      <Stack.Screen name={Routes.ConsultCalendar} component={ConsultCalendar} />
      <Stack.Screen
        name={Routes.PastConsultReminder}
        component={PastConsultReminder}
      />
      <Stack.Screen
        name={Routes.PastConsultNewReminder}
        component={PastConsultNewReminder}
      />
      <Stack.Screen
        name={Routes.PastConsultVideoCall}
        component={PastConsultVideoCall}
      />
      <Stack.Screen
        name={Routes.PastConsultAppointment}
        component={PastConsultAppointment}
      />
      <Stack.Screen
        name={Routes.PastConsultLiveChatHistory}
        component={PastConsultLiveChatHistory}
      />
      <Stack.Screen
        name={Routes.PastConsultLiveChat}
        component={PastConsultLiveChat}
      />
      <Stack.Screen
        name={Routes.PastConsultMessage}
        component={PastConsultMessage}
      />
      <Stack.Screen
        name={Routes.MyRecord}
        component={MyRecord}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.MyRecordBasicInformation}
        component={MyRecordBasicInformation}
      />
      <Stack.Screen
        name={Routes.MyRecordHealthMetric}
        component={MyRecordHealthMetric}
      />
      <Stack.Screen
        name={Routes.MyRecordCondition}
        component={MyRecordCondition}
      />
      <Stack.Screen name={Routes.TodayTask} component={TodayTasks} />
      <Stack.Screen
        name={Routes.TodayTaskDetails}
        component={TodayTasksDetail}
      />
      <Stack.Screen name={Routes.DoctorProfile} component={DoctorProfile} />
      <Stack.Screen name={Routes.AccountFile} component={AccountFiles} />
      <Stack.Screen name={Routes.HealthQuestion} component={HealthQuestion} />
      <Stack.Screen name={Routes.HealthSearch} component={HealthSearch} />
      <Stack.Screen name={Routes.SearchFilter} component={SearchFilter} />
      <Stack.Screen name={Routes.ServicesPayment} component={ServicesPayment} />
      <Stack.Screen
        name={Routes.PrivateCareLiveChat}
        component={PrivateCareLiveChat}
      />
      <Stack.Screen
        name={Routes.ServiceSentSuccessful}
        component={ServiceSentSuccessful}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.SearchSpecialHospitalsDetail}
        component={SearchSpecialHospitalsDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.SearchSpecialHospitals}
        component={SearchSpecialHospitals}
      />
      <Stack.Screen
        name={Routes.SearchSpecialMedicationDetail}
        component={SearchSpecialMedicationDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.SearchSpecialMedication}
        component={SearchSpecialMedication}
      />
      <Stack.Screen
        name={Routes.SearchSpecialCondition}
        component={SearchSpecialCondition}
      />
      <Stack.Screen
        name={Routes.SearchSpecialDoctorArround}
        component={SearchSpecialDoctorAround}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.SearchSpecialDoctor}
        component={SearchSpecialDoctor}
      />
      <Stack.Screen
        name={Routes.SearchResult}
        component={SearchResult}
        options={{ headerShown: false }}
      />

      <Stack.Screen name={Routes.HealthFeed} component={HealthFeed} />
      <Stack.Screen
        name={Routes.HealthFeedTopicDetailCondition}
        component={HealthFeedTopicDetailCondition}
      />
      <Stack.Screen
        name={Routes.HealthFeedTopicDetail}
        component={HealthFeedTopicDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.HealthFeedTipsDetail}
        component={HealthFeedTipsDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.HealthFeedQuestionDetail}
        component={HealthFeedQuestionDetail}
      />

      <Stack.Screen
        name={Routes.SendSuccessful}
        component={SentSuccessQuestion}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.AccountPaymentMethod}
        component={AccountPaymentMethod}
      />
      <Stack.Screen
        name={Routes.InviteFriendForYou}
        component={InviteFriendForYou}
      />
      <Stack.Screen
        name={Routes.InviteFriendForFriend}
        component={InviteFriendsForFriend}
      />
      <Stack.Screen name={Routes.MyQuestion} component={MyQuestion} />
      <Stack.Screen
        name={Routes.PaymentChangeCard}
        component={PaymentChangeCard}
      />
      <Stack.Screen name={Routes.PaymentAddCard} component={PaymentAddCard} />
      <Stack.Screen
        name={Routes.PaymentSuccessful}
        component={PaymentSuccessful}
      />
      <Stack.Screen
        name={Routes.PrivateCarePayment}
        component={PrivateCarePayment}
      />
      <Stack.Screen
        name={Routes.PrivateCareDetails}
        component={PrivateCareDetails}
      />
      <Stack.Screen name={Routes.OnlineConsult} component={OnlineConsult} />
      <Stack.Screen name={Routes.SelectSpecial} component={SelectSpecial} />
      <Stack.Screen
        name={Routes.MyQuestionDetail}
        component={MyQuestionDetail}
      />
      <Stack.Screen name={Routes.HealthGuide} component={HealthGuide} />
      <Stack.Screen
        name={Routes.HealthGuideDetail}
        component={HealthGuideDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={Routes.MyCareTeam} component={MyCareTeam} />
      <Stack.Screen name={Routes.FamilyRecord} component={FamilyRecord} />
      <Stack.Screen name={Routes.FamilyDetail} component={FamilyDetail} />
    </Stack.Navigator>
  );
});

export default RootStack;
