export function visClear() {
  document.querySelectorAll(".step").forEach(s => {
    s.classList.remove("active");
    s.classList.remove("fail");
  });
}

export function visOn(id) {
  document.getElementById(id).classList.add("active");
}

export function visFail(id) {
  document.getElementById(id).classList.add("fail");
}

