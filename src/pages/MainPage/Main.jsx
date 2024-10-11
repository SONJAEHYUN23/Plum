import React, { useState } from "react";
import styled from "styled-components";
import "./Main.css";

// 컨테이너 스타일
const Container = styled.main`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #191919;
`;

// 왼쪽 드로어 스타일
const LeftDrawer = styled.div`
  position: fixed;
  left: ${(props) => (props.open ? "0" : "-366px")}; 
  top: 0;
  width: 30px;
  height: 100%;
  background-color: #191919;
  color: white;
  transition: 0.3s ease;
  padding: 20px;
`;

// 오른쪽 드로어 스타일
const RightDrawer = styled.div`
  position: fixed;
  right: ${(props) => (props.open ? "0" : "-166px")}; /* 열리고 닫힘 */
  top: 0;
  width: 166px;
  height: 100%;
  background-color: #1E1E1E;
  color: white;
  transition: 0.3s ease;
  padding: 20px;
`;

// 메인 콘텐츠 스타일
const MainContent = styled.div`
  flex: 1;
  color: white;
`;

// 버튼 스타일
const DrawerToggleButton = styled.button`
  background-color: #555;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  margin: 5px;
  border-radius: 5px;

  &:hover {
    background-color: #777;
  }
`;

const Main = () => {
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false);
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false);

  return (
    <Container>
      {/* 왼쪽 드로어 */}
      <LeftDrawer open={isLeftDrawerOpen}>
        <div className="drawer-menu">
        <div className="left-drawer-home">HOME</div>
        <div className="left-drawer-made">맞춤추천</div>
        <div className="left-drawer-recently">최근음악</div>
        <div className="left-drawer-popluar">인기차트</div>
        </div>
      </LeftDrawer>

      {/* 오른쪽 드로어 */}
      <RightDrawer open={isRightDrawerOpen}>
        <h2>Right Drawer</h2>
        <p>This is the right drawer content.</p>
      </RightDrawer>

      {/* 메인 콘텐츠 */}
      <MainContent>
        <h1>Main Content Area</h1>

        {/* 드로어 토글 버튼 */}
        <DrawerToggleButton onClick={() => setIsLeftDrawerOpen(!isLeftDrawerOpen)}>
          Toggle Left Drawer
        </DrawerToggleButton>
        <DrawerToggleButton onClick={() => setIsRightDrawerOpen(!isRightDrawerOpen)}>
          Toggle Right Drawer
        </DrawerToggleButton>
      </MainContent>
    </Container>
  );
};

export default Main;
