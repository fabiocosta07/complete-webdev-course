document.querySelectorAll('.tag').forEach(e => {
    const tagName = e.tagName.toLowerCase()
    e.style.borderColor = '#616161'

    if (!e.classList.contains('nolabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = '#616161'
        label.innerHTML = tagName
        e.insertBefore(label, e.childNodes[0])
    }
})