import "./meme.css"
import memsdata from "../../memsdata"
import { useState } from "react"

const Meme = () => {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages] = useState(memsdata)
  console.log(allMemeImages)

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * allMemeImages.data.memes.length)
    const randomMemeUrl = allMemeImages.data.memes[randomIndex].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: randomMemeUrl
    }))
  }


  return (
    <main>
      <div className="inputs">
        <input className="txt_input" type="text" placeholder="Top text" />
        <input className="txt_input" type="text" placeholder="bottom text" />
      </div>
      <button className="get_meme_btn" onClick={getRandomImage}>Get new meme image!</button>
      <div className="image">
        <img src={meme.randomImage} className="meme_img" alt="CLICK BUTTON TO GET A NEW IMAGE" />
      </div>

    </main>
  )
}

export default Meme