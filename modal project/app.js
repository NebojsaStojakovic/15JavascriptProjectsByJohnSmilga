const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', function() {
  modalOverlay.classList.add('open-modal');
})
closeBtn.addEventListener('click', function() {
  modalOverlay.classList.remove('open-modal');
})
