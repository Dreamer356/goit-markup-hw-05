const modal = document.getElementById('modal-order');
const openModalBtn = document.querySelector('.order-service-btn');
const closeModalBtn = modal.querySelector('.modal-close');
function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}
function openModal(e) {
  if (e) e.preventDefault();
  modal.classList.add('is-open');
  modal.classList.remove('is-hidden');
  const scrollBarWidth = getScrollbarWidth();
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = scrollBarWidth + 'px';
}
function closeModal(e) {
  if (e) e.preventDefault();
  modal.classList.remove('is-open');
  modal.classList.add('is-hidden');
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
}
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('mousedown', function (e) {
  if (e.target === modal) {
    closeModal();
  }
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && modal.classList.contains('is-open')) {
    closeModal();
  }
});

