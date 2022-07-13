import memesData from "./memesData";
// import {useState} from "react";

export default function Meme() {
    // const meme = useState("")

    function handleClick(){
        const memes = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memes.length)
        // memes[randomNumber]
        // console.log(memes)
    }

    function handleMouseOver(){
        console.log('I see a mouse!')
    }

    return (
        <main>
            <div className={"form"}>
                <input
                    type={"text"}
                    className={"form--text"}
                    placeholder={"Top text"}
                />
                <input
                    type={"text"}
                    className={"form--text"}
                    placeholder={"Bottom text"}
                />
                <button
                    className={"form--button"}
                onClick={handleClick}
                onMouseOver={handleMouseOver}>Get new meme image</button>
            </div>

            {/*{meme && <img src={meme.url} alt='funny meme'/>}*/}
        </main>
    )

}