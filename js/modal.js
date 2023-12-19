(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    body: document.body,
  };

  refs.openModalBtn.addEventListener("click", closeModal);
  refs.closeModalBtn.addEventListener("click", closeModal);

  function closeModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();
