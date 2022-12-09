const elements = document.querySelectorAll('.container_element');

elements.forEach((container_element) => {
  container_element.addEventListener('click', () => {
    removeClassActive();
    container_element.classList.add('active');
  });
});

function removeClassActive() {
  elements.forEach((container_element) => {
    container_element.classList.remove('active');
  });
}
