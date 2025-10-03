document
  .querySelector(".login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (email === "budi.santoso@example.com" && password === "password123") {
      window.location.href = "./owner/owner.html";
    } else if (email === "dr.maya@vetcare.com" && password === "password123") {
      window.location.href = "./vet/vet.html";
    }
  });
