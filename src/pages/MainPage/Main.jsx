import React, { useState } from "react";
import styled from "styled-components";
import "./Main.css";
import playIcon from "../../images/playIcon.png";

// 컨테이너 스타일
const Container = styled.main`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #191919;
`;

// 헤더 스타일
const ToggleHeader = styled.header`
  position: fixed;
  top: 25px;
  width: 100%;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  z-index: 10; /* 드로어보다 위에 오도록 설정 */
`;


// 슬라이드 섹션 스타일
const MadeSection = styled.section`
  padding: 20px;
  margin-top: 20px;
  margin-left:260px
`;

// 슬라이드 리스트 스타일
const MadeList = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 20px;
  padding-bottom: 10px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #696969;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #1e1e1e;
  }
`;

// 앨범(정사각형) 스타일
const MadePlaylist = styled.div`
  min-width: 200px;
  height: 200px;
  background-color: #333;
  border-radius: 15px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;

`;
// 슬라이드 섹션 스타일
const RecentlySection = styled.section`
  padding: 20px;
  margin-top: 20px;
  margin-left:260px
`;

// 슬라이드 리스트 스타일
const RecentlyList = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 20px;
  padding-bottom: 10px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #696969;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #1e1e1e;
  }
`;

// 앨범(정사각형) 스타일
const RecentlyPlaylist = styled.div`
  min-width: 180px;
  height: 180px;
  background-color: #333;
  border-radius: 15px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;

`;
// 메인 콘텐츠 스타일
const MainContent = styled.div`
  color: white;
`;


// 왼쪽 드로어 스타일
const LeftDrawer = styled.div`
  position: fixed;
  top: 0;
  width: 200px;
  height: 100%;
  background-color: #191919;
  color: white;
  transition: 0.3s ease;
  padding: 20px;
  left: ${(props) => (props.open ? "0" : "-366px")}; 
`;
//숨겨지는 효과 left: ${(props) => (props.open ? "0" : "-366px")}; 

// 오른쪽 드로어 스타일
const RightDrawer = styled.div`
  position: fixed;
  right: ${(props) => (props.open ? "0" : "-250px" )}; /* 열리고 닫힘 */
  top: 0;
  width: 250px;
  height: 100%;
  background-color: #1E1E1E;
  color: white;
  transition: 0.3s ease;
  padding: 20px;
`;

const ProfileList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;

  li {
    margin-top:70px;
    margin-bottom: -40px;
    display: flex;
    align-items: center;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;
  }

  p {
    margin: 0;
    font-size: 14px;
  }

  span{
    font-size:16px;
    font-weight:bold;
  }
`;

// 왼쪽 드로어 토글 버튼 스타일
const LeftDrawerToggleButton = styled.button`
  color: white;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: #191919;

  svg {
    width: 20px;
    height: 20px;
    fill: #696969; 
  }
`;

// 오른쪽 드로어 토글 버튼 스타일
const RightDrawerToggleButton = styled.button`
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #1E1E1E;

  svg {
    width: 20px;
    height: 20px;
    fill: #696969; 
  }
`;

const Main = () => {
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false);
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false);

  return (
    <Container>
      {/* 헤더 */}
      <ToggleHeader>
        {/* 왼쪽 드로어 토글 버튼 */}
        <LeftDrawerToggleButton onClick={() => setIsLeftDrawerOpen(!isLeftDrawerOpen)}>
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </LeftDrawerToggleButton>


        {/* 오른쪽 드로어 토글 버튼 */}
        <RightDrawerToggleButton onClick={() => setIsRightDrawerOpen(!isRightDrawerOpen)}>
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </RightDrawerToggleButton>
      </ToggleHeader>

      {/* 왼쪽 드로어 */}
      <LeftDrawer open={isLeftDrawerOpen}>
        <div className="drawer-menu">
          <div className="left-drawer-home">HOME</div>
          <div className="left-drawer-made">맞춤추천</div>
          <div className="left-drawer-recently">최근음악</div>
          <div className="left-drawer-popular">인기차트</div>
          <div className="left-drawer-library">라이브러리</div>
          <div className="left-drawer-playlist">재생목록</div>
          <div className="left-drawer-liked">좋아요 누른 음악</div>
          <div className="left-drawer-artist">내 아티스트</div>


        </div>
      </LeftDrawer>

     {/* 오른쪽 드로어 */}
     <RightDrawer open={isRightDrawerOpen}>
        <ProfileList>
          <li>
            <img src="https://via.placeholder.com/50" alt="Profile" />
            <p><span>yewon</span><br />
            {/* <img src={playIcon} className="play-icon" />*/}
            Kanye West - Runaway</p> 
          </li>
          <li>
            <img src="https://via.placeholder.com/50" alt="Profile" />
            <p><span>nayoon</span><br />Kanye West - Runaway</p>
          </li>
          <li>
            <img src="https://via.placeholder.com/50" alt="Profile" />
            <p><span>jaehyun</span><br />Kanye West - Runaway</p>
          </li>
        </ProfileList>
      </RightDrawer>

      {/* 메인 콘텐츠 */}
      <MainContent>
        <div className="title-home">Home</div>
        <div className="made-title">맞춤추천</div>
        <MadeSection className="made">
          <MadeList className="made-list">
            <MadePlaylist>Playlist 1</MadePlaylist>
            <MadePlaylist>Playlist 2</MadePlaylist>
            <MadePlaylist>Playlist 3</MadePlaylist>
            <MadePlaylist>Playlist 4</MadePlaylist>
          </MadeList>
        </MadeSection>

        <div className="recently-title">최근음악</div>
        <RecentlySection className="made">
          <RecentlyList className="Recently-list">
            <RecentlyPlaylist>Playlist 1</RecentlyPlaylist>
            <RecentlyPlaylist>Playlist 2</RecentlyPlaylist>
            <RecentlyPlaylist>Playlist 3</RecentlyPlaylist>
            <RecentlyPlaylist>Playlist 4</RecentlyPlaylist>
          </RecentlyList>
        </RecentlySection>
      </MainContent>
    </Container>
  );
};

export default Main;
