import { useState , useEffect } from 'react'

// 4 - Custom Hooks
export const useFetch = ( url ) => {

    const [ data , setData ] = useState(null)

    // Refatorando post

    const [ config , setConfig ] = useState(null)
    const [ method , setMethod ] = useState(null)
    const [ callFetch , setCallFetch ] = useState(null)

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
            const res = await fetch( url )
            const json = await res.json()

            setData( json )
        }

        fetchData();
    }, [ url , callFetch ])

    // 5 - Refatorando post
    useEffect( () => {
        const http = async () => {
            let json;

            if( method === 'POST'){
                let fetchOptions = [url , config]

                const res = await fetch(...fetchOptions)

                json = res.json()
            }

            setCallFetch( json )
        }

        http();
    },[config , method , url])

    return { data , httpConfig}
}