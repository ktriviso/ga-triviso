function changeBackgroundColor(){
    const invertButton = document.getElementById("invert")
    invertButton.addEventListener('click', function(e){
        document.body.classList.toggle('invert-active')
    })
}

window.addEventListener('load', function(){
    changeBackgroundColor()
})
