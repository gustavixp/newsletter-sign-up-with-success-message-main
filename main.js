const emailForm = document.getElementById("email__form");
const emailInput = document.getElementById("email");
const card = document.querySelector(".card");
const cardSuccess = document.querySelector(".card__success");
const successEmail = cardSuccess.querySelector("strong");
const dismissMessage = cardSuccess.querySelector(".card__success-btn");
function validateEmail(email) { 
  const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/; 
  return re.test(email); 
} 
 
function showSuccessMessage(email) { 
  card.classList.add("success"); 
  cardSuccess.style.display = "flex"; 
  successEmail.textContent = email; 
} 
 
function showError(errorMessage) { 
  if (errorMessage) { 
    emailForm.classList.add("error"); 
  } else { 
    emailForm.classList.remove("error"); 
  } 
} 
 
function validateForm() { 
  const email = emailInput.value.trim(); 
  if (!email) { 
    showError("Please enter your email address."); 
    return false; 
  } 
  if (!validateEmail(email)) { 
    showError("Please enter a valid email address."); 
    return false; 
  } 
  showError(""); // Clear the error 
  return true; 
} 
 
emailForm.addEventListener("submit", (e) => { 
  e.preventDefault(); 
  if (validateForm()) { 
    showSuccessMessage(emailInput.value.trim()); 
  } 
}); 
 
emailInput.addEventListener("input", () => { 
  validateForm(); 
}); 
 
dismissMessage.addEventListener("click", () => { 
  card.classList.remove("success"); 
  cardSuccess.style.display = "none"; 
});  
