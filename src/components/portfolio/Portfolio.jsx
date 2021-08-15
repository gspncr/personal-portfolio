import { useEffect, useState } from "react";
import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList";
import { nrPortfolio, k6Portfolio, dynatracePortfolio, codingPortfolio, uniPortfolio } from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("nr");
    const [data, setData] = useState([]);
    const list = [
        {
            id: 'nr', title: 'new relic'
        },
        {
            id: 'k6', title: 'k6/grafana labs integration'
        },
        {
            id: 'coding', title: 'coding'
        },
        {
            id: 'uni', title: 'uni'
        }
    ];

    useEffect(()=>{
        switch(selected){
            case "k6":
                setData(k6Portfolio);
                break;
            case "nr":
                setData(nrPortfolio);
                break;
            case "coding":
                setData(codingPortfolio);
                break;
            case "uni":
                setData(uniPortfolio);
                break;
                default:
                    setData(nrPortfolio);
        }
    });

    return (
        <div className="portfolio" id="portfolio">
            <h1>things i have done</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected}
                    id={item.id}/>
                ))}
            </ul>
            <div className="container">
                    {data.map((d)=>(
                        <a href={d.link} target="_blank"><div className="item">
                            <img src={d.img}/>
                            <h3>{d.title}</h3> 
                            
                        </div>
                        </a>
                    ))}
                
            </div>
        </div>
    )
}