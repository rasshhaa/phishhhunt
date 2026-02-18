document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username === "hunter" && password === "phishhunt") {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('success-message').style.display = 'block';

        // Redirect to gamer.html after successful login
        setTimeout(function() {
            window.location.href = "gamer6.html";
        }, 1000); // Wait 1 second before redirecting
    } else {
        alert('Invalid username or password');
    }
});

document.getElementById('continue-btn').addEventListener('click', function() {
    document.getElementById('success-message').style.display = 'none';
    document.getElementById('home-container').style.display = 'block';
});

document.getElementById('logout-btn').addEventListener('click', function() {
    document.getElementById('home-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
});
