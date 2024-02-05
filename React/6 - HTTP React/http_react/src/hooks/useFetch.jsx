import { useState , useEffect } from 'react'

// 4 - Custom Hooks
export const useFetch = ( url ) => {

    const [ data , setData ] = useState(null)

    // 5 - Refatorando post

    const [ config , setConfig ] = useState(null)
    const [ method , setMethod ] = useState(null)
    const [ callFetch , setCallFetch ] = useState(null)

    // 6 - loading
    const [ loading , setLoading ] = useState( false )

    // 7 - Erros
    const [ error , setError ] = useState( null )

    const httpConfig = ( data , method ) => {
        if( method === "POST"){
            setConfig({
                method,
                headers: {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify( data )
            })
        }

        setMethod( method )
    }

    useEffect( () => {
        const fetchData = async ()=>{
            // Tratando erro 
            try{
                setLoading( true )

                const res = await fetch( url )
                const json = await res.json()

                setData( json )
            } catch( error ) {
                console.log( error.message )
                setError("Houve algum erro ao carregar os dados!")
            }
        }
        fetchData();
        
        setLoading( false )

        
    }, [ url , callFetch ])

    // 5 - Refatorando post
    useEffect( () => {
        const http = async () => {
            let json;

            if( method === 'POST'){
                
                setLoading( true )

                let fetchOptions = [url , config]

                const res = await fetch(...fetchOptions)

                json = res.json()

                setLoading( false )
            }
            setCallFetch( json )

        }

        http();
    },[config , method , url])

    return { data , httpConfig , loading , error }
}