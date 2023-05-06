const link = document.querySelectorAll('.cat1, .cat2, .cat3, .cat4, .cat5, .cat6');
const linkHoverReveal = document.querySelectorAll('.hover-reveal-pre');
const linkImages = document.querySelectorAll('.hidden-img-pre');

for(let i = 0; i < link.length; i++) {
  link[i].addEventListener('mousemove', (e) => {
    linkHoverReveal[i].style.opacity = 1;
    linkHoverReveal[i].style.transform = `translate(-50%, -42.5%) rotate(0deg)`;
    linkImages[i].style.transform = 'scale(0.8, 0.8)';
    linkHoverReveal[i].style.left = e.clientX + "px";
  })
  
  link[i].addEventListener('mouseleave', (e) => {
    linkHoverReveal[i].style.opacity = 0;
    linkHoverReveal[i].style.transform = `translate(-50%, -30%) rotate(0deg)`;
    linkImages[i].style.transform = 'scale(0.8, 0.8)';
  })
}

