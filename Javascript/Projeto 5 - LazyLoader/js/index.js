// Intersection Observer API
const images = document.querySelectorAll(".image-container img")

const observerImage = new IntersectionObserver(( entradas  ) => {
    
    entradas.forEach( entrada => {
        console.log(entrada)
        if( !entrada.isIntersecting ) return 
        const image = entrada.target // Obtem o elemento observado
    
        image.src = image.src.replace("&w=10","&w=1000") // Altera o SRC do elemento observado

        observer.unobserve( image ) // Para de observar o elemento
    })

})

images.forEach( ( imagem ) => {
    observerImage.observe( imagem )
})


const animatedElement = document.querySelector('.box-animation'); // Seleciona os elementos

function apresentaElemento(entries) { // Função a ser chamada quando o elemento está sendo observado
                                      // Passando como parametro , o elemento
    entries.forEach(entry => {  // Um loop entre os elementos enviandos para serem observados
        if (entry.isIntersecting) { // Se o elemento estiver sendo observado
            const elemento = entry.target // Coletando o elemento div dentro da entry
            elemento.classList.add('visible'); // Adicione a classe visible
        }
});
}

const observer = new IntersectionObserver(apresentaElemento, {
    root: null, // Use o viewport como área de observação
    threshold: 0.5 // Configura a porcentagem de visibilidade necessária para acionar a animação
});

observer.observe( animatedElement )