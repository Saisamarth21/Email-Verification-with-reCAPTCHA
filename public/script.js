function phoneEmailReceiver(userObj) {
    const user_json_url = userObj.user_json_url;

    // Fetch first name, last name, and email from the form
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    // Verify reCAPTCHA
    const captchaResponse = grecaptcha.getResponse();
    if (captchaResponse.length === 0) {
        alert("Please complete the CAPTCHA.");
        return;
    }

    // Send CAPTCHA response to server for verification
    fetch('/verify-captcha', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'g-recaptcha-response': captchaResponse })
    })
    .then(response => response.json())
    .then(result => {
        if (!result.success) {
            alert("CAPTCHA verification failed. Please try again.");
            return;
        }

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
    })
    .catch(error => console.error('Error:', error));
}
