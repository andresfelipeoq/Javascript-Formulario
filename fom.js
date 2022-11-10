var inputs = document.getElementsByClassName('formulario__input');
for (var i = 0; < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function(){
      if(this.value.length>=1) {
      this.nextEelementSibling.classList.add('fijar');
    } else {
      this.nextEelementSibling.classList.remove('fijar');
    }
  });
}