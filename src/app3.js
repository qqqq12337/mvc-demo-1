import "./app3.css"
import $ from "jquery"

let position = parseInt(localStorage.getItem("position")) || 0
let square = $(".app3 .square")
if (position === 1){
   square.addClass("active")
}
square.on("click", ()=>{
   position = 1 ^ position
   localStorage.setItem("position", position + "")
   square.toggleClass("active")
})