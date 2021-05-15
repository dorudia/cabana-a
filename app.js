document.querySelector('.hamburger-menu').
addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('change')
})

const galeryImg = document.querySelectorAll('.poze-galerie img');

// galeryImg.forEach((item) => {
//     item.addEventListener('click', () => {
//         item.style.position = 'fixed';
//         item.style.top = '0';
//         item.style.width = '80%';
//         item.style.height = 'auto';
//         item.style.padding = '30px 10%';
//         item.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
//     })
// })