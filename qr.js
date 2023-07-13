//select class
const wrapper = document.querySelector (".wrapper"),
qrInput=wrapper.querySelector(".form input"),
submit = wrapper.querySelector (".form button");
qrImage=wrapper.querySelector(".qr-code img")

submit.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return; // if the input contains emty then return from this line
    submit.innerText="Generating QR Code..."
    //getting a qr code of user enter value using the qrserver
    //api and passing the api returned img src to qrImg
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load", () => { //QR code img loaded
        wrapper.classList.add("active");
    })
    submit.innerText="Generating QR Code..."
    });
    qrInput.addEventListener("keyup", function(){
        if(!qrInput.value){
            wrapper.classList.remove("active");
        }
    })