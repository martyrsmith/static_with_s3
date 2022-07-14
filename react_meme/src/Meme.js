import { useEffect, useState } from "react";

export default function Meme() {
    const [allMemes, setAllMemes] = useState([])
    const [meme, setMeme] = useState({ url: 'https://i.imgflip.com/30b1gx.jpg', topText: '', bottomText: ''})


    useEffect(()=> {
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    function handleClick() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        setMeme({ ...meme, url: allMemes[randomNumber].url})
    }

    function handleChange(event){
        const {name, value, type, checked} = event.target
        setMeme(oldData => {
            return {
                ...oldData,
                [name]: value
            }
        })
    }

    return (
        <main>
            <div className={"form"}>
                <input
                    name="topText"
                    type={"text"}
                    className={"form--text"}
                    placeholder={"Top text"}
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type={"text"}
                    name="bottomText"
                    className={"form--text"}
                    placeholder={"Bottom text"}
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button
                    className={"form--button"}
                    onClick={handleClick}>Get new meme image</button>
            </div>
            <div className="meme">
            <img src={meme.url} alt='funny meme' className={"meme--image"} />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>

            </div>
            
        </main>
    )

}