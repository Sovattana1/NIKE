// side bar

function showSidebar(){
    const sidebar = document.querySelector('.side-bar')
    sidebar.style.display = 'flex'
}

function closeSidebar () {
    const closebar = document.querySelector('.side-bar')
    closebar.style.display= 'none'
}

function toggleSidebar() {
    const sidebar = document.querySelector('.side-bar');
    // Toggle the display property
    sidebar.style.display = sidebar.style.display === 'flex' ? 'none' : 'flex';
}

// Attach this toggleSidebar function to the menu icon click event
const menuIcon = document.querySelector('.menu-icon');
// menuIcon.addEventListener('click', toggleSidebar);



// hover dropdown

// const newAndFeature = document.getElementById('');