const refs = {
  openModal: document.querySelector("[data-modal-open]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  modal: document.querySelector("[data-modal]"),
};

const onEscPress = (event) => {
  if (event.code === "Escape") {
    onCloseModal();
    window.removeEventListener("keydown", onEscPress);
  }
};

const onOpenModal = () => {
  refs.modal.classList.remove("is-hidden");
  document.body.style.overflow = "hidden";
  window.addEventListener("keydown", onEscPress);
};

const onCloseModal = () => {
  refs.modal.classList.add("is-hidden");
  document.body.style.overflow = "scroll";
  window.removeEventListener("keydown", onEscPress);
};

const onBackdropClose = (event) => {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
};

refs.openModal.addEventListener("click", onOpenModal);
refs.closeModalBtn.addEventListener("click", onCloseModal);
refs.modal.addEventListener("click", onBackdropClose);
