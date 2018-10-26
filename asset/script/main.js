// slide menu button 
function openSlideMenu(){
  document.getElementById('side-menu').style.width = '250px';
  document.getElementById('main').style.marginLeft = '250px';
}

function closeSlideMenu(){
  document.getElementById('side-menu').style.width = '0';
  
  document.getElementById('main').style.marginLeft = '0';
}







var slide = document.getElementsByClassName('clientbox');
index = 0;
for (j = 1; j < slide.length; j++) {
  slide[j].style.display = 'none';
}
function slides() {
    slide[index].style.display = 'none';
  
    index++;
    if (index > slide.length - 1) {
      index = 0
    }
    slide[index].style.display = 'block';
  };