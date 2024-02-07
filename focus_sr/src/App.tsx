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
import CommentList from "./page/Sr/Detail/CommentList";
import PromotionPage from "./page/Promotion/PromotionPage";
import PromotionRegister from "./page/Promotion/Create/PromotionRegister";
import PromotionRegister2 from "./page/Promotion/Create/PromotionRegister2";
import PromotionDetail from "./page/Promotion/Detail/PromotionDetail";
import BouncePosition from "./page/Promotion/Detail/BouncePosition";
import PurchaseProduct from "./page/Promotion/Detail/PurchaseProduct";
import SrTechPage2 from "./page/Sr/SrTechPage2";

function App() {
  return (
    <>
      <ManageDetail />
    </>
  );
}

export default App;
