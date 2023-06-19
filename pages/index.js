import config from "../config.json";
import styled from "styled-components";
import {CSSReset} from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

const StyledBody = styled.div`
    display: "flex";
    flex-direction: "column";
    flex: 1;
`;

const StyledMain = styled.main`
    display: "flex";
    flex-direction: "column";
    flex: 1;
`
export default function Page() {
    return (
        <>
        <CSSReset />
            <StyledBody>
                <Menu />
                <StyledMain>
                <Header />
                <Timeline playlists={config.playlists} />
                </StyledMain>
            </StyledBody>
        </>
    );
  }

/*  export function Menu(){
    return(
        <section className="menu">
            <img></img>
            <a href="">Vods</a>
            <input type="search"></input>
            <img className="menu-profile"></img>
        </section>
    );
} */

const StyledHeader = styled.div`
    margin-top: 50px;
    .banner{
        width: 100%;
        height: 200px;
    }
    div{
        display: flex;
        flex-direction: row;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
        }
        h2{
            font-size: 32px;
            font-weight: 400;
        }
    }
`
export function Header(){
    return(
        <StyledHeader>
            <img src={`${config.banner}`} className="banner" />
            <div>
                <img src={config["user-profile"]} />
                <h2>{config.name}</h2>
            </div>
        </StyledHeader>
    );
}

export function Timeline(props){
    const playlistNames = Object.keys(props.playlists)
    return(
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];
                console.log(playlistName);
                console.log(videos);
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    );
}