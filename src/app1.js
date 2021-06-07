import "./app1.css"
import $ from 'jquery'

let localNumber = parseInt(localStorage.getItem('number') || 100)
$(".number").text(localNumber)
let button = $(".app1 button")
button.eq(0).on("click",()=>{
    localNumber += 1
    $(".number").text(localNumber)
    localStorage.setItem('number',localNumber)
})
button.eq(1).on("click",()=>{
    localNumber -= 1
    $(".number").text(localNumber)
    localStorage.setItem('number',localNumber)
})
button.eq(2).on("click",()=>{
    localNumber *= 2
    $(".number").text(localNumber)
    localStorage.setItem('number',localNumber)
})
button.eq(3).on("click",()=>{
    localNumber /= 2
    $(".number").text(localNumber)
    localStorage.setItem('number',localNumber)
})