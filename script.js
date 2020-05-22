var unicorn = document.getElementById("unicorn")
var block = document.getElementById("block")

function jump() {
    if(unicorn.classList != "animate") {
        unicorn.classList.add("animate")
    }
    setTimeout(function() {
        unicorn.classList.remove("animate")
    }, 500)
}


var checkDead = setInterval(function() {
    var unicornTop = parseInt(
        window.getComputedStyle(unicorn).getPropertyValue("top"))
    var blockLeft = parseInt(
        window.getComputedStyle(block).getPropertyValue("left"))

    if(blockLeft < 50 && blockLeft > 0 && unicornTop >= 130) {
        block.style.animation = "none"
        block.style.display = "none"

        alert("Unicorn always wins :P")
        location.reload();
    }
}, 10)
