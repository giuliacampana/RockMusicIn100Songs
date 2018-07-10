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
  background-color: #404040;
  flex-basis: 60%;
  height: 50px;
  border-top: 1px solid #606060;
  border-left: 1px solid #606060;
  border-right: 1px solid #606060;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
`;

const SpaceBetween = styled.div`
  flex-basis: 5%;
  height: 50%;
`;

const SongPlayerWrapper = styled.div`
  background-color: #404040;
  flex-basis: 20%;
  height: 50px;
  border-top: 1px solid #606060;
  border-left: 1px solid #606060;
  border-right: 1px solid #606060;
  display: flex;
  align-items: center;
  color: white;
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
    color: 282828;
  }
`;

const PlayButton = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid black;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const SongDescription = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

class BottomBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
    }
  }

  render() {
    return (
      this.props.clicked ?
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
        <SongPlayerWrapper>
          <PlayButton>
            {/* <img src={'./play-button.jpg'} className="play"/> */}
          </PlayButton>
          <SongDescription>
            <div>She Said She Said</div>
            <div>The Beatles</div>
          </SongDescription>
        </SongPlayerWrapper>
      </BarWrapper>
      : null
    );
  }
}

export default BottomBar;