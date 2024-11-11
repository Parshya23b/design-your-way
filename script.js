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
