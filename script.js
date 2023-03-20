
let oldScreen = null


function openShowcase(screen) {

    if (oldScreen == screen) {
        document.querySelector('#showcase-container').innerHTML = ''
        document.querySelectorAll('.show-option').forEach(
            (e, i) => e.className = 'show-option'
        )
        document.querySelector('#showcase-container').style.display = 'none'
    } else {
        document.querySelector('#showcase-container').innerHTML = document.querySelector(`#screen-${screen}`).innerHTML
        document.querySelectorAll('.show-option').forEach(
            (e, i) => e.className = i === screen ? 'show-option active' : 'show-option'
        )
        document.querySelector('#showcase-container').style.display = 'block'
    }

    oldScreen = screen
}


// window.onload = () => openShowcase(3)