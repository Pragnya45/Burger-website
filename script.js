let buttons = document.querySelectorAll('.mainBtn');

buttons.forEach((btn) => {
  let mbtn = btn.previousElementSibling;
  let pbtn = btn.nextElementSibling;

  btn.addEventListener("click", ()=>{
    if(btn.innerText == 'Add to Cart'){
      btn.innerText=1;
      pbtn.style.display = 'inline-block';
      mbtn.style.display = 'inline-block';
      showSuccessMessage();
      updateCartBadge(1); // Update the cart badge with the number of items in the cart
    }
  })

  mbtn.addEventListener("click", ()=>{
    if(btn.innerText == 20){
      pbtn.style.display = 'inline-block';
    }
    if(btn.innerText < 2){
      btn.innerText = "Add to Cart";  
      pbtn.style.display = 'none';
      mbtn.style.display = 'none';
      updateCartBadge(0); // Update the cart badge to show that there are no items in the cart
    }else{
      btn.innerText= btn.innerText - 1 ;
      updateCartBadge(btn.innerText); // Update the cart badge with the number of items in the cart
    }
  })
  
  pbtn.addEventListener("click", ()=>{
    btn.innerText= +(btn.innerText) +  +1 ;
    if(btn.innerText == 20){
      pbtn.style.display = 'none';
    }
    updateCartBadge(btn.innerText); // Update the cart badge with the number of items in the cart
  })
});

function showSuccessMessage() {
  let message = document.getElementById("toast-message");
  message.style.display = "block";
  setTimeout(() => {
    message.style.display = "none";
  }, 3000);
}

function updateCartBadge(count) {
  let badge = document.querySelector('.cart-badge');
  badge.innerText = count;
  badge.style.display = count ? 'inline-block' : 'none'; // Hide the badge if the count is zero
}
// Get the button element and the modal element
var button = document.getElementById("burger-button");
var modal = document.getElementById("burger-modal");

// When the user clicks on the button, show the modal
button.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on the close button or outside the modal, hide the modal
window.onclick = function(event) {
  if (event.target == modal || event.target.classList.contains("close")) {
    modal.style.display = "none";
  }
}
const customizeButton = document.getElementById('customize-button');

customizeButton.addEventListener('click', () => {
  window.location.href = 'customize.html';
});


