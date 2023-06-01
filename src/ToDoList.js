// body.style.backgroundColor="red"

// iconstarfull.forEach((item) => {
//   item.addEventListener("click", (eo) => {
//     eo.target.classList.toggle("mycolor");
//   });
// });

// mybin.forEach((item) => {
//   item.addEventListener("click", (eo) => {
//     eo.target.parentNode.parentNode.classList.add("mydisplay");
//   });
// });

// angry.forEach((item) => {
//   item.addEventListener("click", (eo) => {
// const heart = document.querySelectorAll(".icon-heart");

// eo.target.classList.add("mydisplay");
// heart.classList.add("mydisplayb");
// .parentNode.querySelector(".icon-heart")
//   });
// });
//
const upload = document.querySelector(".icon-upload2");
const mytasks = document.querySelector(".mytasks");

upload.addEventListener("click", (eo) => {
  const mynewtask = `
    <div class="task">
        <span class="icon-star-full icon"></span>
        <p lang="ar"  class="ptext"> ${myinput.value} </p>  
       <div class="myspans">
         <span class="icon-bin icon"></span>
         <span class="icon-angry2 icon"></span>
       </div>
      </div>
    `;
  mytasks.innerHTML += mynewtask;
  myinput.value = "";
});

// mytasks.addEventListener("click", (eo) => {
//   if(eo.target.className == "icon-bin icon") {
//     eo.target.parentNode.parentNode.remove();
//   }

//   else if(eo.target.className == "icon-angry2 icon") {
//     eo.target.parentNode.parentNode.getElementsByClassName("ptext")[0].classList.add("pee");
//     eo.target.classList.add("dn");
//     const myheart =`<span class="icon-heart icon"></span>`;
//         eo.target.parentNode.innerHTML += myheart;
//   }

//    else if(eo.target.className == "icon-heart icon"){
//     eo.target.parentNode.parentNode.getElementsByClassName("ptext")[0].classList.remove("pee");
//     eo.target.classList.add("dn");
//     const myangry =`<span class="icon-angry2 icon"></span>`;
//         eo.target.parentNode.innerHTML += myangry;
//   }

//   else if (eo.target.classList == "icon-star-full icon") {
//     eo.target.classList.add("mycolor");

//   mytasks.prepend(eo.target.parentNode)
//     }

// else if(eo.target.classList == "icon-star-full icon mycolor"){
//   eo.target.classList.remove("mycolor");

// }
// });

mytasks.addEventListener("click", (eo) => {
  switch (eo.target.className) {
    case "icon-bin icon":
      eo.target.parentNode.parentNode.remove();
      break;

    case "icon-angry2 icon":
      eo.target.parentNode.parentNode
        .getElementsByClassName("ptext")[0]
        .classList.add("pee");
      eo.target.classList.add("dn");
      const myheart = `<span class="icon-heart icon"></span>`;
      eo.target.parentNode.innerHTML += myheart;
      break;

    case "icon-heart icon":
      eo.target.parentNode.parentNode
        .getElementsByClassName("ptext")[0]
        .classList.remove("pee");
      eo.target.classList.add("dn");
      const myangry = `<span class="icon-angry2 icon"></span>`;
      eo.target.parentNode.innerHTML += myangry;
      break;

    case "icon-star-full icon":
      eo.target.classList.add("mycolor");
      mytasks.prepend(eo.target.parentNode);
      break;

    case "icon-star-full icon mycolor":
      eo.target.classList.remove("mycolor");

      break;

    default:
      break;
  }
});
