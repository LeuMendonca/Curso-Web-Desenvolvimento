import { useState } from "react";


function listRender() {

    const [list] = useState(["Pedrao", "Jefferson", "Rafael"])

    const [users, setUsers] = useState([
        { id: 1, nome: "Leonardo", idade: 22 },
        { id: 2, nome: "Rodolfo", idade: 25 },
        { id: 3, nome: "Belchior", idade: 35 },
    ])

    const deleteRandom = () => {

        const randomNumber = Math.floor( Math.random() * ( users.length + 1 ) )

        //Fiquei na dúvida
       setUsers( ( prevUsers ) => users.filter( (user) => user.id != randomNumber ))

    }

    return (
        <div>
            <div>
                <ul>
                    {list.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
            </div>

            <div>
                <ul>
                    {
                        users.map(user => <li key={user.id}>{user.nome} - {user.idade} anos</li>)
                    }
                </ul>
            </div>

            <button onClick={ deleteRandom }>Delete random user</button>
        </div>
    )
}

export default listRender