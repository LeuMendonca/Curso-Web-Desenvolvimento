import { useState } from "react";

 
 
 export function Data() {


    let someData = 10;
    const [anotherNumber ,setAnotherNumber ]  = useState(50)
    return (
        <div>
            <div>
                <p>Valor: { someData }</p>
                <button onClick={ () => someData++ }>Somar</button>
            </div>

            <div>
                <p>Valor: {anotherNumber}</p> 
                <button onClick={ () => setAnotherNumber( anotherNumber + 10  )}>Somar State</button>
            </div>

            
        </div>
    )
}

export default Data