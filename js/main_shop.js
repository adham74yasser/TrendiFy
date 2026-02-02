let container = document.getElementById('container')
let item = document.getElementById('item')
let show = document.getElementById('show')

if(container && item && show) {
    
let cards = [
    {
        img_1 : 'images/product-1-1.jpg',
        img_2 : 'images/product-1-2.jpg',
        head : 'Clothing',
        title : 'Colorful Pattern <br>Shirts',
        prise : '$238.85',
        discount : '$245.8',
        link : 'product_1.html'
    },
    {
        img_1 : 'images/product-2-1.jpg',
        img_2 : 'images/product-2-2.jpg',
        head : 'Clothing',
        title : 'Fish Print Patched T-shirt',
        prise : '$199.99',
        discount : '$249.99',
        link : 'product_2.html'
    },
    {
        img_1 : 'images/product-3-1.jpg',
        img_2 : 'images/product-3-2.jpg',
        head : 'Clothing',
        title : 'Vintage Floral Print Dress',
        prise : '$349.99',
        discount : '$299.99',
        link : 'product_3.html'
    },
    {
        img_1 : 'images/product-4-1.jpg',
        img_2 : 'images/product-4-2.jpg',
        head : 'Clothing',
        title : 'Stripe Circle Print T-Shirt ',
        prise : '$149.99',
        discount : '$189.99',
        link : 'product_4.html'
    },
    {
        img_1 : 'images/Bootstrap E-commrece - 1_30_2026 6-37-16 AM/product-5-1.jpg',
        img_2 : 'images/Bootstrap E-commrece - 1_30_2026 6-37-16 AM/product-5-2.jpg',
        head : 'Clothing',
        title : 'Casual Cotton T-Shirt',
        prise : '$129.99',
        discount : '$159.99',
        link : 'product_5.html'
    },
    {
        img_1 : 'images/Bootstrap E-commrece - 1_30_2026 6-37-16 AM/product-6-1.jpg',
        img_2 : 'images/Bootstrap E-commrece - 1_30_2026 6-37-16 AM/product-6-2.jpg',
        head : 'Clothing',
        title : 'Casual Cotton T-Shirt',
        prise : '$129.99',
        discount : '$159.99',
        link : 'product_6.html'
    },
    {
        img_1 : 'images/Bootstrap E-commrece - 1_30_2026 6-37-16 AM/product-7-1.jpg',
        img_2 : 'images/Bootstrap E-commrece - 1_30_2026 6-37-16 AM/product-7-2.jpg',
        head : 'Clothing',
        title : 'Casual Cotton T-Shirt',
        prise : '$129.99',
        discount : '$159.99',
        link : 'product_7.html'
    },
    {
        img_1 : 'images/Bootstrap E-commrece - 1_30_2026 6-37-16 AM/product-8-1.jpg',
        img_2 : 'images/Bootstrap E-commrece - 1_30_2026 6-37-16 AM/product-8-2.jpg',
        head : 'Clothing',
        title : 'Casual Cotton T-Shirt',
        prise : '$129.99',
        discount : '$159.99',
        link : 'product_8.html'  
    },
    {
        img_1 : 'images/Bootstrap E-commrece - 1_30_2026 6-37-16 AM/product-9-1.jpg',
        img_2 : 'images/Bootstrap E-commrece - 1_30_2026 6-37-16 AM/product-9-2.jpg',
        head : 'Clothing',
        title : 'Casual Cotton T-Shirt',
        prise : '$129.99',
        discount : '$159.99',
        link : 'product_9.html' 
    },
    {
        img_1 : 'images/Bootstrap E-commrece - 1_30_2026 6-37-16 AM/product-10-1.jpg',
        img_2 : 'images/Bootstrap E-commrece - 1_30_2026 6-37-16 AM/product-10-2.jpg',
        head : 'Clothing',
        title : 'Casual Cotton T-Shirt',
        prise : '$129.99',
        discount : '$159.99',
        link : 'product_10.html' 
    },
    {
        img_1 : 'images/Bootstrap E-commrece - 1_30_2026 6-37-16 AM/product-11-1.jpg',
        img_2 : 'images/Bootstrap E-commrece - 1_30_2026 6-37-16 AM/product-11-2.jpg',
        head : 'Clothing',
        title : 'Casual Cotton T-Shirt',
        prise : '$129.99',
        discount : '$159.99',
        link : 'product_11.html' 
    },
    {
        img_1 : 'images/Bootstrap E-commrece - 1_30_2026 6-37-16 AM/product-12-1.jpg',
        img_2 : 'images/Bootstrap E-commrece - 1_30_2026 6-37-16 AM/product-12-2.jpg',
        head : 'Clothing',
        title : 'Casual Cotton T-Shirt',
        prise : '$129.99',
        discount : '$159.99',
        link : 'product_12.html' 
    },
]

let res = ''

for(let i = 0 ; i < cards.length ; i++) {
    res += `
    <div class="card flex card1">
        <div class="img">
            <img src="${cards[i].img_1}" alt="">
            <img src="${cards[i].img_2}" alt="">
            <a href=""class='flex'>
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-bag-shopping "></i>
            </a>
        </div>
        <div class="title_card flex">
            <p>Clothing</p>
            <a href="${cards[i].link}" id='onSrc'>${cards[i].title}</a>
            <b>${cards[i].prise}<del>${cards[i].discount}</del></b>
        </div>
    </div>
    `
    container.innerHTML = res
    item.innerText = i+1
    show.innerHTML = `<i class="fa-solid fa-table-cells-large"></i>Show : ${i+1}`
}
}