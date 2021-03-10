

const validateCalcForm = (submitSelector, data, ...arrayRequiredParams) => {
   const message = document.createElement("div"),
         parentElem = submitSelector.parentElement;
   let status = false;

   message.textContent = "Введите недостающие данные";
   message.classList.add("status");


   arrayRequiredParams.forEach(prop => {
      if (!data[prop]) {
         if (!parentElem.lastElementChild.isEqualNode(message)) {
            parentElem.append(message);
         }
      } else {
         status = true;
      }
   })

   return status;

};


export default validateCalcForm;