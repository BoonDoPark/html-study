const onClickHandler = () => alert("버튼");
const interval = setInterval(() => {
  console.log("interval");
}, 1000);

const onClickStop = () => clearInterval(interval);

const onClickRemove = () => {
  const re = document.getElementById("hide");
  // null, undefined, NaN, 0    false
  if (re) return re.remove();
  const body = document.getElementsByTagName("body");
  const p = document.createElement("p");
  p.setAttribute("id", "hide");
  p.id = "hide";
  p.innerHTML = "asdasdasdasdad";
  body[0].append(p);
};
