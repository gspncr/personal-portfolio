import "./intro.scss"
import {init} from "ityped"
import {useEffect, useRef} from "react"

export default function Intro() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor: true,
            startDelay: 500,
            backDelay: 800,
            strings: ["solutions architect at New Relic", "experimenter","runner","cocktail maker", "computer whisperer"]
        });
    },[])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/wedding-me-so-srs-circle.png" alt="gary spencer"></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>hi there, i'm</h2>
                    <h1>gary spencer.</h1>
                    <h3>a <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    ⬇️
                </a>
            </div>
        </div>
    )
}