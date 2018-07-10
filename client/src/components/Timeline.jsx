import React from 'react';
import styled from 'styled-components';

const SideTimeline = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
`;

const Year = styled.div`
  height: 500px;
  font-size: 26px;
  color: white;
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