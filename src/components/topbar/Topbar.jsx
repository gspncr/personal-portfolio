import "./topbar.scss"
import {GitHub, Twitter} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left"> 
                    <a href="#intro" className="logo">👋 I'm Gary</a>
                    <div className="itemContainer">
                        <GitHub />
                        <span>@gspncr</span>
                    </div>
                    <div className="itemContainer">
                        <Twitter />
                        <span>@gspncr</span>
                    </div>
                    
                </div>
                <div className="right">
                    <div className = "hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}