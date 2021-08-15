import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu "+(menuOpen && "active")}>
        
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">who am i</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">things i did</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">speak to me</a>
                </li>
            </ul>
        </div>
    )
}