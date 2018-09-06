import React from 'react';
import styled from 'styled-components';

const SideBoxWrapper = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  border-color: #606060;
  color: white;
  position: fixed;
  z-index: 4;
  right: 0;
  top: 25%;
  height: 250px;
  width: 250px;
  background-color: white;
  display: flex;
  flex-direction: column;
  background-color: #404040;
`;

const Album = styled.img`
  border: 1px solid black;
  background-image: url(${props => props.photo ? props.photo : null});
  background-size: contain;
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
    <SideBoxWrapper>
      <Album photo={props.photo}></Album>
      <BandName>{props.artistName}</BandName>
      <YearsActive>{props.years}</YearsActive>
      <BandMembers>{props.members}</BandMembers>
    </SideBoxWrapper>
);

export default ArtistSideBox;