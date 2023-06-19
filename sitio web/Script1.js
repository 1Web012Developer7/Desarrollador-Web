document.addEventListener('DOMContentLoaded', function() {
    var animationContainer = document.getElementById('animation-container');
    var welcomeMessage = document.getElementById('welcome-message');
  
    setTimeout(function() {
      animationContainer.style.opacity = '1';
      welcomeMessage.style.transform = 'translateY(0)';
      welcomeMessage.style.opacity = '1';
    }, 500);
  });
  