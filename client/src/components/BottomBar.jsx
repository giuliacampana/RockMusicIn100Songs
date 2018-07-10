import React from 'react';
import ReactDOM from 'react-dom';
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
  z-index: 4;
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
  z-index: 4;
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
  border: 1px solid #282828;
  border-radius: 8%;
  background-color: #282828;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
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
      selectedSong: '',
    }

    // this.clickSong = this.clickSong.bind(this);
  }

  clickSong(songTitle) {
    this.setState({
      selectedSong: songTitle,
    });
  }

  render() {
    return (
      <BarWrapper>
        <SongListWrapper>
            <Header>SONGS:</Header>
            <SpaceBetween2></SpaceBetween2>
            <SongList>
                {
                  this.props.songs.map((song) => (
                    <Song onClick={this.clickSong.bind(this, song.title)}>{song.title + ` (${song.year})`}</Song>
                  ))
                }
            </SongList>
        </SongListWrapper>
        <SpaceBetween></SpaceBetween>
        <SongPlayerWrapper>
          <PlayButton>
            <ion-icon name="play" size="large"></ion-icon>
          </PlayButton>
          <SongDescription>
            <div>{this.state.selectedSong}</div>
            <div style={{"fontSize": "14px"}}>{this.props.artist}</div>
          </SongDescription>
        </SongPlayerWrapper>
      </BarWrapper>
    );
  }
}

export default BottomBar;

{/* <Song>She Said She Said (1966)</Song>
                <Song>Tomorrow Never Knows (1966)</Song>
                <Song>A Day in the Life (1967)</Song>
                <Song>Let It Be (1970)</Song> */}