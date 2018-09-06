import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ArtistNode from './ArtistNode.jsx';
import ArtistSideBox from './ArtistSideBox.jsx';
import BottomBar from './BottomBar.jsx';

const DiagramWrapper = styled.div`
  position: relative;
`;

class Diagram extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nodeClicked: null,
      nodeClickedInfluenced: [],
      nodeClickedInfluencedBy: [],
      artists: [],
    }

    this.onNodeClick = this.onNodeClick.bind(this);
  }

  onNodeClick(artist, artistsInfluenced, artistsInfluencedBy) {
    this.setState({
      nodeClicked: artist,
      nodeClickedInfluenced: artistsInfluenced,
      nodeClickedInfluencedBy: artistsInfluencedBy,
    });
  }

  componentDidMount() {
    this.getArtists();
  }

  getArtists() {
    axios.get("/api/artists")
      .then((response) => {
        this.setState({
          artists: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    
    
    return (
      <DiagramWrapper>
        {
          this.state.artists.map(artist => {
            if (this.state.nodeClickedInfluenced.length && this.state.nodeClickedInfluenced.includes(artist.name)) {
              return <ArtistNode artist={artist} sendClickedNode={this.onNodeClick} influenced={true} />
            }
            if (this.state.nodeClickedInfluencedBy.length && this.state.nodeClickedInfluencedBy.includes(artist.name)) {
              return <ArtistNode artist={artist} sendClickedNode={this.onNodeClick} influencedBy={true} />
            }
            return <ArtistNode artist={artist} sendClickedNode={this.onNodeClick} />
          })
        }
        { this.state.nodeClicked ? 
          <div>
            <ArtistSideBox artistName={this.state.nodeClicked.name} years={this.state.nodeClicked.years} members={this.state.nodeClicked.members} photo={this.state.nodeClicked.photo} />
            <BottomBar artist={this.state.nodeClicked.name} songs={this.state.nodeClicked.songs} />
          </div>
          : null
        }
      </DiagramWrapper>
    );  
  }
}
export default Diagram;

