document.getElementById("logo").addEventListener("click", function(){
  this.style.display="none";
})
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");

  form.addEventListener("submit", function (e) {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const Confirme = document.getElementById("Confirme").value.trim();

    if (email === "" || !email.includes("@")) {
      alert("Please enter a valid email.");
      e.preventDefault();
      return;
    }

    if (password === "" || password.length < 8) {
      alert("Password must be at least 8 characters and with out spaces.");
      e.preventDefault();
      return;
    }
    if(password !== Confirme){
        alert("Password does not match");
        e.preventDefault();
        return;
    }

    alert("Form submitted successfully ✅");
  });
});