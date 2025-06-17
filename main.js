document.addEventListener('DOMContentLoaded', function() {
  const customModal = document.querySelector('.custom-modal');
  const customModalOpenBtns = document.querySelectorAll('.order-service-btn');
  const customModalCloseBtn = document.querySelector('.custom-modal_close-btn');
  const customModalForm = document.querySelector('.custom-modal_form');
  const userPrivacyCheckbox = document.getElementById('user-privacy');

  let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

  function openModal(e) {
    e.preventDefault();
    document.body.style.paddingRight = scrollbarWidth + 'px';
    document.body.classList.add('no-scroll');
    customModal.classList.add('is-open');
  }

  function closeModal() {
    customModal.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    document.body.style.paddingRight = '';
  }

  customModalOpenBtns.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  if (customModalCloseBtn) {
    customModalCloseBtn.addEventListener('click', closeModal);
  }

  customModal.addEventListener('click', function(e) {
    if (e.target === customModal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && customModal.classList.contains('is-open')) {
      closeModal();
    }
  });

  if (customModalForm) {
    customModalForm.addEventListener('submit', function(e) {
      e.preventDefault();
      closeModal();
    });
  }

  if (userPrivacyCheckbox) {
    userPrivacyCheckbox.addEventListener('change', function() {
      if (this.checked) {
        // действия при отметке чекбокса
      } else {
        // действия при снятии отметки
      }
    });
  }
});

