import React , { Component } from "react";
import "./App.css";

class Profile extends Component {
    render(){
        let artist = {artist : '', total:''};
        let image = '';
        let link = ''
       this.props.artist !== null?artist = this.props.artist:artist="";
       this.props.image !==null? image = this.props.image:image = "";
       this.props.link !==null? link = this.props.link:link = "";

       if (this.props.artist !== null) {
        return(
            <div className="Profile">
                <img src={image} alt="profile" className="Profile-image"/>
                <div className="Profile-info">
                    <div className="Profile-name">{artist.artist}</div>
                    <div className="Profile-total">{artist.total} songs</div>
                    <div className="Profile-link"><a href={link}>{link}</a></div>
                </div>
            </div>
        )}else{
            return(
                <div></div>
            )
        }
    }
}

export default Profile;