// Navbar toggle
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  links.classList.toggle('show');
}

// Any other JavaScript can go here
// Example: Fullscreen iframe button
function openFullscreen() {
  const container = document.getElementById("docContainer");
  if (container.requestFullscreen) {
    container.requestFullscreen();
  } else if (container.webkitRequestFullscreen) { /* Safari */
    container.webkitRequestFullscreen();
  } else if (container.msRequestFullscreen) { /* IE11 */
    container.msRequestFullscreen();
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}

function toggleMenu() {
  const links = document.querySelector('.nav-links');
  links.classList.toggle('show');
  
  // Lock/unlock background scrolling
  document.body.classList.toggle('no-scroll');
  
  const navLinks = document.getElementById('navLinks');

function openNav() {
  navLinks.classList.add('show');
  document.body.classList.add('no-scroll'); // prevent background scrolling
}

function closeNav() {
  navLinks.classList.remove('show');
  document.body.classList.remove('no-scroll'); // allow background scrolling again
}
}