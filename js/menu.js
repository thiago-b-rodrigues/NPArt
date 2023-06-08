document.querySelector('.menu-icon').addEventListener('click', function(){
    document.querySelector('.links-menu').style.display = 'flex';
})

document.querySelector('.btn-close').addEventListener('click', function(){
    document.querySelector('.links-menu').style.display = 'none';
})