
# Email Authentication with reCAPTCHA

**This project demonstrates a web-based email authentication system that verifies email addresses using a third-party API from Phone.Email and secures submissions with Google reCAPTCHA v3. The project is implemented using HTML, CSS, JavaScript, Node.js, and Express, and is designed to be hosted on platforms supporting backend functionality.**

Visit here : [Website](https://email-verification-zeta.vercel.app/)


## Project Features
* Email Verification: Uses a third-party API from Phone.Email to send and verify OTP-based email authentication.
* Google reCAPTCHA v3 Verification: Adds a reCAPTCHA validation layer to ensure genuine human interaction, enhancing security against bots.
* Frontend and Backend Integration: Employs a Node.js backend with Express to serve static files and handle API requests for reCAPTCHA verification and email verification.

## Project Structure

```bash
/email-authentication
│
├── /public
│   ├── index.html            # Main HTML file for the interface
│   ├── style.css             # Styling for the web interface
│   └── script.js             # Frontend logic for handling form submissions
│
├── /backend
│   └── getEmail.js           # Backend logic for fetching email verification data
│
├── /node_modules             # Node.js modules
│
├── package.json              # Project dependencies and scripts
│
└── server.js                 # Server setup and API routes

```

## Installation

### Prerequisites
* Node.js and npm installed
* Access to the Google reCAPTCHA v3 and Phone.Email API

### Steps

#### 1. Clone the repository:
```bash
git clone https://github.com/your-username/email-authentication.git
cd email-authentication
```

#### 2. Install dependencies:
```bash
npm install
```
#### 3. Configure API Keys:
* [Google reCAPTCHA v3](https://www.google.com/recaptcha/admin): Go to Google reCAPTCHA and set up a new site, obtain your sitekey, and secret key.
* [Phone.Email](https://www.phone.email/): Register and obtain a client-id for the email verification widget from Phone.Email.

#### 4. Run the Server:
```bash
npm start
```

This will start the server on `http://localhost:3000`

## Usage

### 1. Open the Web Interface:
* Visit `http://localhost:3000` in your browser.

### 2. Form Submission:
* Enter your First Name, Last Name, and Email Address.
* Complete the reCAPTCHA verification.
* Click on the Email OTP Verification button, which triggers the Phone.Email email verification widget.

### 3. Email Verification:
* After OTP validation, the app will display the user’s full name and verified email on successful verification.

## Steps for Email and reCAPTCHA Setup

### 1. Setting up Phone.Email API for Email Verification

* Sign up for an API key at [Phone.Email](https://www.phone.email/).
* Include your `client-id` within the `<div class="pe_verify_email">` tag in `/public/index.html`.

### 2. Setting up Google reCAPTCHA v3
* Register your site on [Google reCAPTCHA](https://www.google.com/recaptcha/admin).
* Replace the `data-sitekey` in `/public/index.html` with your reCAPTCHA v3 `sitekey`.
* Store your `secret key` in the backend `server.js` file, replacing `YOUR_SECRET_KEY`.

## API Endpoints
* reCAPTCHA Verification Endpoint: `POST /verify-captcha`

*  Sends the reCAPTCHA response token to Google for validation.
* If valid, allows further processing.
* Email Verification Endpoint: `GET /get-email`

* Fetches the verified email from the `user_json_url` provided by Phone.Email.


## Acknowledgements

 - [ Phone.Email for the email verification API.](https://www.phone.email/)
 - [Google reCAPTCHA for reCAPTCHA services.](https://www.google.com/recaptcha/admin)


