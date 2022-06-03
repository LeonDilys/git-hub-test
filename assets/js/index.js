//slider
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    loop:true,


    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//hero click
  function handleClickImage(event) {
    const imageKeyAttr = event.getAttribute("image-key");
    const bigImageUrl = `imgpost/hero/herobg${imageKeyAttr}.png`;
    const bigImageElement = document.getElementById("big-image");
    if (bigImageElement) {
      bigImageElement.setAttribute("src", bigImageUrl);
    }
  }
  let list = document.querySelectorAll('.control-item img ');
    function activeLink(){
        list.forEach((item)=>
        item.classList.remove('active'));
        this.classList.add('active');
    }
    list.forEach((item)=>
    item.addEventListener('click',activeLink))