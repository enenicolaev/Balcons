import "./slider";
import modal from "./modules/modal";
import { openModal, closeModal, closeAllModals } from "./modules/modal";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";
import imgModal from "./modules/imgModal";



// object with data from user
const modalState = {
   form: 0, // default 
   type: "tree" // params
};






document.addEventListener("DOMContentLoaded", () => {
   "use strict"

   const timerModal = setInterval(() => {
      openModal(".popup_engineer", timerModal);
   }, 6000000);

   const deadline = "2020-12-31"

   

   // request phone
   modal(".phone_link", ".popup", ".popup_close", timerModal);

   // request engineer 
   modal(".popup_engineer_btn", ".popup_engineer", ".popup_engineer .popup_close", timerModal);

   // modal calc
   modal(".popup_calc_btn", ".popup_calc", ".popup_calc_close", timerModal, true);
   modal(".popup_calc_button", ".popup_calc_profile", ".popup_calc_profile_close", timerModal, false);
   modal(".popup_calc_profile_button", ".popup_calc_end", ".popup_calc_end_close", timerModal, false);


   tabs(".glazing_block", ".glazing_content", "block", "active");
   tabs(".decoration_item", ".decoration_content > .row > div", "block", "active", "after_click");

   // tavs for calc modal
   tabs(".balcon_icons_img", ".big_img > img", "inline-block", "do_image_more");


   forms('form', 'input', modalState);

   changeModalState(modalState);

   // timer
   timer(".container1", deadline)


   // modal Img
   imgModal(".works")
});


export { modalState };
