import "./meme.css"

const Meme = () => {
  return (
    <main>
      <form>
        <div className="inputs">
          <input className="txt_input" type="text" placeholder="Top text" />
          <input className="txt_input" type="text" placeholder="bottom text" />
        </div>
        <button className="get_meme_btn">Get new meme image</button>
      </form>
    </main>
  )
}

export default Meme