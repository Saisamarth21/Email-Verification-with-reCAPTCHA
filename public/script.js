function phoneEmailReceiver(userObj) {
    const user_json_url = userObj.user_json_url;

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    // Verify reCAPTCHA
    const captchaResponse = grecaptcha.getResponse();
    if (captchaResponse.length === 0) {
        alert("Please complete the CAPTCHA.");
        return;
    }

    // Simulate reCAPTCHA verification
    setTimeout(() => {
        if (captchaResponse) {
            // Fetch the verified email using the user_json_url
            fetch(user_json_url)
                .then(response => response.json())
                .then(data => {
                    const user_email_id = data.user_email_id;

                    // Show the result section
                    document.getElementById('verificationForm').classList.add('hidden');
                    document.getElementById('result').classList.remove('hidden');

                    // Display name and verified email
                    document.getElementById('userName').innerText = `Name: ${firstName} ${lastName}`;
                    document.getElementById('verifiedEmail').innerHTML = `Verified Email: <strong>${user_email_id}</strong>`;
                })
                .catch(error => {
                    console.error('Error fetching email:', error);
                    alert("Error fetching verified email. Please try again.");
                });
        } else {
            alert("CAPTCHA verification failed. Please try again.");
        }
    }, 1000); // Simulate delay for CAPTCHA verification
}
