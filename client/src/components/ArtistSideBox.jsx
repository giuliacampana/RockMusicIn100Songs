import React from 'react';
import styled from 'styled-components';

const SideBoxWrapper = styled.div`
  border: 1px solid black;
  position: fixed;
  right: 0;
  top: 25%;
  height: 350px;
  width: 350px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const Album = styled.div`
  border: 1px solid black;
  height: 120px;
  width: 120px;
  margin-top: 15px;
  margin-left: 15px;
`;

const BandName = styled.h2`
  margin-left: 15px;
`;

const YearsActive = styled.p`
  font-size: 14px;
  margin-left: 15px;
`;

const BandMembers = styled.p`
  font-size: 16px;
  margin-left: 15px;
`;


const ArtistSideBox = () => (
  <SideBoxWrapper>
    <Album></Album>
    <BandName>Beatles</BandName>
    <YearsActive>1960-1970</YearsActive>
    <BandMembers>George Harrison, John Lennon, Paul McCartney, Ringo Starr</BandMembers>
  </SideBoxWrapper>
);

export default ArtistSideBox;