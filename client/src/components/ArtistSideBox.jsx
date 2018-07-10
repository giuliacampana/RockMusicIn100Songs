import React from 'react';
import styled from 'styled-components';

const SideBoxWrapper = styled.div`
  border: 1px solid white;
  border-color: #606060;
  color: white;
  position: fixed;
  right: 0;
  top: 25%;
  height: 250px;
  width: 250px;
  background-color: white;
  display: flex;
  flex-direction: column;
  background-color: #404040;
`;

const Album = styled.div`
  border: 1px solid black;
  height: 100px;
  width: 100px;
  margin-top: 15px;
  margin-left: 15px;
`;

const BandName = styled.div`
  margin-left: 15px;
  font-size: 30px;
  padding-top: 10px;
  padding-bottom: 4px;
`;

const YearsActive = styled.div`
  font-size: 16px;
  margin-left: 15px;
  padding-bottom: 4px;
`;

const BandMembers = styled.div`
  font-size: 16px;
  margin-left: 15px;
  padding-bottom: 4px;
`;


const ArtistSideBox = (props) => (
  props.clicked ? 
    <SideBoxWrapper>
      <Album></Album>
      <BandName>Beatles</BandName>
      <YearsActive>1960-1970</YearsActive>
      <BandMembers>George Harrison, John Lennon, Paul McCartney, Ringo Starr</BandMembers>
    </SideBoxWrapper>
    : null
);

export default ArtistSideBox;