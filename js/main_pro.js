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
if (btnCart && imgSrc && price && teb_body) {
    btnCart.onclick = function() {
    let imag = imgSrc.src
    let dic =  parseInt(price.innerText) * parseInt(num.innerText)
    let product = {
        img :imag,
        price : price.innerText,
        num : num.innerText,
        total : dic
    }

    data.push(product)
    detaiLS()
}


function detaiLS() {
    let res = ''
    for(let i = 0 ; i < data.length ; i++) {
        res += `
            <tr class="flex">
                <td><img src="${data[i].img}" alt=""></td>
                <td>$${data[i].price}</td>
                <td>${data[i].num}</td>
                <td>$${data[i].total}</td>
                <td><button onclick="deleteItem(this , ${i})">X</button></td>
            </tr>
        `
    }

    teb_body.innerHTML = res
    console.log(res)
}


function  deleteItem(button ,index) {
    let row = button.parentElement.parentElement ;
    row.remove();
    data.splice(index, 1);

    if (data.length === 0) {
        teb_body.innerHTML = `Your cart is empty.`;
    }

}

if(data.length === 0){
    teb_body.innerText = 'Your cart is empty.'
}


function active(activeImg) {
   imgSrc.src = activeImg.src         
}
}



// 
