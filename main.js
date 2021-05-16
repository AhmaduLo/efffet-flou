let allBoxs = Array.from(document.querySelectorAll(".box"));

let currentIndex = 0;

allBoxs.forEach((box) => {
  box.addEventListener("mouseenter", (e) => {
    const el = e.target; // l'element que je survol

    currentIndex = allBoxs.indexOf(el); //index/nmro de l'element que je vient de survole

    // si L'index de l'element que je survol est = à cuurentIndex donc il ne sera pas floutè  si l'index est different ils sont floute
    allBoxs.forEach((box, index) => {
      if (index === currentIndex) return;
      box.classList.add("flou");
    });
  });

  box.addEventListener("mouseout", (e) => {
    allBoxs.forEach((box, index) => {
      if (index === currentIndex) return;
      box.classList.remove("flou");
    });
  });
});
