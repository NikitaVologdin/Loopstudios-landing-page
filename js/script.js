const openMenuButton = document.getElementById("openMenu");
const dialog = document.getElementById("dialog");
const closeMenuButton = document.getElementById("closeMenu");

function openMenuHandler() {
  dialog.showModal();
}

function closeMenuHandler() {
  dialog.close();
}

openMenuButton.addEventListener("click", openMenuHandler);
closeMenuButton.addEventListener("click", closeMenuHandler);
