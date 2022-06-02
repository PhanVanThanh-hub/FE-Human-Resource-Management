import React from "react";
import "./App.css";
import HomePage from "./pages/home/pages/index";
import ManagerPage from "./pages/manager/pages/index";
import PageProfile01 from "./pages/profile/page/index";
import GroupMember from "./pages/group_member/page/index";
import { Route, Switch } from "react-router-dom";
import DrawerContainer from "./layout/DrawerContainer";
import GroupPage from "./pages/group/page/index";
import AddMember from "./pages/add_member/page/index";
import AuthPage from "./pages/auth/page/index";
import DashboardPage from "./pages/dashboard/page/index";
import { useAppSelector } from "./app/hooks";
import { selectIsAdmin } from "./redux/auth/AuthSlice";
import { IS_ADMIN } from "./constants/login";
import HeaderStaff from "./components/header/staff";
import ProfilePage from "./pages/home_staff/page/Profile";

function App() {
  const loginInAdmin: string = useAppSelector(selectIsAdmin) || "";
  const renderAuth = () => {
    if (loginInAdmin === `"${IS_ADMIN.ADMIN}"`) {
      return (
        <DrawerContainer>
          <Switch>
            <Route path="/" exact>
              <DashboardPage />
            </Route>
            <Route path="/home" exact>
              <HomePage />
            </Route>
            <Route path="/manager" exact>
              <ManagerPage />
            </Route>
            <Route path="/manager/:id">
              <PageProfile01 />
            </Route>
            <Route path="/profile/:id">
              <PageProfile01 />
            </Route>
            <Route path="/group" exact>
              <GroupPage />
            </Route>
            <Route path="/group/:id">
              <GroupMember />
            </Route>
            <Route path="/add_member">
              <AddMember />
            </Route>
          </Switch>
        </DrawerContainer>
      );
    }
    if (loginInAdmin === `"${IS_ADMIN.NOT_ADMIN}"`) {
      return (
        <>
          <HeaderStaff />
          <Switch>
            <Route path="/" exact>
              <ProfilePage />
            </Route>
          </Switch>
        </>
      );
    }
    return (
      <Switch>
        <Route path="/login">
          <AuthPage />
        </Route>
      </Switch>
    );
  };
  return <>{renderAuth()}</>;
}

export default App;
