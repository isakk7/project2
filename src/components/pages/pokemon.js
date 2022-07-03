import React , {useState} from 'react'
import { UseFetch } from '../UseFetch'
import { Cards } from '../cards/Cards'


const Pokemon = () => {
    const [url, setUrl]=useState('http://pokeapi.co/api/v2/pokemon')
    const estado= UseFetch(url)
    const {loading,data}=estado
    loading? console.log('loading'):console.log(data.results)


    return (
        <div>
            <h1>Pokemon page</h1>
            {
                loading
                ?
                <h1>Loading....</h1>
                :
                <div>
                <Cards results={data.results}/>

                <div className='container m-auto'>
                    <button onClick={()=>setUrl(data.previous)} className='m-2 btn btn-dark'>Preview</button>
                    <button onClick={()=>setUrl(data.next)} className='btn btn-dark'>Next</button>
                </div>

                </div>
            }

        </div>
    )
}

export default Pokemon