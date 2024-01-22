// Selecionando elementos
const apiKey = "rYAH0OjSJtfDXVZ1hrJcwPkEjMzRlozM-5rtB9tHtueuQqj_0vEpc6MzGwpcB-_e"
const urlCliente = document.querySelector("#url-cliente")
const botaoGerar = document.querySelector("#gerar-qrcode")
const areaImagem = document.querySelector("#exibe-qrcode")

// Valores


// Funções

const  geraQRCode = async (  ) => {
    const valueUrl = urlCliente.value

    console.log(valueUrl)

    const url = `https://api.qr-code-generator.com/v1/create?access-token=${apiKey}`

    const configuracaoRequisicao = {
        method: 'POST', // Pode ser GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                "frame_name": "no-frame",
                "qr_code_text": valueUrl,
                "image_format": "SVG",
                "qr_code_logo": "scan-me-square"
            }
        ) // Converte o objeto para uma string JSON
      };

      fetch(url, configuracaoRequisicao)
      .then(response => response.json())
      .then(data => {
          // Faça algo com a resposta (data) aqui, se necessário
          console.log(data);
      })
      .catch(err => console.log(err));
};



//Eventos

botaoGerar.addEventListener("click" , geraQRCode)