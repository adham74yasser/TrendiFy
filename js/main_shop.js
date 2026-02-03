let container = document.getElementById('container')
let item = document.getElementById('item')
let show = document.getElementById('show')
let search = document.getElementById('search')

if(container && item && show && search) {
    
let cards = [
    {
        img_1 : 'images/product-1-1.jpg',
        img_2 : 'images/product-1-2.jpg',
        head : 'Clothing',
        title : 'Colorful Pattern <br>Shirts',
        prise : '$238.85',
        discount : '$245.8',
        mainImg_1 :'images/image-product/Gemini_Generated_Image_7h5ugv7h5ugv7h5u.png',
        mainImg_2 :"images/image-product/Gemini_Generated_Image_se7xv0se7xv0se7x.png",
        mainImg_3 :"images/image-product/Gemini_Generated_Image_tj6hqktj6hqktj6h.png",
        mainImg_4 :"images/image-product/Gemini_Generated_Image_wg8zrjwg8zrjwg8z.png"
    },
    {
        img_1 : 'images/image-product/photo_1_1.jpg',
        img_2 : 'images/image-product/photo_1_2.jpg',
        head : 'Clothing',
        title : 'Fish Print Patched T-shirt',
        prise : '$199.99',
        discount : '$249.99',
        mainImg_1 :"images/image-product/photo_1_1.jpg",
        mainImg_2 :"images/image-product/photo_1_2.jpg",
        mainImg_3 :"images/image-product/photo_1_3.jpg",
        mainImg_4 :"images/image-product/photo_1_4.jpg"
    },
    {
        img_1 : 'images/image-product/photo_2_1.jpg',
        img_2 : 'images/image-product/photo_2_2.jpg',
        head : 'Clothing',
        title : 'Vintage Floral Print Dress',
        prise : '$349.99',
        discount : '$299.99',
        mainImg_1 :"images/image-product/photo_2_1.jpg",
        mainImg_2 :"images/image-product/photo_2_2.jpg",
        mainImg_3 :"images/image-product/photo_2_3.jpg",
        mainImg_4 :"images/image-product/photo_2_4.jpg"
    },
    {
        img_1 : 'images/image-product/photo_3_1.jpg',
        img_2 : 'images/image-product/photo_3_2.jpg',
        head : 'Clothing',
        title : 'Stripe Circle Print T-Shirt ',
        prise : '$149.99',
        discount : '$189.99',
        mainImg_1 :"images/image-product/photo_3_1.jpg",
        mainImg_2 :"images/image-product/photo_3_2.jpg",
        mainImg_3 :"images/image-product/photo_3_3.jpg",
        mainImg_4 :"images/image-product/photo_3_4.jpg"
    },
    {
        img_1 : 'images/image-product/photo_4_1.jpg',
        img_2 : 'images/image-product/photo_4_2.jpg',
        head : 'Clothing',
        title : 'Casual Cotton T-Shirt',
        prise : '$129.99',
        discount : '$159.99',
        mainImg_1 :"images/image-product/photo_4_1.jpg",
        mainImg_2 :"images/image-product/photo_4_2.jpg",
        mainImg_3 :"images/image-product/photo_4_3.jpg",
        mainImg_4 :"images/image-product/photo_4_4.jpg"
    },
    {
        img_1 : 'images/image-product/photo_5_1.jpg',
        img_2 : 'images/image-product/photo_5_2.jpg',
        head : 'Clothing',
        title : 'Casual Cotton T-Shirt',
        prise : '$129.99',
        discount : '$159.99',
        mainImg_1 :"images/image-product/photo_5_1.jpg",
        mainImg_2 :"images/image-product/photo_5_2.jpg",
        mainImg_3 :"images/image-product/photo_5_3.jpg",
        mainImg_4 :"images/image-product/photo_5_4.jpg"
    },
    {
        img_1 : 'images/image-product/photo_6_1.jpg',
        img_2 : 'images/image-product/photo_6_2.jpg',
        head : 'Clothing',
        title : 'Casual Cotton T-Shirt',
        prise : '$129.99',
        discount : '$159.99',
        mainImg_1 :"images/image-product/photo_6_1.jpg",
        mainImg_2 :"images/image-product/photo_6_2.jpg",
        mainImg_3 :"images/image-product/photo_6_3.jpg",
        mainImg_4 :"images/image-product/photo_6_4.jpg"
    },
    {
        img_1 : 'images/image-product/photo_7_1.jpg',
        img_2 : 'images/image-product/photo_7_2.jpg',
        head : 'Clothing',
        title : 'Casual Cotton T-Shirt',
        prise : '$129.99',
        discount : '$159.99',
        mainImg_1 :"images/image-product/photo_7_1.jpg",
        mainImg_2 :"images/image-product/photo_7_2.jpg",
        mainImg_3 :"images/image-product/photo_7_3.jpg",
        mainImg_4 :"images/image-product/photo_7_4.jpg"  
    },
    {
        img_1 : 'images/image-product/photo_8_1.jpg',
        img_2 : 'images/image-product/photo_8_2.jpg',
        head : 'Clothing',
        title : 'Casual Cotton T-Shirt',
        prise : '$129.99',
        discount : '$159.99',
        mainImg_1 :"images/image-product/photo_8_1.jpg",
        mainImg_2 :"images/image-product/photo_8_2.jpg",
        mainImg_3 :"images/image-product/photo_8_3.jpg",
        mainImg_4 :"images/image-product/photo_8_4.jpg" 
    },
    {
        img_1 : 'images/image-product/photo_9_1.jpg',
        img_2 : 'images/image-product/photo_9_2.jpg',
        head : 'Clothing',
        title : 'Casual Cotton T-Shirt',
        prise : '$129.99',
        discount : '$159.99',
        mainImg_1 :"images/image-product/photo_9_1.jpg",
        mainImg_2 :"images/image-product/photo_9_2.jpg",
        mainImg_3 :"images/image-product/photo_9_3.jpg",
        mainImg_4 :"images/image-product/photo_9_4.jpg" 
    },
    {
        img_1 : 'images/Bootstrap E-commrece - 1_30_2026 6-37-16 AM/product-11-1.jpg',
        img_2 : 'images/Bootstrap E-commrece - 1_30_2026 6-37-16 AM/product-11-2.jpg',
        head : 'Clothing',
        title : 'Casual Cotton T-Shirt',
        prise : '$129.99',
        discount : '$159.99',
        mainImg_1 :"images/image-product/photo_9_1.jpg",
        mainImg_2 :"images/image-product/photo_9_2.jpg",
        mainImg_3 :"images/image-product/photo_9_3.jpg",
        mainImg_4 :"images/image-product/photo_9_4.jpg" 
    },
    {
        img_1 : 'images/Bootstrap E-commrece - 1_30_2026 6-37-16 AM/product-12-1.jpg',
        img_2 : 'images/Bootstrap E-commrece - 1_30_2026 6-37-16 AM/product-12-2.jpg',
        head : 'Clothing',
        title : 'Casual Cotton T-Shirt',
        prise : '$129.99',
        discount : '$159.99',
        mainImg_1 :"images/image-product/photo_9_1.jpg",
        mainImg_2 :"images/image-product/photo_9_2.jpg",
        mainImg_3 :"images/image-product/photo_9_3.jpg",
        mainImg_4 :"images/image-product/photo_9_4.jpg"
    },
]

function linkst(i) {
    localStorage.setItem('src' , cards[i].img_1)
    localStorage.setItem('src_1' , cards[i].mainImg_1)
    localStorage.setItem('src_2' , cards[i].mainImg_2)
    localStorage.setItem('src_3' , cards[i].mainImg_3)
    localStorage.setItem('src_4' , cards[i].mainImg_4)
}



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
            <a href="product_1.html" id='onSrc' onclick ='linkst(${i})'>${cards[i].title}</a>
            <b>${cards[i].prise}<del>${cards[i].discount}</del></b>
        </div>
    </div>
    `
    container.innerHTML = res
    item.innerText = i+1
    show.innerHTML = `<i class="fa-solid fa-table-cells-large"></i>Show : ${i+1}`
}


search.onkeyup = function () {
    let searchVal = search.value.trim().toLowerCase()
    let res = ''
    let count = 0

    for (let i = 0; i < cards.length; i++) {
        let val = cards[i].title.trim().toLowerCase()

        if (val.includes(searchVal)) {
            res += `
            <div class="card flex card1">
                <div class="img">
                    <img src="${cards[i].img_1}" alt="">
                    <img src="${cards[i].img_2}" alt="">
                    <a href="" class="flex">
                        <i class="fa-solid fa-heart"></i>
                        <i class="fa-solid fa-bag-shopping"></i>
                    </a>
                </div>
                <div class="title_card flex">
                    <p>Clothing</p>
                    <a href="${cards[i].link}" id="onSrc">${cards[i].title}</a>
                    <b>${cards[i].prise} <del>${cards[i].discount}</del></b>
                </div>
            </div>
            `
            count++
        }
    }

    container.innerHTML = res
    item.innerText = count
    show.innerHTML = `<i class="fa-solid fa-table-cells-large"></i> Show : ${count}`
}

}


