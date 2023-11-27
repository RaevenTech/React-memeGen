import "./meme.css"
import memsdata from "../../memsdata"
import { useState } from "react"

const Meme = () => {
  const [memeImage, setMemeImage] = useState("")

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * memsdata.data.memes.length)
    const randomMeme = memsdata.data.memes[randomIndex].url
    return setMemeImage(randomMeme)

  }


  return (
    <main>
      <div className="inputs">
        <input className="txt_input" type="text" placeholder="Top text" />
        <input className="txt_input" type="text" placeholder="bottom text" />
      </div>
      <button className="get_meme_btn" onClick={getRandomImage}>Get new meme image!</button>
      <div className="image">
        <img src={memeImage} alt="Meme" className="meme_img" />
      </div>

    </main>
  )
}

export default Meme