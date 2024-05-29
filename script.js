const d = document;

console.groupCollapsed("Reference: ")
console.log("img-1 ->", "https://wallhaven.cc/w/2k2gy9");
console.log("img-2 ->", "https://wallhaven.cc/w/396lmd");
console.log("img-3 ->", "https://wallhaven.cc/w/9mgjq1");
console.log("img-4 ->", "https://wallhaven.cc/w/0wv5xx");
console.groupEnd();


d.addEventListener("click", e => {
  if (e.target.matches("input[type=radio]")) {
    let $valorHermano = e.target.nextElementSibling.textContent,
    $main = d.querySelector("main");
    $main.style.backgroundImage = `url('assets/fotos_with_reference_AVIF/img-${$valorHermano}.avif')`;
  }
})