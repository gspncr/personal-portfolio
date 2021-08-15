import "./contact.scss"
import { useState, useRef, useEffect } from "react";
import {init} from "ityped"

export default function Contact() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor: true,
            startDelay: 500,
            backDelay: 800,
            strings: ["dancing tips", "style advice", "holding a drink while dancing","cocktail recipes"]
        });
    },[])

    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
            <div className="imgContainer"><img src="assets/wedding-me-jem-straps.png" alt="gary spencer"></img></div>
                
            </div>
            <div className="right">
            <h2>get in touch</h2>
            <h5>you can speak to me about <span id="ityped" ref={textRef}></span></h5>
            <br />
            <h3>you can reach me through...</h3>
            <h4><a href="https://www.linkedin.com/in/gspncr/">LinkedIn</a></h4>
            <h4><a href="https://twitter.com/gspncr">Twitter</a></h4>
            <h4><a href="mailto:gspenceruk@gmail.com">Email</a></h4>
            </div>
        </div>
    )
}