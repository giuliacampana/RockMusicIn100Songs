import React from 'react';
import styled from 'styled-components';
import Timeline from './Timeline.jsx';
import Diagram from './Diagram.jsx';

const AppWrapper = styled.div`
  margin: 0;
  background-color: #282828;
  font-family: 'Inconsolata', monospace;;
`;

const Header = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 38px;
  color: #FFF;
  font-family: 'Poppins', sans-serif;
`;

const Subheader = styled.div`
  font-size: 22px;
  font-family: 'Architects Daughter', cursive;
`;

const DiagramWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <AppWrapper>
        <Header>
          <div>History of Rock Music in 100 Songs</div>
          <Subheader>across 70 years</Subheader>
        </Header>
        <DiagramWrapper>
          <Timeline />
          <Diagram />
        </DiagramWrapper>
      </AppWrapper>
    );
  }
}

export default App;