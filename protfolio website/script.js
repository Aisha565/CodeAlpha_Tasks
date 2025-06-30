
const roles = ["Frontend Developer", "UI Designer", "Web Enthusiast"];
let currentIndex = 0;
const roleEl = document.getElementById("animated-role");

function updateRole() {
  roleEl.textContent = roles[currentIndex];
  roleEl.classList.remove("animate");

  void roleEl.offsetWidth;
  roleEl.classList.add("animate");

  currentIndex = (currentIndex + 1) % roles.length;
}

setInterval(updateRole, 3000);
updateRole();


document.querySelectorAll('.navlist a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


document.getElementById('contactForm').addEventListener('submit', function (e) {

  setTimeout(() => {
    this.reset();
  }, 100);

})