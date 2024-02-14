document.addEventListener('DOMContentLoaded', function() {
   
    const timer = document.getElementById('timer');
    let timeLeft = 600; 

    function countdown() {
        const minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        timer.textContent = `${minutes}:${seconds}`;

        if (timeLeft <= 0) {
            clearInterval(interval);
            timer.textContent = '00:00'; 
        } else {
            timeLeft--;
        }
    }

    countdown(); 
    const interval = setInterval(countdown, 1000);
    
    
    
setTimeout(() => {
    const modalOverlay = document.createElement('div');
    modalOverlay.classList.add('modal-overlay');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    modalContent.innerHTML = `
        <span class="close-button">&times;</span>
        <h2>Enter your information</h2>
        <form id="signup-form">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required>
            <button type="submit">Submit</button>
        </form>
    `;

    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);

   
    document.querySelector('.close-button').addEventListener('click', closeModal);

    
    document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        closeModal();
    });
}, 15000);


function closeModal() {
    document.querySelector('.modal-overlay').remove();
}

});
