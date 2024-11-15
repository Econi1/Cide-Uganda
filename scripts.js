document.getElementById('search-toggle').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('search-field').classList.toggle('d-none');
});
let index = 0; 
const items = document.querySelectorAll('.carousel-item'); 
const gallery = document.getElementById('gallery'); 
function showNextImage() {
     items[index].classList.remove('active'); 
     index = (index + 1) % items.length; 
     items[index].classList.add('active'); 
     gallery.style.setProperty('--bg-image', `url('${items[index].querySelector('img').src}')`); 
     gallery.style.backgroundImage = gallery.style.getPropertyValue('--bg-image'); 
    } setInterval(showNextImage, 10000);