document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion-item");
  
    accordionItems.forEach((item) => {
      const accordionBox = item.querySelector(".accordion-box");
      const accordionContent = item.querySelector(".accordion-content");
      const arrow = item.querySelector(".arrow");
  
      accordionBox.addEventListener("click", function () {
        accordionContent.classList.toggle("show");
        arrow.classList.toggle("rotate-arrow");
      });
  
      
      arrow.addEventListener("click", function (event) {
        event.stopPropagation();
        accordionContent.classList.toggle("show");
        arrow.classList.toggle("rotate-arrow");
      });
    });
  });
  
