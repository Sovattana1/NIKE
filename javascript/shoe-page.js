function toggleFilter(){
    const filterContent = document.getElementById('filter-content');
    const filterBtn = document.getElementById('filter-btn');
    const shoeContainer = document.querySelector('.shoe-container')
    if (filterContent.classList.contains('hidden-filter')){
        filterContent.classList.remove('hidden-filter');
        filterBtn.textContent= 'Hide Filter';
        shoeContainer.classList.remove('active');
    } else {
        filterContent.classList.add('hidden-filter');
        filterBtn.textContent= 'Show Filter'
        shoeContainer.classList.add('active');
    }
}


var coll = document.getElementsByClassName("collapsible-1");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

