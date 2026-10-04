document.addEventListener("DOMContentLoaded", () => {
  const greetingHeader = document.getElementById("greeting-header");
  const nameInput = document.getElementById("name-input");
  const greetBtn = document.getElementById("greet-btn");
  const boxes = document.querySelectorAll(".box");

  // Function to update the greeting header
  const handleGreeting = () => {
    const enteredName = nameInput.value.trim();
    if (enteredName !== "") {
      greetingHeader.textContent = `Hello, ${enteredName}`;
    } else {
      greetingHeader.textContent = "Hello";
    }
  };

  // Button click event to update greeting
  greetBtn.addEventListener("click", handleGreeting);

  // Pressing 'Enter' key inside input triggers greeting
  nameInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleGreeting();
    }
  });

  // Color fill on box click
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      const color = box.getAttribute("data-color");
      box.style.backgroundColor = color;

      // Adjust text color for contrast
      if (color === "blue" || color === "red") {
        box.style.color = "#ffffff";
      } else {
        box.style.color = "#222222";
      }
    });
  });
});