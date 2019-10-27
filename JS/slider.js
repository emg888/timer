//number value
var slider = document.getElementById("myinput");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

//slider function 
slider.oninput = function slide () {
  output.innerHTML = this.value;
  this.style.background = 'linear-gradient(to right, white 0%, white ' + this.value + '%, black ' + this.value + '%, black 100%)';
  return oninput;
}

//power on/off
function turnOnOff(){
  currentvalue = document.getElementById('demo');
  if(output.innerHTML === slider.value || output.innerHTML === clicks.value){
    currentvalue.innerHTML = "8888";
  }else{
    currentvalue.innerHTML = "50";
  }
}

// toggle hrs / min
function toggle() {
  var tog = document.getElementById("min");
  if (tog.innerHTML === "MIN") {
    tog.innerHTML = "HRS";
  } else {
    tog.innerHTML = "MIN";
  };
}

//click buttons up and down
var clicks =  document.getElementById("demo").innerHTML;
function down(){
  clicks --;
  document.getElementById("demo").innerHTML = clicks;
}
function up(){
  clicks ++;
  document.getElementById("demo").innerHTML = clicks;
}

