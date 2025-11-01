import Sidebar from "../Sidebar/sidebar";
import Navbar from "../NavBar/navbar";
import Footer from "../Footer/footer";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";


const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
`;


const Main = styled.main`
  flex: 1;                     
  padding-top: 69px;            
  @media (min-width: 768px) {
    padding-left: 240px;       
  }
`;

const PageLayout = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => setOpen((o) => !o);
  const closeSidebar = () => setOpen(false);

  return (
    <LayoutWrapper>
      <Navbar onMenuClick={toggleSidebar} />
      <Sidebar open={open} onClose={closeSidebar} />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </LayoutWrapper>
  );
};

export default PageLayout;
