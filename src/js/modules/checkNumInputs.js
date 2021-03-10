const checkNumInputs = (selector) => {
   const phoneInputs = document.querySelectorAll(selector);

   phoneInputs.forEach(input => {
      input.addEventListener('input', () => {
         input.value = input.value.replace(/\D/, "");
      });
   });
};

export default checkNumInputs;