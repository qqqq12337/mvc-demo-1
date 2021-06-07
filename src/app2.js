import "./app2.css"
import $ from "jquery"

let checkedId = parseInt(localStorage.getItem("checkedId")) || 0
let checked = $(".app2 .tab-bar li")
checked.eq(checkedId).addClass("checked")
$(".app2 .tab-content li").eq(checkedId).addClass("active")
checked.on("click", (e) => {
    let index = $(e.currentTarget).index()
    localStorage.setItem("checkedId", index)
    $(".app2 li").removeClass()
    $(e.currentTarget).addClass("checked")
    $(".app2 .tab-content li").eq(index).addClass("active")
})