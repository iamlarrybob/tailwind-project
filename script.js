
let html = document.getElementById('html');
let change_btn = document.getElementById('change_btn');
let change_image = document.getElementById('change_image');

change_btn.addEventListener('click', () => {
    html.classList.toggle('dark');
    // change image source base on preference
    if(change_image.src.includes('img/moon.svg')){
        change_image.src = 'img/sun.svg';
    } else{
        change_image.src = 'img/moon.svg';
    }
})

// desktop version

let change_btn2 = document.getElementById('change_btn2');
let change_image2 = document.getElementById('change_image2');

change_btn2.addEventListener('click', () => {
    html.classList.toggle('dark');
    // change image source base on preference
    if(change_image2.src.includes('img/moon.svg')){
        change_image2.src = 'img/sun.svg';
    } else{
        change_image2.src = 'img/moon.svg';
    }
})

let main_menu = document.getElementById('main_menu');
let mobile_btn = document.getElementById('mobile_btn');
mobile_btn.addEventListener('click', () => {
    main_menu.classList.toggle('hidden');
})


