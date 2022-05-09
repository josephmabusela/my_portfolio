import { useEffect, useState } from "react"
import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import construction from './construction.jpg'
import {
  webPortfolio,
  designPortfolio,
  featuredPortfolio,
  mobilePortfolio,
  contentPortfolio
} from "../../data";

export default function Portfolio() {

  const [selected,setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "web",
      title: "Web App"
    },
    {
      id: "design",
      title: "Design"
    },
    {
      id: "featured",
      title: "Featured"
    },
    {
      id: "mobile",
      title: "Mobile App"
    },
    {
      id: "content",
      title: "Content"
    }
  ];

  useEffect(() => {

    switch(selected) {
      case "web":
        setData(webPortfolio);
        break;
        case "design":
        setData(designPortfolio);
        break;
        case "featured":
        setData(featuredPortfolio);
        break;
        case "mobile":
        setData(mobilePortfolio);
        break;
        case "content":
        setData(contentPortfolio);
        break;
        default:
          setData(webPortfolio)
    }

  }, [selected])

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList title={item.title} 
          active={selected ===item.id}
          setSelected={setSelected}
          id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img 
            src={construction} 
            alt="" 
          />
          <h3>Working on it</h3>
        </div>
        <div className="item">
          <img 
            src={construction} 
            alt="" 
          />
          <h3>Working on it</h3>
        </div>
        <div className="item">
          <img 
            src={construction} 
            alt="" 
          />
          <h3>Working on it</h3>
        </div>
        <div className="item">
          <img 
            src={construction} 
            alt="" 
          />
          <h3>Working on it</h3>
        </div>
        <div className="item">
          <img 
            src={construction} 
            alt="" 
          />
          <h3>Working on it</h3>
        </div>
        <div className="item">
          <img 
            src={construction} 
            alt="" 
          />
          <h3>Working on it</h3>
        </div>
      </div>
    </div>
  )
}
