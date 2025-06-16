document.addEventListener('DOMContentLoaded', function () {
  const customModal = document.querySelector('.custom-modal');
  const customModalOpenBtns = document.querySelectorAll('.order-service-btn');
  const customModalCloseBtn = document.querySelector('.custom-modal__close-btn');
  const customModalForm = document.querySelector('.custom-modal__form');

  function openModal(e) {
    e.preventDefault();

    // Вычисление ширины скроллбара
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollBarWidth}px`;

    customModal.classList.add('is-open');
    document.body.classList.add('no-scroll');
  }

  function closeModal() {
    customModal.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    document.body.style.paddingRight = ''; // Убираем компенсацию скроллбара
  }

  customModalOpenBtns.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  customModalCloseBtn.addEventListener('click', closeModal);

  customModal.addEventListener('click', function (e) {
    if (e.target === customModal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && customModal.classList.contains('is-open')) {
      closeModal();
    }
  });

  if (customModalForm) {
    customModalForm.addEventListener('submit', function (e) {
      e.preventDefault();
      closeModal();
    });
  }
});
