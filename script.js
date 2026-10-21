
const donateBtn = document.getElementById("donateBtn");
const donorForm = document.getElementById("donorForm");
const message = document.getElementById("message");

// Become a Donor button
donateBtn.addEventListener("click", function () {
    document.getElementById("donor").scrollIntoView({
        behavior: "smooth"
    });

    document.getElementById("name").focus();
});

// Donor registration form
donorForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const bloodGroup = document.getElementById("bloodGroup").value;

    if (name === "" || phone === "" || bloodGroup === "") {
        message.textContent = "Please fill in all fields.";
        return;
    }

    message.textContent =
        "Thank you, " + name +
        "! Your demo registration was successful. Blood Group: " +
        bloodGroup + ".";

    console.log("Demo donor details:", {
        name: name,
        phone: phone,
        bloodGroup: bloodGroup
    });

    donorForm.reset();
});
