// Intersection Observer API
const images = document.querySelectorAll(".image-container img")

const observer = new IntersectionObserver(( entradas , observer ) => {

    entradas.forEach( entrada => {
        if( !entrada.isIntersecting ) return 
        const image = entrada.target 
        image.src = image.src.replace("&w=10","&w=1000")

        observer.unobserve( image )
    })

},{})

images.forEach( ( imagem ) => {
    observer.observe( imagem )
})