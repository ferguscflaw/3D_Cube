let x = 10
let y = 40
let left;
let right;
let down;
let up;
let left_key = false
let right_key = false
let up_key = false
let down_key = false
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


document.body.addEventListener("keydown", function(e){
  if (e.keyCode == '37' && left_key == false){
    left = setInterval(function(){y-=5;document.getElementById('cube').style.transform="rotateX("+x+"deg) rotateY("+y+"deg)";}, 20)
    left_key = true
  }
  else if (e.keyCode == '39' && right_key == false){
    right = setInterval(function(){y+=5;document.getElementById('cube').style.transform="rotateX("+x+"deg) rotateY("+y+"deg)"}, 20)
    right_key = true
  }
  else if (e.keyCode == '38' && up_key == false){
    up = setInterval(function(){x+=5;document.getElementById('cube').style.transform="rotateX("+x+"deg) rotateY("+y+"deg)"}, 20)
    up_key = true
  }
  else if (e.keyCode == '40' && down_key == false){
    down = setInterval(function(){x-=5;document.getElementById('cube').style.transform="rotateX("+x+"deg) rotateY("+y+"deg)"}, 20)
    down_key = true
  }
}, false)
  
document.body.addEventListener("keyup", function(e){
  if (e.keyCode == '37'){
    clearInterval(left)
    left_key = false
  }
  else if (e.keyCode == '39'){
    clearInterval(right)
    right_key = false
  }
  else if (e.keyCode == '38'){
    clearInterval(up)
    up_key = false
  }
  else if (e.keyCode == '40'){
    clearInterval(down)
    down_key = false
  }
}, false)