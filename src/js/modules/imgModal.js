
function imgModal(imgParentSelecor) {
   const parentElem = document.querySelector(imgParentSelecor),
         imgPopup = document.createElement("div"),
         imgBlock = document.createElement("img");
   
   imgBlock.classList.add("img-modal");

   parentElem.append(imgPopup);

   imgPopup.classList.add("popup");
   imgPopup.append(imgBlock);

   imgPopup.style.justifyContent = "center";
   imgPopup.style.alignItems = "center";
   imgPopup.style.display = "none";

   parentElem.addEventListener("click", (e) => {
      e.preventDefault();

      if (e.target && e.target.classList.contains("preview")) {
         const path = e.target.parentNode.getAttribute("href");
         imgPopup.style.display = "flex";
         document.body.style.overflow = "hidden";
         imgBlock.setAttribute("src", path);
      }

      if (e.target && e.target.matches("div.popup")) {
         imgPopup.style.display = "none";
         document.body.style.overflow = "";
         imgBlock.setAttribute("src", "");
      }
   });
}


export default imgModal;