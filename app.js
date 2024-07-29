document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Validation
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  let form = document.querySelector("#contactForm");

  if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
    alert("Please fill in all fields.");
    return;
  }

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Send email
  const sendEmail = () => {
    emailjs.init("Hx9EBSjYNLiEZNHSN");

    emailjs.sendForm("service_yiwbwuv", "contact-reply", form).then(
      () => {
        showModal();
      },
      (error) => {
        console.log("FAILED...", error);
        alert("Failed to send your message. Please try again later.");
      }
    );
  };
  sendEmail();
});

function showModal() {
  let modal = document.getElementById("myModal");
  let span = document.getElementsByClassName("close")[0];
  let modalBtn = document.getElementById("modalBtn");

  modal.style.display = "block";

  span.onclick = function () {
    modal.style.display = "none";
    window.location.href = "index.html";
  };

  modalBtn.onclick = function () {
    modal.style.display = "none";
    window.location.href = "index.html";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      window.location.href = "index.html";
    }
  };
}


