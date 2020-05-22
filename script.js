var unicorn = document.getElementById("unicorn")
var block = document.getElementById("block")
var end = document.getElementById("end")

function jump() {
    if(unicorn.classList != "animate") {
        unicorn.classList.add("animate")
    }
    setTimeout(function() {
        unicorn.classList.remove("animate")
    }, 500)
}

function restart() {
    location.reload();
}


var checkDead = setInterval(function() {
    var unicornTop = parseInt(
        window.getComputedStyle(unicorn).getPropertyValue("top"))
    var blockLeft = parseInt(
        window.getComputedStyle(block).getPropertyValue("left"))

    if(blockLeft < 50 && blockLeft > 0 && unicornTop >= 130) {
        block.style.animation = "none"
        block.style.display = "none"
        end.classList.add("visible")
    }
}, 10)
