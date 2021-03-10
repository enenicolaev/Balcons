import validateCalcForm from "./validateCalcForm";
import { modalState } from "../main";



function openModal(modal, timer) {

   function calcScrollIndent() {
      const div = document.createElement("div");
   
      div.style.width = "50px";
      div.style.height = "50px";
      div.style.overflowY = "scroll";
      div.style.visibility = "hidden";
   
      document.body.appendChild(div);
      let scroll = div.offsetWidth - div.clientWidth;
   
      div.remove();

      return scroll;
   }


   modal = document.querySelector(modal);

   modal.style.display = "block";
   document.body.style.overflow = "hidden";
   document.body.style.marginRight = `${calcScrollIndent}px`;
   clearInterval(timer);
};

function closeModal(modal) {
   modal = document.querySelector(modal);

   modal.style.display = "none";
   document.body.style.overflow = "";
   document.body.style.marginRight = `0px`;
}

function closeAllModals(modalsArray) {
   modalsArray.forEach(item => {
      item.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
   })
};



function modal(triggerSelector, modalSelector, closeSelector, timerModal, closeAbility = true) {

   const triggers = document.querySelectorAll(triggerSelector),
         modal = document.querySelector(modalSelector),
         closeBtn = document.querySelector(closeSelector);

   // object with all Modal Selector's

   const modalsArray = document.querySelectorAll("[data-modal]");

   
   function bindOpenTriggers() {
      triggers.forEach(item => {
         item.addEventListener("click", (e) => {
            e.preventDefault();

            // validate calc Modals 
            switch (modalSelector) {
               case ".popup_calc_profile":
                  if (validateCalcForm(item, modalState, "form", "width", "height")) {
                     closeAllModals(modalsArray);
                     openModal(modalSelector, timerModal);
                  }
                  break;

               case ".popup_calc_end":
                  if (validateCalcForm(item, modalState, "form", "width", "height", "profile", "type")) {
                     closeAllModals(modalsArray);
                     openModal(modalSelector, timerModal);
                  }
                  break;

               default:
                  closeAllModals(modalsArray);
                  openModal(modalSelector, timerModal);
                  break;
            }

         })
      })
   };

   function bindCloseTriggers() {
      modal.addEventListener("click", (e) => {
         if (e.target && e.target === modal && closeAbility) {
            closeModal(modalSelector);
            closeAllModals(modalsArray);
         }
      });

      closeBtn.addEventListener("click", () => {
         closeModal(modalSelector);
         closeAllModals(modalsArray);
      })
   };



   bindOpenTriggers();
   bindCloseTriggers();

};

export default modal;

export { openModal, closeModal, closeAllModals };