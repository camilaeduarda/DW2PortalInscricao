
function openShowcase(screen) {
    document.querySelector('#showcase-container').innerHTML = screen
    document.querySelectorAll('.show-option').forEach(
        (e, i) => e.className = i === screen ? 'show-option active' : 'show-option'
        )
    document.querySelector('#showcase-container').style.display = 'block'
}

// window.onload = () => openShowcase(1) 