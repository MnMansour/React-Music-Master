import React, {Component} from 'react'
import './App.css'

class Gallery extends Component {
    render(){
        let {tracks}=[];
        console.log(this.props.tracks)
         this.props.tracks !== null? tracks = this.props.tracks: tracks = [];
        
        return(
            <div>
                {tracks.map((track,k)=>{
                    const noImage= 'https://sl.d.umn.edu/och/PhotoGallery/no-image-available.jpg';
                    let trackImg='';
                    track.image[3]['#text'] !== ''? trackImg = track.image[3]['#text']: trackImg = noImage;
                    return(
                        <div key={k} className="track">
                            <a href={track.url}><img src={trackImg} className="track-img" alt="track"/></a>
                            <p className="track-name">{track.name}</p>
                        </div>
                    )
                    
                })}
            </div>
        )
    }

}

export default Gallery;