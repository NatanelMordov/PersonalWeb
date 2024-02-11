function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".ham-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
/* Scroll reveal animation */
const sr= ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2500,
  delay:400,
  //reset:true
})

sr.reveal('#profile, .contact_info_up_conteiner', {origin:'right'})
sr.reveal('.section, .nav-links', {origin:'left'})
sr.reveal('.experience_diteils_conteiner, .section_text_p2, .title', {interval:200})