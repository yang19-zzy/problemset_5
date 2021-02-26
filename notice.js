setInterval(function() {
  const myColor = document.getElementById("notice");
  let className = myColor.getAttribute("class");
  if (className === "color1") {
    myColor.setAttribute("class","color2");
  } else {
    myColor.setAttribute("class","color1");
  }
}, 2000);




let numItems = document.getElementById("num-items");
let total = document.getElementById("total");
// console.log("numItems",numItems.textContent);
const switch_ = document.getElementById("switch");
const ringfit = document.getElementById("fit-ring");


function calculateTotal(a,b) {
  return "$" + Math.round(a*78.80 + b*298.80);
};


// ringfit
let ringfitNum = document.getElementById("ringfit-num");
const addbtn_ringfit = document.getElementById("ringfit-add");
const minusbtn_ringfit = document.getElementById("ringfit-minus");
addbtn_ringfit.addEventListener("click",()=>{
  let i = parseInt(ringfitNum.textContent);
  ringfitNum.textContent = i+1;
  console.log("ringfitNum",ringfitNum.textContent);
  let x = parseInt(ringfitNum.textContent);
  let y = parseInt(switchNum.textContent);
  numItems.innerText =  x + y;
  total.innerText = calculateTotal(x, y);
});
minusbtn_ringfit.addEventListener("click",()=>{
  let i = parseInt(ringfitNum.textContent);
  if (i > 1) {
    ringfitNum.textContent = i-1;
  } else {
    ringfitNum.textContent = 0;
  };
  let x = parseInt(ringfitNum.textContent);
  let y = parseInt(switchNum.textContent);
  numItems.innerText =  x + y;
  total.innerText = calculateTotal(x, y);
  // numItems.innerText = parseInt(ringfitNum.textContent) + parseInt(switchNum.textContent);
});

// switch
let switchNum = document.getElementById("switch-num");

const addbtn_switch= document.getElementById("switch-add");
const minusbtn_switch = document.getElementById("switch-minus");
addbtn_switch.addEventListener("click",()=>{
  let i = parseInt(switchNum.textContent);
  switchNum.textContent = i+1;
  console.log("switchNum",switchNum.textContent);
  // numItems.innerText = parseInt(ringfitNum.textContent) + parseInt(switchNum.textContent);
  let x = parseInt(ringfitNum.textContent);
  let y = parseInt(switchNum.textContent);
  numItems.innerText =  x + y;
  total.innerText = calculateTotal(x, y);
});
minusbtn_switch.addEventListener("click",()=>{
  let i = parseInt(switchNum.textContent);
  if (i > 1) {
    switchNum.textContent = i-1;
  } else {
    switchNum.textContent = 0;
  };
  // numItems.innerText = parseInt(ringfitNum.textContent) + parseInt(switchNum.textContent);
  let x = parseInt(ringfitNum.textContent);
  let y = parseInt(switchNum.textContent);
  numItems.innerText =  x + y;
  total.innerText = calculateTotal(x, y);
});


// close notice
let myNotice = document.getElementById("notice");

myNotice.addEventListener("click", (event)=>{
  console.log('notice clicked')
  console.log("target id:", event.target.id);
  if (event.target.id === "close"){
    console.log(myNotice);
    myNotice.style.display = "none";
  };
});


function popup(form) {
  window.open('', 'formpopup', 'width=400,height=200');
  form.target = 'formpopup';
  document.getElementById("message").value = "";
}




let promotionDate = moment("2021-03-01 00:00:00");
// console.log(promotionDate);
var now = moment();
var diff = "Only " + promotionDate.diff(now, 'days') + " days away!!!";
// console.log(diff);

document.getElementById("promotion").textContent = "Final Sale!!! " + diff;
