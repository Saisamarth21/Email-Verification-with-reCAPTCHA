function verifyUser() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;

    // Verify reCAPTCHA
    const captchaResponse = grecaptcha.getResponse();
    if (captchaResponse.length === 0) {
        alert("Please complete the CAPTCHA.");
        return;
    }

    // Simulate reCAPTCHA verification success
    setTimeout(() => {
        // Simulate success response
        if (captchaResponse) {
            // Show the result section
            document.getElementById('verificationForm').classList.add('hidden');
            document.getElementById('result').classList.remove('hidden');

            // Display name and verified email
            document.getElementById('userName').innerText = `Name: ${firstName} ${lastName}`;
            document.getElementById('verifiedEmail').innerText = `Verified Email: ${email}`;
        } else {
            alert("CAPTCHA verification failed. Please try again.");
        }
    }, 1000); // Simulate API response delay
}
