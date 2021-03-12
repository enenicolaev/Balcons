function timer(selector, deadline) {

   function getTimeRemaining(endtime) {
      const time = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((time / 1000)  % 60),
            minutes = Math.floor((time / 1000 / 60)  % 60),
            hours = Math.floor((time / 1000 / 60 / 60)  % 24),
            days = Math.floor(time / 1000 / 60 / 60 / 24);

      return {
         "total": time,
         "seconds": seconds,
         "minutes": minutes,
         "hours": hours,
         "days": days,
      };
   };


   function setClock(selector, endtime) {
      const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector("#hours"),
            minutes = timer.querySelector("#minutes"),
            seconds = timer.querySelector("#seconds"),
            timeInterval  = setInterval(updateClock, 1000);
      
      updateClock();
      
      function updateClock() {
         const time = getTimeRemaining(endtime);

         if (time.total <= 0) {
            days.textContent = "00";
            hours.textContent = "00";
            minutes.textContent = "00";
            seconds.textContent = "00";

            clearInterval(timeInterval);
         } else {
            days.textContent = addZeroToClock(time.days);
            hours.textContent = addZeroToClock(time.hours);
            minutes.textContent = addZeroToClock(time.minutes);
            seconds.textContent = addZeroToClock(time.seconds);
         }
      }

   };


   function addZeroToClock(num) {
      if (num < 9) {
         return "0" + num
      } else {
         return num
      }
   };


   setClock(selector, deadline);
};


export default timer;