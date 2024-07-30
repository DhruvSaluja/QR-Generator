const qrText = document.getElementById('inputText');
const qrsizes = document.getElementById('sizes');
const qrgenerate = document.getElementById('generateBtn');
const qrdownload = document.getElementById('downloadBtn');


const qrcontainer = document.querySelector('.qr-body')
let size = qrsizes.value;
qrgenerate.addEventListener('click',(e)=>{
    e.preventDefault();
    if(qrText.value.length>0){
        generateqrcode();
    }
    else{
        alert("Enter text or URL");
    }
    
});

qrsizes.addEventListener('change',(e)=>{
    size = e.target.value;
    if(qrText.value.length>0){
        generateqrcode();
    }
    
});

qrdownload.addEventListener('click',()=>{
    let img = document.querySelector('.qr-body img');
    if(img!==null){
        let imgAttr = img.getAttribute('src');
        qrdownload.setAttribute('href',imgAttr);
    }
    else{
        qrdownload.setAttribute('href',`https://tse1.mm.bing.net/th?id=OIP.yR4T01QmrChqjTdzC5RCQwHaFp&pid=Api&P=0&h=220`)
    }
})

function generateqrcode(){
    qrcontainer.innerHTML="";
    new QRCode(qrcontainer,{
        text: qrText.value,
        height: size,
        width: size,
        colorDark : "#000000",
        colorLight : "#ffffff",
    });
}