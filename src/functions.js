export const scroll = () => {
  var divs = document.querySelectorAll(".lista-chat > div");
  var height = 0;
  divs.forEach(div => {
    height += div.clientHeight;
  });
  document.querySelector(".lista-chat").scrollTo(0, height);
}