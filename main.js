const navLink = document.querySelectorAll('.menu-items li');
const toggle = document.getElementById('toggle');

function linkAction() {
  toggle.checked = false;
}

navLink.forEach(n => n.addEventListener('click', linkAction));