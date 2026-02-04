let teb_body = document.getElementById('teb_body');
let pro_tot = document.getElementById('pro_tot');
let pri_tot = document.getElementById('pri_tot');

function detaiLS() {
    let data = JSON.parse(localStorage.getItem("cart")) || [];

    if (data.length === 0) {
        teb_body.innerHTML = 'Your cart is empty.';
        pro_tot.innerText = '0';
        pri_tot.innerText = '$0.00';
        return;
    }

    let res = '';
    let totalPr = 0;
    let numPro = 0;

    for (let i = 0; i < data.length; i++) {
        totalPr += data[i].total;
        numPro += data[i].num;

        res += `
            <tr class="flex">
                <td><img src="${data[i].img}" alt=""></td>
                <td>$${data[i].price}</td>
                <td>${data[i].num}</td>
                <td>$${data[i].total}</td>
                <td><button onclick="deleteCart(${i})">X</button></td>
            </tr>
        `;
    }

    teb_body.innerHTML = res;
    pro_tot.innerText = `${numPro}`;
    pri_tot.innerText = `$${totalPr}`;
}

function deleteCart(index) {
    let data = JSON.parse(localStorage.getItem("cart")) || [];
    data.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(data));
    detaiLS();
}

detaiLS();
