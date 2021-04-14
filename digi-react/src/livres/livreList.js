import {useState, useEffect} from 'react'
import Livre from './livre';

const LivreList = () =>
{   const [livres, setLivres] = useState([])
    useEffect(() => {
        fetch('/livres')
        .then( rawResult => rawResult.json())
        .then( result => setLivres(result))
    }, [])

    return (<div>
        Liste de livres :
        {livres.map(livre => <Livre key={livre.titre} livre={livre}></Livre>)}
    </div>)
}

export default LivreList;