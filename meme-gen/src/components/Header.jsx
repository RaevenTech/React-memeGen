import "./header.css"
import troll from "../assets/troll.png"

const Header = () => {
  return (
    <div className="container">
      <img className="troll" src={troll} alt="Meme icon" />
      <h1 className="title">Create a Meme</h1>
    </div>
  )
}

export default Header