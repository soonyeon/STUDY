// const output = document.getElementById("output")
// const wrapoer = document.getElementsByClassName("wrapper")

const button = document.querySelector("#button")
const wrapoer = document.querySelector(".wrapper")
const items = document.querySelectorAll(".item")
const target = document.querySelector(".target")
const title = document.querySelector("h1")
const userID = document.querySelector("#userID")
const point = document.querySelector(".point")

title.addEventListener("click",function(){
  title.style.color = "red"
});
userID.addEventListener("input",function(e){
  target.innerText = this.value; 
})
button.addEventListener("click",()=>{
  target.style.width = "50px"
  target.style.height = "50px"
  target.style.backgroundColor = userID.value;
  target.style.borderRadius = "50%"
});

items.forEach(item => {
  item.addEventListener("click",()=>{
      point.innerHTML = item.innerText
  })
})

