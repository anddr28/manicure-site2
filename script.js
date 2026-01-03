function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToContacts() {
  document.getElementById('contacts')
    .scrollIntoView({ behavior: 'smooth' });
}
