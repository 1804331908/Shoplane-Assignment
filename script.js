var leftImage = document.querySelector('#left-image')
document.getElementById('man-img1').addEventListener('click', function(e){ 
    leftImage.src = e.target.src
})

document.getElementById('man-img2').addEventListener('click', function(e){ 
    leftImage.src = e.target.src
})

document.getElementById('man-img3').addEventListener('click', function(e){ 
    leftImage.src = e.target.src
})
document.getElementById('man-img4').addEventListener('click', function(e){ 
    leftImage.src = e.target.src
})
document.getElementById('man-img5').addEventListener('click', function(e){ 
    leftImage.src = e.target.src
})
var image = document.querySelectorAll('.product-image img');
image.forEach(items => {
    items.addEventListener("click", ()=> {
        removeBorder();
        items.classList.add('active');
    })
})

function removeBorder() {
    image.forEach(items => {
            items.classList.remove('active');
        })
}