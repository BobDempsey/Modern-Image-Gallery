// Document ready function
$(() => {
  // Ready contact form
  submitForm();
  // Hide contact form success message
  $("#contactFormSuccess").hide();
  // Hide MailChimp Success Message
  $("#subSuccess").hide();
  // Hide Search Progress Spinner
  $("#searchSpinner").hide();
  // Form submit function
});

// Toaster Options
toastr.options = {
  closeButton: true,
  preventDuplicates: true,
  hideDuration: "100"
};

// MailChimp Sub Form
function addSubscriber() {
  let subscriberEmail = $("#mce-EMAIL").val();
  if (subscriberEmail == "") {
    toastr.error("Please Enter an Email Address");
  } else {
    $("#subscribeForm").submit();
    $("#mce-EMAIL").val("");
    $("#subSuccess").show();
  }
}

// Contact Form
function submitForm() {
  $("#contactFormSubmitBtn").click(function(e) {
    var name = $("#form-contact-name").val();
    var email = $("#form-contact-email").val();
    var phone = $("#form-contact-phone").val();
    var company = $("#form-contact-company").val();
    var message = $("#form-contact-message").val();
    // Basic Form Validation
    if (name == "" || email == "") {
      toastr["error"]("Please fill in your name & email address!");
      return false;
    } else {
      $.ajax({
        url: "https://formspree.io/bobdempsey83@gmail.com",
        method: "POST",
        data: {
          Form: "Number Facts Generator App",
          Name: name,
          Email: email,
          Phone: phone,
          Company: company,
          Message: message
        },
        dataType: "json"
      });
      // display success confirmations
      toastr["success"]("Form submission successful!");
      $("#contactFormSuccess").show();
      // clear form fields
      $("#form-contact-name").val("");
      $("#form-contact-email").val("");
      $("#form-contact-phone").val("");
      $("#form-contact-company").val("");
      $("#form-contact-message").val("");
      // do not reload page
      e.preventDefault();
    }
  });
}

// Variables
const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.4;

// Set first img opacity
imgs[0].style.opacity = opacity;

// Looping through images & listening for click events
imgs.forEach(img => img.addEventListener("click", imgClick));

function imgClick(e) {
  // Reset opacity of all thumbnails
  imgs.forEach(img => (img.style.opacity = 1));

  // Change current main img src of clicked thumbnail
  current.src = e.target.src;

  // Add fade in css class to main img
  current.classList.add("fade-in");

  // Remove fade-in CSS class after 0.5 seconds
  setTimeout(() => current.classList.remove("fade-in"), 500);

  // Change thumbnail opacity to opacity var
  e.target.style.opacity = opacity;
}
