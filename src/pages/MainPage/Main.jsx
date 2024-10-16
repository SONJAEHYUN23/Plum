import React, { useRef } from "react";
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

// 슬라이드 섹션 스타일
const Section = styled.section`
  padding: 20px;
  margin-top: 20px;
  margin-left: 250px;
  position: relative;
  width:975px
`;

// 슬라이드 리스트 스타일
const List = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 20px;
  padding-bottom: 20px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #1e1e1e;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #191919;
  }
`;

// 앨범(정사각형) 스타일
const Playlist = styled.div`
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

// 화살표 버튼 스타일
const ArrowButton = styled.button`
  position: absolute;
  border-radius: 50%; /* 버튼을 원 모양으로 변경 */
  top: -60px; /* 화살표를 리스트 위로 이동 */
  background-color: rgba(68, 68, 68, 0.25);/* 불투명도 25% */  
  border: none;
  color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  font-size: 30px;
  width: 35px;  /* 버튼의 너비 */
  height: 35px; /* 버튼의 높이 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
    background-color: #525252;
    color: #ffffff;

  }
`;

// 오른쪽 버튼 위치
const RightArrow = styled(ArrowButton)`
  right: 22px; /* 오른쪽 끝에 위치 */
`;

// 왼쪽 버튼 위치 (오른쪽 버튼 옆에 배치)
const LeftArrow = styled(ArrowButton)`
  right: 80px; /* 오른쪽 버튼 옆으로 이동 */
`;

// 메인 콘텐츠 스타일
const MainContent = styled.div`
  color: white;
  margin-top: -100px;
`;

const Main = () => {
  // useRef로 리스트 요소 참조
  const madeListRef = useRef(null);
  const recentlyListRef = useRef(null);

  // 리스트를 좌우로 스크롤하는 함수
  const scroll = (direction, listRef) => {
    if (listRef.current) {
      const scrollAmount = 200;
      listRef.current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <Container>
      {/* 메인 콘텐츠 */}
      <MainContent>
        <div className="title-home">Home</div>
        <div className="made-title">맞춤추천</div>
        <Section>
          <LeftArrow onClick={() => scroll("left", madeListRef)}>&#8249;</LeftArrow>
          <List ref={madeListRef}>
            <Playlist>Playlist 1</Playlist>
            <Playlist>Playlist 2</Playlist>
            <Playlist>Playlist 3</Playlist>
            <Playlist>Playlist 4</Playlist>
            <Playlist>Playlist 5</Playlist>
            <Playlist>Playlist 6</Playlist>
            <Playlist>Playlist 7</Playlist>
            <Playlist>Playlist 8</Playlist>

          </List>
          <RightArrow onClick={() => scroll("right", madeListRef)}>&#8250;</RightArrow>
        </Section>

        <div className="recently-title">최근음악</div>
        <Section>
          <LeftArrow onClick={() => scroll("left", recentlyListRef)}>&#8249;</LeftArrow>
          <List ref={recentlyListRef}>
            <Playlist>Playlist 1</Playlist>
            <Playlist>Playlist 2</Playlist>
            <Playlist>Playlist 3</Playlist>
            <Playlist>Playlist 4</Playlist>
            <Playlist>Playlist 5</Playlist>
            <Playlist>Playlist 6</Playlist>
            <Playlist>Playlist 7</Playlist>
            <Playlist>Playlist 8</Playlist>
          </List>
          <RightArrow onClick={() => scroll("right", recentlyListRef)}>&#8250;</RightArrow>
        </Section>

        <div className="popular-title">인기차트</div>
        <Section>
          <div className="popular-bar">
            <div className="popular-#">#</div>
            <div className="popular-subtitle">제목</div>
            <div className="popular-album">앨범</div>
            <div className="popular-time">시간</div>
          </div>
        </Section>
      </MainContent>
    </Container>
  );
};

export default Main;
