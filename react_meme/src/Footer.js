import { useEffect, useState } from "react";

export default function Footer(props) {
    const [swData, setSwdata] = useState({})
    const [personId, setPersonId] = useState(1)
    const [buttonText, setButtonText] = useState('Next')

    useEffect(function () {
        console.log('getting new person')
        fetch(`https://swapi.dev/api/people/${personId}`)
            .then(res => res.json())
            .then(data => setSwdata(data))
            .then(data => setButtonText('Next'))

    }, [personId])

    console.log(swData.name, personId)



    function nextPerson() {
        setPersonId(personId + 1)
        console.log(personId)
        setButtonText('Searching...')
    }

    return (<div>
        <div>
            Username: {swData.name ? swData.name : 'Unknown'}
        </div>

        <button onClick={nextPerson}>{buttonText}</button>
    </div>
    )
}