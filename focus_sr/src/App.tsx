import React from "react";
import "./App.css";
import { SrTechDetailPage } from "./page/Sr/Detail/SrTechDetailPage";
import { SrTechPage } from "./page/Sr/SrTechPage";
import { SrTechCreatePage } from "./page/Sr/Create/SrTechCreatePage";
import Manage from "./page/GroupManage/Manage";
import ManageDetail from "./page/GroupManage/ManageDetail";
import Agreement from "./page/Onboarding/Onboarding1";
import Category from "./page/Onboarding/Onboarding02";
import Type from "./page/Onboarding/Onboarding03";
import Confirmed from "./page/Onboarding/Onboarding04";
import Title from "./page/Home/Title";

function App() {
  return (
    <>
      <Manage />
    </>
  );
}

export default App;
