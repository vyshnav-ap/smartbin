let otp = ""; // Variable to store the generated OTP

// Function to handle login
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    // Validate login (placeholder for actual logic)
    if (username) {
        document.getElementById('user-name').innerText = username;
        toggleContainers('home-container');
    } else {
        alert('Please enter a username.');
    }
}

// Function to display the signup form
function showSignup() {
    toggleContainers('signup-container');
}

// Function to navigate back to login
function goToLogin() {
    toggleContainers('login-container');
}

// Function to simulate sending OTP
function sendOTP() {
    const phone = document.getElementById('phone').value;
    otp = Math.floor(100000 + Math.random() * 900000).toString();
    alert(`OTP sent to ${phone}: ${otp}`);
    
    document.getElementById('otp').classList.remove('hidden');
    document.getElementById('verify-otp-btn').classList.remove('hidden');
}

// Function to verify OTP
function verifyOTP() {
    const enteredOtp = document.getElementById('otp').value;
    if (enteredOtp === otp) {
        const username = document.getElementById('signup-username').value;
        document.getElementById('user-name').innerText = username;
        toggleContainers('home-container');
    } else {
        alert('Incorrect OTP. Please try again.');
    }
}

// Display specific sections (activities, ranking, rewards)
function showActivities() { toggleContainers('activities-container'); }
function showRanking() { toggleContainers('ranking-container'); }
function showRewards() { toggleContainers('rewards-container'); }
function showSettings() { toggleContainers('settings-container'); }
function backToHome() { toggleContainers('home-container'); }
function logout() { toggleContainers('login-container'); }

// Generate QR Code
function generateQRCode() {
    const username = document.getElementById('login-username').value;
    const qrCodeCanvas = document.getElementById('qr-code');

    const qr = new QRious({
        element: qrCodeCanvas,
        value: `Username: ${username}`,
        size: 200,
    });
    qrCodeCanvas.classList.remove('hidden');
}

// Helper function to toggle containers
function toggleContainers(containerId) {
    const containers = ['login-container', 'signup-container', 'home-container', 'activities-container', 'ranking-container', 'rewards-container', 'settings-container'];
    containers.forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
    document.getElementById(containerId).classList.remove('hidden');
}
