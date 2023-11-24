import "./meme.css"
import memsdata from "../../memsdata"

const Meme = () => {

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * memsdata.data.memes.length)
    const randomMeme = memsdata.data.memes[randomIndex].url
    console.log(randomMeme)
    return randomMeme
    // console.log(randomIndex)
  }

  return (
    <main>
      <div className="inputs">
        <input className="txt_input" type="text" placeholder="Top text" />
        <input className="txt_input" type="text" placeholder="bottom text" />
      </div>
      <button className="get_meme_btn" onClick={getRandomImage}>Get new meme image!</button>
    </main>
  )
}

export default Meme