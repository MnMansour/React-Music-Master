import React, {Component} from "react";
import "./App.css";
import { FormGroup, FormControl , InputGroup , Glyphicon } from "react-bootstrap";
import Profile from "./profile";
import Gallery from "./gallery";



class App extends Component{
    
    state = {
        query: "",
        image:null,
        link: null,
        artist: null,
        tracks:null,
        error:"",
    }

    search() {
        const api_key= 'edb0cad7552bbb0d57b1bc420c6cbbaa';
        const BASE_URL = 'http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&';
        const FETCH_URL = `${BASE_URL}artist=${this.state.query}&limit=20&api_key=${api_key}&autocorrect[0|1]&format=json`;
        fetch(FETCH_URL).then(response => {
            if(response.ok){
                return response.json()
            }throw new Error('Request failed!');
        },networkError=> console.log(networkError.message)
    ).then(json =>{
        const image = json.toptracks['track'][0]["image"][2]['#text'];
        const link = json.toptracks['track'][0]["artist"].url
        const artist = json.toptracks['@attr'];
        const tracks= json.toptracks['track']
        const error = ""
        this.setState({image, link, artist, tracks, error});
    }
        
    ).catch(err => {
        const error =  "The Name is incorrect, or it's not available in Last.fm" 
        this.setState({
            query: "",
            image:null,
            link: null,
            artist: null,
            tracks:null,
            error});
    })
    }
    render(){ 
        return(
            <div className="App">
                <img height="150"  src="https://yt3.ggpht.com/-bc985rvFTuc/AAAAAAAAAAI/AAAAAAAAAAA/-fo6K2OZVPg/s900-c-k-no-mo-rj-c0xffffff/photo.jpg" alt=""/>
                <div className="App-title">MUSIC MASTER</div>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                        type="text"
                        placeholder="Search for an Artist"
                        value={this.state.query}
                        onChange={ event=> {this.setState({query:event.target.value})}}
                        onKeyPress={event => {
                            if(event.key === "Enter"){
                                this.search()
                                }
                            }
                        }
                        />
                        <InputGroup.Addon onClick={() =>this.search()}>
                            <Glyphicon glyph="search"></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <Profile artist={this.state.artist} image={this.state.image} link={this.state.link}/>
                <Gallery tracks={this.state.tracks}/>
                <div>{this.state.error}</div>
            </div>
        )
    }
}

export default App;