var small = document.getElementById("s");
var medium = document.getElementById("m");
var large = document.getElementById("l");
var value = document.getElementById("price");

small.onclick = function(){
  value.innerHTML = '€35';
  small.classList.add("active");
  medium.classList.remove("active");
  large.classList.remove("active");
}

medium.onclick = function(){
  value.innerHTML = '€45';
  small.classList.remove("active");
  medium.classList.add("active");
  large.classList.remove("active");
}

large.onclick = function(){
  value.innerHTML = '€65';
  small.classList.remove("active");
  medium.classList.remove("active");
  large.classList.add("active");
}
