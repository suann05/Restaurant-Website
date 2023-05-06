const link = document.querySelectorAll('.cat1, .cat2, .cat3, .cat4, .cat5');
const linkHoverReveal = document.querySelectorAll('.hover-reveal');
const linkImages = document.querySelectorAll('.hidden-img');

for(let i = 0; i < link.length; i++) {
  link[i].addEventListener('mousemove', (e) => {
    linkHoverReveal[i].style.opacity = 1;
    linkHoverReveal[i].style.transform = `translate(-50%, -42.5%) rotate(2deg)`;
    linkImages[i].style.transform = 'scale(0.8, 0.8)';
    linkHoverReveal[i].style.left = e.clientX + "px";
  })
  
  link[i].addEventListener('mouseleave', (e) => {
    linkHoverReveal[i].style.opacity = 0;
    linkHoverReveal[i].style.transform = `translate(-50%, -30%) rotate(0deg)`;
    linkImages[i].style.transform = 'scale(0.8, 0.8)';
  })
}

const link6 = document.querySelectorAll('.cat6');
const linkHoverReveal6 = document.querySelectorAll('.hover-reveal6');
const linkImages6 = document.querySelectorAll('.hover-reveal6 img');

for(let i = 0; i < link6.length; i++) {
  link6[i].addEventListener('mousemove', (e) => {
    linkHoverReveal6[i].style.opacity = 1;
    linkHoverReveal6[i].style.transform = `translate(-50%, -60%) rotate(2deg)`;
    linkImages6[i].style.transform = 'scale(0.5, 0.5)';
    linkHoverReveal6[i].style.left = e.clientX + "px";
  })
  
  link6[i].addEventListener('mouseleave', (e) => {
    linkHoverReveal6[i].style.opacity = 0;
    linkHoverReveal6[i].style.transform = `translate(-50%, -60%) rotate(0deg)`;
    linkImages6[i].style.transform = 'scale(0.5, 0.5)';
  })
}
