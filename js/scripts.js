const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");


// eventos  
// genado o QR code
function generateQrCode() { 
    const qrCodeInputValue = qrCodeInput.value;

// se o usuario nao digitar nada nao gera nada
    if (!qrCodeInputValue) return; 

    // codigo valido
    qrCodeBtn.innerText = "Gerando codigo..."; 
    // achar a img
    qrCodeImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}';
    // vai mostrar a img 
    qrCodeImg.addEventListener("load",() => {
        container.classList.add("active");
        qrCodeBtn.innerText = "Codigo criado RT..."; 
    }   );
}

qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
});
// usado o enter para validar 
qrCodeInput.addEventListener("keydown", (e) => {
   if (e.code === "Enter") {
    generateQrCode();
   }
    
});


// limpar Qr.code


qrCodeInput.addEventListener("keyup",() => {
    if (!qrCodeInput.value) {
        container.classList.remove("active");
        qrCodeBtn.innerText = "Gerar QR code"
    }
});





