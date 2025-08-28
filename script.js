var typewriterElement = document.getElementById("typewriter");

var typewriter = new Typewriter(typewriterElement, {
  loop: true,
  delay: 75,
});

typewriter
  .typeString("Coding")
  .pauseFor(1500)
  .deleteAll()
  .typeString("Designing")
  .pauseFor(1500)
  .deleteAll()
  .typeString("Football")
  .pauseFor(1500)
  .deleteAll()
  .start();

const menuIcon = document.getElementById("menu-icon");
const navbarMobile = document.getElementById("navbar-mobile");

// Hide mobile menu initially
menuIcon.addEventListener('click',()=>{
  if(navbarMobile.classList.contains('hidden')){
    navbarMobile.classList.remove('hidden')
    navbarMobile.classList.add('flex','flex-col','justify-evenly','items-center','gap-2')
  }
  else{
    navbarMobile.classList.add('hidden')

  }

  // menuIcon.classList.toggle('bx-menu')
  menuIcon.classList.toggle('bx-x')
})


///showing education skills and experience
const btns = document.querySelectorAll(".btn");
const cards = document.querySelectorAll(".card");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    cards.forEach((card) => card.classList.add("hidden"));

    const targetId = btn.getAttribute("data-card");

    document.getElementById(targetId).classList.remove("hidden");
  });
});


document.getElementById("home-link").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("home").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("services-link").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("services").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("resume-link").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("resume").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("portfolio-link").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("about-link").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("contact-link").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});
//
// document.getElementById('experience').addEventListener('click',(e)=>{
//     e.preventDefault()
//     document.getElementById('experience-card').classList.toggle('hidden')
// })

// document.getElementById('education').addEventListener('click',(e)=>{
//     e.preventDefault()
//     document.getElementById('education-card').classList.toggle('hidden')
// })
// document.getElementById('skills').addEventListener('click',(e)=>{
//     e.preventDefault()
//     document.getElementById('skills-carousel').classList.toggle('hidden')
// })

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  // Handle form submission
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }
  console.log("Form submitted:", { name, email, message });
  e.target.reset();
});

//to show the active portion 
const links=document.querySelectorAll(".nav-link");

links.forEach((link)=>{
  link.addEventListener("click",()=>{
    links.forEach((lnk)=>lnk.classList.remove('text-amber-300','border-b-2','border-amber-300'))
    link.classList.add('text-amber-300','border-b-2','border-amber-300')
  })
})