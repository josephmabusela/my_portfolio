import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import smartphone from './smartphone.jpg'

export default function Portfolio() {

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
  ]

  return (
    <div className='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList title={item.title}/>
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img 
            src={smartphone} 
            alt="" 
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img 
            src={smartphone} 
            alt="" 
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img 
            src={smartphone} 
            alt="" 
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img 
            src={smartphone} 
            alt="" 
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img 
            src={smartphone} 
            alt="" 
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img 
            src={smartphone} 
            alt="" 
          />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  )
}
