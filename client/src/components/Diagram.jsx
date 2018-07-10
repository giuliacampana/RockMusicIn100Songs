import React from 'react';
// import Graph from 'react-graph-vis';
// import { InteractiveForceGraph, ForceGraph, ForceGraphNode, ForceGraphLink, ForceGraphArrowLink } from 'react-vis-force';
// import { ForceGraph2D } from 'react-force-graph';
import styled from 'styled-components';
import ArtistSideBox from './ArtistSideBox.jsx';
import BottomBar from './BottomBar.jsx';

const DiagramWrapper = styled.div`
  position: relative;
`;

const Circle = styled.div`
  border-radius: 50%;
  position: absolute;
  background-color: ${props => props.clicked ? "#3C6276" : "#707070"};
  &:hover {
    cursor: pointer;
  }
`;

const Artist = styled.div`
  z-index: 3;
  position absolute;
  color: white;
  font-size: 20px;
  height: 20px;
  width: 180px;
  &:hover {
    cursor: pointer;
  }
`;




class Diagram extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    }

    this.handleNodeClick = this.handleNodeClick.bind(this);
  }

  handleNodeClick() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }

  render() {
    return (
      <DiagramWrapper>
        <Circle style={{"width": "20px", "height": "20px", "top": "200px", "left": "50px"}} onClick={this.handleNodeClick} clicked={this.state.clicked}></Circle>
        <Artist style={{"top": "210px", "left": "60px", "fontSize": "14px"}} onClick={this.handleNodeClick}>Sister Maria Thorpe</Artist>
        <Circle style={{"width": "20px", "height": "20px", "top": "550px", "left": "700px"}} onClick={this.handleNodeClick} clicked={this.state.clicked}></Circle>
        <Artist style={{"top": "560px", "left": "710px", "fontSize": "14px"}} onClick={this.handleNodeClick}>Jackie Brenston and his Delta Cats</Artist>
        {/* <svg height="50" width="50" style={{top: "210px", left: "60px", position: "absolute"}}><line x1="0" y1="0" x2="50" y2="50" style={{stroke:"#999", strokeWidth: 1}} /></svg> */}
        <Circle style={{"width": "90px", "height": "90px", "top": "750px", "left": "100px"}} onClick={this.handleNodeClick} clicked={this.state.clicked}></Circle>
        <Artist style={{"top": "770px", "left": "120px"}} onClick={this.handleNodeClick}>Little Richard</Artist>
        <Circle style={{"width": "110px", "height": "110px", "top": "750px", "left": "500px"}} onClick={this.handleNodeClick} clicked={this.state.clicked}></Circle>
        <Artist style={{"top": "770px", "left": "490px"}} onClick={this.handleNodeClick}>Elvis Presley</Artist>
        <Circle style={{"width": "80px", "height": "80px", "top": "750px", "left": "850px"}} onClick={this.handleNodeClick} clicked={this.state.clicked}></Circle>
        <Artist style={{"top": "770px", "left": "870px"}} onClick={this.handleNodeClick}>Carl Perkins</Artist>
        <Circle style={{"width": "80px", "height": "80px", "top": "850px", "left": "280px"}} onClick={this.handleNodeClick} clicked={this.state.clicked}></Circle>
        <Artist style={{"top": "870px", "left": "300px"}} onClick={this.handleNodeClick}>Jerry Lee Lewis</Artist>
        <Circle style={{"width": "40px", "height": "40px", "top": "850px", "left": "740px"}} onClick={this.handleNodeClick} clicked={this.state.clicked}></Circle>
        <Artist style={{"top": "870px", "left": "760px"}} onClick={this.handleNodeClick}>The Crickets</Artist>
        <Circle style={{"width": "60px", "height": "60px", "top": "900px", "left": "660px"}} onClick={this.handleNodeClick} clicked={this.state.clicked}></Circle>
        <Artist style={{"top": "920px", "left": "680px"}} onClick={this.handleNodeClick}>Buddy Holly</Artist>
        <Circle style={{"width": "130px", "height": "130px", "top": "1000px", "left": "70px"}} onClick={this.handleNodeClick} clicked={this.state.clicked}></Circle>
        <Artist style={{"top": "1020px", "left": "110px"}} onClick={this.handleNodeClick}>Chuck Berry</Artist>
        <Circle style={{"width": "150px", "height": "150px", "top": "1300px", "left": "500px"}} onClick={this.handleNodeClick} clicked={this.state.clicked}></Circle>
        <Artist style={{"top": "1330px", "left": "550px"}} onClick={this.handleNodeClick}>The Beatles</Artist>
        <ArtistSideBox clicked={this.state.clicked} />
        <BottomBar clicked={this.state.clicked}/>
      </DiagramWrapper>
    );  
  }
}
export default Diagram;

// <InteractiveForceGraph zoom simulationOptions={{ height: 500, width: 500, radiusMargin: 20 }}
      //   labelAttr="artist"
      //   onSelectNode={(node) => console.log(node)}
      //   highlightDependencies>
      //   <ForceGraphNode node={{ id: 'first-node', label: 'First node' }} fill="yellow" r={20} cx={20} cy={30} />
      //   <ForceGraphNode node={{ id: 'second-node', label: 'Second node' }} fill="blue" r={20} cx={50} cy={60} />
      //   {/* <ForceGraphNode node={{ id: 'third-node', label: 'Third node' }} fill="yellow" r={40} cx={100} cy={90}/>
      //   <ForceGraphNode node={{ id: 'fourth-node', label: 'Fourth node' }} fill="green" r={40} cx={10} cy={5}/> */}
      //   <ForceGraphLink link={{ source: 'first-node', target: 'second-node' }} {...{ x1: 1000, x2: 1500, y1: 1000, y2: 1500 }} />
      //   {/* <ForceGraphArrowLink link={{ source: 'third-node', target: 'fourth-node' }} {...{stroke: "#000"}}/> */}
      // </InteractiveForceGraph>


// <ForceGraph2D
      //   graphData={{"nodes": [ 
      //       {
      //         "id": "1",
      //         "name": "Sister Rosetta Tharpe",
      //         "val": 1,
      //       },
      //       {
      //         "id": "2",
      //         "name": "Jackie Brenston and his Delta Cats",
      //         "val": 1,
      //       },
      //       { 
      //         "id": "3",
      //         "name": "Little Richard",
      //         "val": 10 
      //       },
      //       { 
      //         "id": "11",
      //         "name": "Bob Dylan",
      //         "val": 15
      //       },
      //   ],
      //   "links": [
      //       {
      //           "source": "3",
      //           "target": "11"
      //       },
      //   ]
      //   }}
      //   linkDirectionalArrowLength={3.5}
      //   linkDirectionalArrowRelPos={0.5}
      //   linkCurvature={0.25}
      // />