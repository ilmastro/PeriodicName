function checkNameAlphabet() {
  const nameInput = document.getElementById("nameInput").value;
  const resultDiv = document.getElementById("result");
  let elementsFound = [];
  let meanings = [];

  for (let char of nameInput.toUpperCase()) {
    if (elements[char]) {
      elementsFound.push(`${char}: ${elements[char].name}`);
      meanings.push(elements[char].meaning); // Store the meaning of each element
    }
  }

  if (elementsFound.length === 0) {
    resultDiv.innerHTML =
      "No letters in your name correspond to the periodic elements provided.";
  } else {
    // Join the found elements for display
    const elementsString = elementsFound.join("<br>");
    // Combine the meanings for the 'name meaning'
    const nameMeaning = meanings.join(", ");
    resultDiv.innerHTML = `<strong>Elements Found:</strong><br>${elementsString}<br><br><strong>Name Meaning:</strong> ${nameMeaning}`;
  }
}
