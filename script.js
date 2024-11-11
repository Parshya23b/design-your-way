document.getElementById('submit').addEventListener('click', async () => {
    const figmaLink = document.getElementById('figmaLink').value;
    const fileInput = document.getElementById('uploadDesign').files[0];

    const formData = new FormData();
    if (figmaLink) {
        formData.append('figmaLink', figmaLink);
    }
    if (fileInput) {
        formData.append('designFile', fileInput);
    }

    const response = await fetch('/api/design', {
        method: 'POST',
        body: formData
    });

    const result = await response.json();
    document.getElementById('result').innerText = result.message;
});

// JavaScript to handle the design generation
document.getElementById('generateButton').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    const designOutput = document.getElementById('designOutput');

    // Simple logic to generate a design based on user input
    if (userInput) {
        designOutput.style.display = 'block'; // Show the output section
        designOutput.innerHTML = `<h2>Generated Design for: ${userInput}</h2>
                                  <p>This could be a mockup for a food delivery app or any other design based on your input.</p>
                                  <div style="background: #f8f8f8; padding: 20px; border-radius: 5px;">
                                      <h3>Sample Design</h3>
                                      <p>Imagine a layout with a list of restaurants, a search bar, and a cart icon.</p>
                                  </div>`;
    } else {
        designOutput.style.display = 'none'; // Hide if no input
        alert('Please enter a prompt or link.');
    }
});
