document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal-order');
  const openModalBtn = document.querySelector('.order-service-btn');
  const closeModalBtn = modal.querySelector('.modal-close');
  const form = modal.querySelector('.modal-form');

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

  if (openModalBtn) {
    openModalBtn.addEventListener('click', openModal);
  }

  closeModalBtn.addEventListener('click', closeModal);

  modal.addEventListener('mousedown', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  // Закрытие модалки после отправки формы
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
    closeModal();
  });
});
