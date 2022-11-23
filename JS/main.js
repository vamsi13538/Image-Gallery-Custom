let imageOne = document.querySelector('.image1');

imageOne.addEventListener('click', openImage1);
function openImage1(e){
 const current = document.getElementById('current');
 current.src = e.target.src;
 sr.reveal('#current' ,{
     duration: 2000,
     origin: 'top',
     distance: '200px'
 });
}

let imageTwo = document.querySelector('.image2');

imageTwo.addEventListener('click', openImage2);
function openImage2(e){
 const current = document.getElementById('current');
 current.src = e.target.src;
 sr.reveal('#current' ,{
     duration: 2000,
     origin: 'top',
     distance: '200px'
 });
}
let imageThree = document.querySelector('.image3');

imageThree.addEventListener('click', openImage3);
function openImage3(e){
 const current = document.getElementById('current');
 current.src = e.target.src;
 sr.reveal('#current' ,{
     duration: 2000,
     origin: 'top',
     distance: '200px'
 });
}
let imageFour = document.querySelector('.image4');

imageFour.addEventListener('click', openImage4);
function openImage4(e){
 const current = document.getElementById('current');
 current.src = e.target.src;
 sr.reveal('#current' ,{
     duration: 2000,
     origin: 'top',
     distance: '200px'
 });
}
let imageFive = document.querySelector('.image5');

imageFive.addEventListener('click', openImage5);
function openImage5(e){
 const current = document.getElementById('current');
 current.src = e.target.src;
 sr.reveal('#current' ,{
     duration: 2000,
     origin: 'top',
     distance: '200px'
 });
}
let imageSix = document.querySelector('.image6');

imageSix.addEventListener('click', openImage6);
function openImage6(e){
 const current = document.getElementById('current');
 current.src = e.target.src;
 sr.reveal('#current' ,{
     duration: 2000,
     origin: 'top',
     distance: '200px'
 });
}
let imageSeven = document.querySelector('.image7');

imageSeven.addEventListener('click', openImage7);
function openImage7(e){
 const current = document.getElementById('current');
 current.src = e.target.src;
 sr.reveal('#current' ,{
     duration: 2000,
     origin: 'top',
     distance: '200px'
 });
}

let imageEight = document.querySelector('.image8');

imageEight.addEventListener('click', openImage8);
function openImage8(e){
 const current = document.getElementById('current');
 current.src = e.target.src;
 window.sr = ScrollReveal();
 sr.reveal('#current' ,{
     duration: 2000,
     origin: 'top',
     distance: '200px'
 });
}

window.sr = ScrollReveal();
 sr.reveal('.image1, .image2, .image3, .image4, .image5, .image6, .image7, .image8' ,{
     duration: 2000,
     origin: 'bottom',
     distance: '200px',
     delay: 1000
 });

 sr.reveal('h1', {
     duration: 2000,
     origin: 'top',
     distance: '100px'
 })

