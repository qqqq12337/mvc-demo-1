import "./app4.css"
import $ from "jquery"

let circular = $(".app4 .circular")
circular.on("mouseover", ()=>{
    circular.addClass("active")
}).on("mouseout",()=>{
    circular.removeClass("active")
})