const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#qr-form button")

const textoQRCode = document.querySelector("#textQRCode")

const qrCodeImg = document.querySelector("#qr-code img")
// Eventos

// Gerar código
function geradorQrCode( ) {
    const textoValue = textoQRCode.value
    
    if( !textoValue ) return;

    qrCodeBtn.innerText = "Gerando código..."

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${textoValue}`
    
    qrCodeImg.addEventListener("load" , () => {
        container.classList.add("active")
        qrCodeBtn.innerText = "Código gerado!"
    })
}

qrCodeBtn.addEventListener("click" , (  ) => {
    geradorQrCode()
})

textoQRCode.addEventListener("keydown" , ( e ) => {
    if( e.key == "Enter"){
        geradorQrCode()
    }
})

// Limpar código
textoQRCode.addEventListener("input" , (  ) => {
    if( !textoQRCode.value ){
        container.classList.remove("active")
        qrCodeBtn.innerText = "Gerar QR Code"
    }
})