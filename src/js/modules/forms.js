import checkNumInputs from "./checkNumInputs";


function forms(formSelector, inputSelector, data) {

   const formsArray = document.querySelectorAll(formSelector),
         inputs = document.querySelectorAll(inputSelector);

   const messages = {
      success: "Спасибо! Мы скоро с вами свяжемся",
      loading: "Загрузка...",
      fail: "Ошибка отправки запроса"
   };


   checkNumInputs(`${inputSelector}[name="user_phone"]`)
   


   function formsAddListener() {
      formsArray.forEach(item => {
         item.addEventListener("submit", (e) => {
            e.preventDefault();

            let statusMessage = document.createElement("div");
            statusMessage.classList.add("status");
            item.appendChild(statusMessage);

            
            const formData = new FormData(item);
            if (item.getAttribute("data-calc") === "end") {
               for (let key in data) {
                  formData.append(key, data[key])
               };
            }

            postData("assets/server.php", formData)
               .then(res => {
                  console.log(res);
                  statusMessage.textContent = messages.success;
                  //document.querySelector(".status").textContent = messages.success;
               })
               .catch(() => {
                  statusMessage.textContent = messages.fail;
                  //document.querySelector(".status").textContent = messages.fail;
               })
               .finally(() => {
                  clearinputs();
                  setTimeout(() => {
                     statusMessage.remove();
                  }, 3000);
                  data = {};
                  console.log(data);
               })

         })
      })
   }

   async function postData(url, data) {
      document.querySelector(".status").textContent = messages.loading;

      let res = await fetch(url, {
         method: "POST",
         body: data
      });

      return await res.text();
   };

   function clearinputs() {
      inputs.forEach(input => {
         input.value = "";
      })
   }

   formsAddListener();

}


export default forms;