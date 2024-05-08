
function toggleChange() {
    const countriesList = document.getElementById('countriesList');
    countriesList.style.display = countriesList.style.display === 'none' ? 'block' : 'none';
}


function toggleSelected(element) {
    element.classList.toggle('selected');
}
