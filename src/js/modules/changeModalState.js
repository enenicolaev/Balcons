import checkNumInputs from "./checkNumInputs";


const changeModalState = (state) => {
   const windowForm = document.querySelectorAll(".balcon_icons_img"),
         windowWidth = document.querySelectorAll("#width"),
         windowHeight = document.querySelectorAll("#height"),
         windowType = document.querySelectorAll("#view_type"),
         windowProfile = document.querySelectorAll(".checkbox");

   checkNumInputs("#width");
   checkNumInputs("#height");

   function takeDataFromElem(event, elem, prop) {
      elem.forEach((item, i) => {
         item.addEventListener(event, () => {
            switch (item.nodeName) {
               
               case "SPAN":
                  state[prop] = i;
                  break;
               
               case "INPUT":
                  if (item.getAttribute("type") == "checkbox") {
                     elem.forEach((box, j) => {
                        box.checked = false;
                        if (i === j) {
                           box.checked = true;
                        }
                     });
                     i === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";
                  } else if (item.getAttribute("id") == "width") {
                     state[prop] = item.value;
                  } else if (item.getAttribute("id") == "height") {
                     state[prop] = item.value;
                  };
            
                  break;
               
               case "SELECT":
                  state[prop] = item.value;
                  break;

            }

            console.log(state);
         })
      })
   };

   takeDataFromElem("click", windowForm, "form");
   takeDataFromElem("input", windowWidth, "width");
   takeDataFromElem("input", windowHeight, "height");
   takeDataFromElem("change", windowType, "type");  // Событие change для Checkbox'a
   takeDataFromElem("change", windowProfile, "profile");  

}


export default changeModalState;