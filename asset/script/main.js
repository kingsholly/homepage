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
  }