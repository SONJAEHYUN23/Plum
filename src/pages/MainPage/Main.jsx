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
  margin-top:-100px;
`;


const Main = () => {
 
  return (
    <Container>
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
            <MadePlaylist>Playlist 4</MadePlaylist>

          </MadeList>
        </MadeSection>

        <div className="recently-title">최근음악</div>
        <RecentlySection className="recent">
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
