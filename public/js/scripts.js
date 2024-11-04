function generateDivs(value) {
  const MAXNUMBER = 5000;
  const listContainer = document.getElementById("list-container");
  listContainer.innerHTML = "";

  const count = parseInt(value, 10);

  if (!isNaN(count) && count > 0 && count < MAXNUMBER) {
    for (let i = 0; i < count; i++) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("item");

      const spanNumber = document.createElement("span");
      spanNumber.textContent = `${i + 1}`;

      newDiv.appendChild(spanNumber);
      listContainer.appendChild(newDiv);
    }
  }

  if (count >= MAXNUMBER) {
    const errorDiv = document.createElement("div");
    errorDiv.classList.add("max-number-error");
    errorDiv.textContent = `Please insert a number under ${MAXNUMBER}`;

    listContainer.appendChild(errorDiv);
  }
}
