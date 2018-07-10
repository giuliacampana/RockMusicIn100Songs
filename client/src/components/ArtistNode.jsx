import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
  border-radius: 50%;
  position: absolute;
  background-color: ${props => {
      if (props.clicked) {
        return `#ED4B3A`;
      }
      else if (props.influenced) {
        return `#3C6276`;
      } else if (props.influencedBy) {
        return `#926b38`;
      } else {
        return `#707070`;
      }
    }
  }
  &:hover {
    cursor: pointer;
  }
`;

// ${props => props.clicked ? "#3C6276" : "#707070"};
//red: #ED4B3A
//gold: #926b38

const Artist = styled.div`
  z-index: 2;
  position absolute;
  color: white;
  font-size: 20px;
  height: 20px;
  width: 180px;
  &:hover {
    cursor: pointer;
  }
`;


class ArtistNode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (!this.state.clicked) {
      this.props.sendClickedNode(this.props.artist, this.props.artist.influenced, this.props.artist.influencedBy);
    } else {
      this.props.sendClickedNode('', [], []);
    }
    this.setState({
      clicked: !this.state.clicked,
    });
  }

  render() {
    return (
      <div>
        <Circle style={{"width": this.props.artist.width, "height": this.props.artist.height, "top": this.props.artist.top, "left": this.props.artist.left}} onClick={this.handleClick} clicked={this.state.clicked} influenced={this.props.influenced} influencedBy={this.props.influencedBy}></Circle>
        <Artist style={{"top": this.props.artist.nameTop, "left": this.props.artist.nameLeft, "fontSize": this.props.artist.nameFontSize}} onClick={this.handleClick}>{this.props.artist.name}</Artist>
      </div>
    );
  }
}

export default ArtistNode;