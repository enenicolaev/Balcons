

function tabs(tabsSelector, tabsContentSelector, display, ...activeClass) {

   const tabs = document.querySelectorAll(tabsSelector),
         tabsContent = document.querySelectorAll(tabsContentSelector);
   
   
   function tabsTriggers() {
      tabs.forEach((tab, tabIndex) => [
         tab.addEventListener("click", (e) => {
            e.preventDefault();

            showAndHideTabsContent(tabIndex);
            addActiveClassTabs(tabIndex);
         })
      ])
   }

   function showAndHideTabsContent(tabIndex) {
      tabsContent.forEach((item, i) => {
         item.style.display = "none";
         if (i == tabIndex) {
            item.style.display = display;
         }
      })

   };

   function addActiveClassTabs(tabIndex) {

      //activ class for links
      if (activeClass[0]) {
         tabs.forEach((tab, i) => {
            if (tab.querySelector("a")) {
               tab.querySelector("a").classList.remove(activeClass[0]);
               if (i === tabIndex) {
                  tab.querySelector("a").classList.add(activeClass[0]);
               }
            } else {
               tab.classList.remove(activeClass[0]);
               if (i === tabIndex) {
                  tab.classList.add(activeClass[0]);
               }
            }

         })
      };

      //active class for block (blue slider)
      if (activeClass[1]) {
         tabs.forEach((tab, i) => {
            tab.querySelector("div").classList.remove(activeClass[1]);
            if (i === tabIndex) {
               tab.querySelector("div").classList.add(activeClass[1]);
            }
         })
      };
   }

   tabsTriggers();
   showAndHideTabsContent(0);
   addActiveClassTabs(0);
};


export default tabs;