const buttons = document.querySelectorAll("#img-picker li")
const image = document.querySelector("#product-image")

function limpaSelected(){
    buttons.forEach( (btn) => {
        btn.querySelector(".color").classList.remove("selected")
    })
}

buttons.forEach( ( btn ) => {
    btn.addEventListener("click" , (e) => {

        limpaSelected();

        const button = e.target
        const id = button.getAttribute("id")
        
        console.log(button)

        button.querySelector(".color").classList.add("selected")

        // Removendo classe chaging , adicionando nova imagem , e retornando a classe com .3s de intervalo
        image.classList.add("changing")
        image.setAttribute("src",`img/iphone_${id}.jpg`)
        setTimeout( () => image.classList.toggle("changing") , 300)
    })
})