function toggleDialog() {

}

function toggleClass() {
  
}

function toggleFormPlaceholder() {

}

function getFormLabel(input) {
  return input.parentElement.querySelector('label')
}

var openButton = document.querySelector('a.button');
var closeButton = document.querySelector('.close-modal');
var inputs = document.querySelectorAll('input, textarea');
var modalContact = document.querySelector('#contact-us');
var contactUsSubmit = document.querySelector('#contact-us form');


openButton.addEventListener('click', function() {
  modalContact.classList.add('modal__open')
})

closeButton.addEventListener('click', function() {
  modalContact.classList.remove('modal__open')
})

modalContact.addEventListener('click', function(e) {
  if (e.target.id == "contact-us") {
    modalContact.classList.remove('modal__open')
  }
})

contactUsSubmit.addEventListener('submit',function(e) {
  var contactProgress = document.querySelector('#contact-us .progress');
  contactProgress.classList.add('progress__open');
  setTimeout(startSending,2000)
  e.preventDefault();
})


// animation for input label
inputs.forEach(function(input) {
  input.addEventListener('focus', function() {
    var label = getFormLabel(input)
    label.classList.add("active")
    this.classList.add("active")
    this.setAttribute("data-placeholder",this.getAttribute('placeholder'))
    this.removeAttribute("placeholder")
  });
})

inputs.forEach(function(input) {
  input.addEventListener('blur', function() {
    var label = getFormLabel(input)
    if(label.classList.contains('active') && !this.value) {
      label.classList.remove('active')
      this.classList.remove('active')
      this.setAttribute("placeholder",this.getAttribute('data-placeholder'))
    }
  });
})

function startSending() {
  var envelope = document.querySelector('.flying-envelope');
  envelope.style.display = "block";
  var path = anime.path('.envelope-path path');

  anime({
    targets: '.flying-envelope',
    translateX: path('x'),
    translateY: path('y'),
    rotate: path('angle'),
    easing: 'linear',
    duration: 10000,
    loop: true
  });
}