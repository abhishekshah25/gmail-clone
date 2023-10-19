import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import SuspenseLoader from "../components/common/SuspenseLoader";
import { Box,styled } from "@mui/material";

const Wrapper = styled(Box)`
    display: flex;
`;

const MainPage = () => {

  const [openDrawer, setOpenDrawer] = useState(true);

  const toggleDrawer = () => {
    setOpenDrawer(prevState => !prevState);
  }

  return (
    <>
      <Header toggleDrawer={toggleDrawer}/>
      <Wrapper>
      <SideBar toggleDrawer={toggleDrawer} openDrawer={openDrawer}/>
      <Suspense fallback={<SuspenseLoader />}>
        <Outlet context={{openDrawer}}/>
      </Suspense>
      </Wrapper>
    </>
  )
}

export default MainPage;
