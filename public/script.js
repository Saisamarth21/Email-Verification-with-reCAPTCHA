function phoneEmailReceiver(userObj) {
    const user_json_url = userObj.user_json_url;

    // Fetch first name, last name, and email from the form
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    // Redirect to backend to handle user verification
    fetch(`/get-email?url=${encodeURIComponent(user_json_url)}`)
        .then(response => response.text())
        .then(data => {
            // Show the result section
            document.getElementById('verificationForm').classList.add('hidden');
            document.getElementById('result').classList.remove('hidden');

            // Display name and verified email
            document.getElementById('userName').innerText = `Name: ${firstName} ${lastName}`;
            document.getElementById('verifiedEmail').innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
}
