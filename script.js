let x = 10
let y = 40
let faces = document.getElementsByClassName("face")
document.getElementById('cube').style.transform="rotateX("+x+"deg) rotateY("+y+"deg)"

for (let i=0; i < faces.length; i++){
  faces[i].style.backgroundColor = "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")
}

for (let i=0; i < faces.length; i++){
  let column = `<div class="column"><div class="piece"></div><div class="piece"></div><div class="piece"></div></div>`
  for (let j=0; j < 3; j++){
    faces[i].innerHTML += column
  }
}