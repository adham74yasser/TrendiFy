let slid1 = document.getElementById('slid1');
let slid2 = document.getElementById('slid2');
let Next = document.getElementById('Next');
let Prev = document.getElementById('Prev');
let item1 = document.getElementById('item1');
let bold = document.getElementById('bold');
let head1 = document.getElementById('head1');
let span1 = document.getElementById('span1');
let para = document.getElementById('para');
let button = document.getElementById('button');


if(slid1 && slid2 && Next && Prev && item1 && bold && head1 && span1 && para && button) {
let slides = [
  {
    img: 'images/hero-1.png',
    bold: 'Upcoming Offer',
    head: 'Big Deals From',
    span: 'Manufacturer',
    color: '#63a2c1',
    para: 'Clothing, Shoes, Bags, Wallets...'
  },
  {
    img: 'images/hero-2.png',
    bold: 'Hot promotions',
    head: 'Fashion Trending',
    span: 'Great Collection',
    color: '#d8827d',
    para: 'Save more with coupons & up to 20% off'
  }
];
let currentIndex = 0;

function showSlide(index) {
  // Animation
  item1.style.transform = 'scale(0.2)';
  item1.style.opacity = '0';
    [bold, head1, span1, para, button].forEach(el => {
    el.style.transform = 'translateY(-20px)';
    el.style.opacity = '0';
  });

  setTimeout(() => {
    item1.src = slides[index].img;
    bold.innerText = slides[index].bold;
    head1.innerText = slides[index].head;
    span1.innerText = slides[index].span;
    span1.style.color = slides[index].color;
    para.innerText = slides[index].para;

    item1.style.transform = 'scale(1)';
    item1.style.opacity = '1';

    setTimeout(() => showEl(bold), 200);
    setTimeout(() => showEl(head1), 400);
    setTimeout(() => showEl(span1), 600);
    setTimeout(() => showEl(para), 800);
    setTimeout(() => showEl(button), 1000);
    function showEl(el) {
  el.style.transform = 'translateY(0)';
  el.style.opacity = '1';
}
  }, 300);

}




Next.onclick = function () {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
};

Prev.onclick = function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
};
// 

function addActive(containerSelect , itemSelect , activeSelect) {
    let container = document.querySelector(containerSelect);
    container.addEventListener( 'click' , a => {
        let item = a.target.closest(itemSelect);
        if(!item) return ;
        container.querySelectorAll(itemSelect).forEach(A => A.classList.remove(activeSelect));
        item.classList.add(activeSelect)
    });
}

addActive('.acts', '.act', 'active');
}

// product start
let main = document.getElementById('main')
let open = false
function mainOpen() {
    if (!main) return;

    if (!open) {
            main.style.transform = ' translateX(0%)';
    }else {
            main.style.transform = ' translateX(-150%)';
    }
    open = !open
}
// product end
// shop start


// shop end


