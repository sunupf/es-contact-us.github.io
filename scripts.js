function toggleDialog() {

}

var button = document.querySelector('a.button');
var inputs = document.querySelectorAll('input, textarea');

button.addEventListener('click', function() {

})


// animation for input label
inputs.forEach(function(input) {
  input.addEventListener('focus', function() {
    var label = this.parentElement.querySelector('label')
    label.classList.add("active")
    this.classList.add("active")
    this.setAttribute("data-placeholder",this.getAttribute('placeholder'))
    this.removeAttribute("placeholder")
  });
})

inputs.forEach(function(input) {
  input.addEventListener('blur', function() {
    var label = this.parentElement.querySelector('label')
    if(label.classList.contains('active') && !this.value) {
      label.classList.remove('active')
      this.classList.remove('active')
      this.setAttribute("placeholder",this.getAttribute('data-placeholder'))
    }
  });
})