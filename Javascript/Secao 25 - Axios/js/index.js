// 1 - Instalação:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

console.log(axios)

// 2 - Primeiro request
const getData = async () => {

    try {

        const response = await postsFetch.get("/users",
        // Cabeçalho da requisição
        {
            headers: {
                "Content-Type" : "application/json",
                "custom" : "header"
            }
        })
        
        return response.data
    } catch (error) {
        console.log( error.message )
    }

}

// 3 - Imprimindo dados na tela
const containerDados = document.querySelector("#user-container")

const imprimeDados = async () => {
    const dados = await getData()
    
    dados.forEach( ( element ) => {
        const  paragrafoName = document.createElement("p")
        const paragrafoEmail = document.createElement("p")

        paragrafoName.innerText = element.name
        paragrafoEmail.innerText = element.email
        
        const div = document.createElement("div")
        
        div.appendChild(paragrafoName)
        div.appendChild(paragrafoEmail)

        containerDados.appendChild(div)
        
    })
}

imprimeDados()

// 5 - Post
const form = document.querySelector("#post-form")
const titleInput = document.querySelector("#title")
const bodyInput = document.querySelector("#body")



form.addEventListener("submit" , ( e ) => {

    e.preventDefault();

    postsFetch.post("/posts",{
       
          title: titleInput.value,
          body: bodyInput.value,
          userId: 1
        
    })

})
