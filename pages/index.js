import config from "../config.json";

export default function Page() {
    const background = {backgroundColor: "red"};
    return (
        <div style={background}>Welcome to Lotus!;
            <Menu />
            <Header />
            <Timeline />
        </div> 
    );
  }

 export function Menu(){
    return(
        <div>
            Menu
        </div>
    );
}

export function Header(){
    return(
        <div>
            <img src="banner" />
            <img src={config["user-profile"]} />
            {config.name}
        </div>
    );
}

export function Timeline(){
    return(
        <div>Timeline</div>
    );
}