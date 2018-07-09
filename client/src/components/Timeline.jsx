import React from 'react';
import styled from 'styled-components';

const SideTimeline = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  border: 1px solid black;
`;

const Year = styled.h2`
  padding: 0px 0px 500px 0px;
`;

const Timeline = () => (
  <SideTimeline>
    <Year>1940</Year>
    <Year>1950</Year>
    <Year>1960</Year>
    <Year>1970</Year>
    <Year>1980</Year>
    <Year>1990</Year>
    <Year>2000</Year>
    <Year>2010</Year>
  </SideTimeline>
);

export default Timeline;