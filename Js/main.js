let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}


let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            });
        }
    });

    // Sticky header
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
}


ScrollReveal({ 
    // reset: true ,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content,  .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typed.js for typing effect
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer!', 'UI/UX Designer!', 'Web Developer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const form = e.target;

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    }).then(response => {
      if (response.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Oops! Something went wrong.");
      }
    });
  });


  
  // const filterButtons = document.querySelectorAll('.portfolio-list li');
  // const portfolioItems = document.querySelectorAll('.portfolio-box');

  // filterButtons.forEach(button => {
  //   button.addEventListener('click', () => {
  //     // Remove "active" from all buttons
  //     filterButtons.forEach(btn => btn.classList.remove('active'));
  //     button.classList.add('active');

  //     const category = button.getAttribute('data-filter');

  //     portfolioItems.forEach(item => {
  //       const itemCategory = item.getAttribute('data-category');
  //       if (category === 'all' || itemCategory === category) {
  //         item.style.display = 'block';
  //       } else {
  //         item.style.display = 'none';
  //       }
  //     });
  //   });
  // });


  const filterButtons = document.querySelectorAll('.portfolio-list li');
  const portfolioItems = document.querySelectorAll('.portfolio-box');

  filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const category = button.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (category === 'all' || itemCategory === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });


  


