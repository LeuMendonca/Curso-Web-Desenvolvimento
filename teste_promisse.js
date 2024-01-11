const fetchPromisse = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",

)

fetch("https://viacep.com.br/ws/35570270/json/")
.then( response => response.json() )
.then( ( response ) => {
    const { cep , logradouro } = response
    return [cep , logradouro]
}).then(cep => console.log(cep))
