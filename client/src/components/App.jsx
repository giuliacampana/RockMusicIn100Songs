import React from 'react';
import styled from 'styled-components';
import Timeline from './Timeline.jsx';
import ArtistSideBox from './ArtistSideBox.jsx';
import BottomBar from './BottomBar.jsx';

const AppWrapper = styled.div`
  margin: 0;
`;

const Header = styled.div`
  text-align: center;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <AppWrapper>
        <Header>
          <h1>History of Rock Music in 100 Songs</h1>
          <h2>across 70 years</h2>
        </Header>
        <Timeline />
        <ArtistSideBox />
        <BottomBar />
      </AppWrapper>
    );
  }
}

export default App;