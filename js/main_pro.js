let btn_1 = document.getElementById('btn_1')
let btn_2 = document.getElementById('btn_2')
let num = document.getElementById('num')

if(btn_1 && btn_2 && num) {
    let x = 1
    btn_2.onclick = function () {
        x++
        num.innerText = x
    }

    btn_1.onclick = function () {
        if (x > 1) {
            x--
            num.innerText = x
        }
    }
}



let btnCart = document.getElementById('btnCart')
let imgSrc = document.getElementById('imgSrc')
let price = document.getElementById('price')
let teb_body = document.getElementById('teb_body')


let data = []
if (btnCart && imgSrc && price  ) {
    btnCart.onclick = function() {
    let imag = imgSrc.src
    let dic =  parseInt(price.innerText) * parseInt(num.innerText)
    let product = {
        img :imag,
        price : parseInt(price.innerText),
        num : parseInt(num.innerText),
        total : dic
    }

    let data = JSON.parse(localStorage.getItem("cart")) || []
    data.push(product)
    localStorage.setItem("cart", JSON.stringify(data))
    detaiLS()

}

function active(activeImg) {
   imgSrc.src = activeImg.src         
}


//
let img_1 = document.getElementById('img_1')
let img_2 = document.getElementById('img_2')
let img_3 = document.getElementById('img_3')
let img_4 = document.getElementById('img_4')


let imagSrc = localStorage.getItem('src');
let imagSrc_1 = localStorage.getItem('src_1');
let imagSrc_2 = localStorage.getItem('src_2');
let imagSrc_3 = localStorage.getItem('src_3');
let imagSrc_4 = localStorage.getItem('src_4');

if (imagSrc) {
    imgSrc.src = imagSrc;
    img_1.src = imagSrc_1;
    img_2.src = imagSrc_2;
    img_3.src = imagSrc_3;
    img_4.src = imagSrc_4;
}
//  
}

//


