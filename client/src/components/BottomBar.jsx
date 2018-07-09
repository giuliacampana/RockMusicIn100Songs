import React from 'react';
import styled from 'styled-components';

const BarWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 50px;
  left: 0;
  bottom: 0;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SongListWrapper = styled.div`
  background-color: white;
  flex-basis: 60%;
  height: 50px;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SpaceBetween = styled.div`
  flex-basis: 5%;
  height: 50%;
`;

const SongPlayerWrapper = styled.div`
  background-color: white;
  flex-basis: 20%;
  height: 50px;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
`;

const Header = styled.p`
  font-size: 20px;
  flex-basis: 10%;
`;

const SpaceBetween2 = styled.p`
  flex-basis: 2%
`;

const SongList = styled.p`
  font-size: 16px;
  flex-basis: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Song = styled.p`
  text-align: center;
  &:hover {
    cursor: pointer;
    color: gray;
  }
`;

class BottomBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BarWrapper>
        <SongListWrapper>
            <Header>SONGS:</Header>
            <SpaceBetween2></SpaceBetween2>
            <SongList>
                <Song>She Said She Said (1966)</Song>
                <Song>Tomorrow Never Knows (1966)</Song>
                <Song>A Day in the Life (1967)</Song>
                <Song>Let It Be (1970)</Song>
            </SongList>
        </SongListWrapper>
        <SpaceBetween></SpaceBetween>
        <SongPlayerWrapper></SongPlayerWrapper>
      </BarWrapper>
    );
  }
}

export default BottomBar;