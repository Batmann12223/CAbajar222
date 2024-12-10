document.addEventListener('DOMContentLoaded', () => {

    // Smooth scrolling for anchor links (if applicable in your layout)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Removed modal functionality since it was causing the error

    // Toggle event item description
    const eventItems = document.querySelectorAll('.event-item');
    eventItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('open');  // Toggle description visibility
        });
    });

    // Form handling for booking form (ensure the form exists in your HTML)
    const form = document.getElementById('bookingForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const confirmationDetails = document.getElementById('confirmationDetails');

    if (form && confirmationMessage && confirmationDetails) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();  // Prevent the actual form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;

            // Display the confirmation message
            confirmationDetails.innerHTML = `
                <strong>Name:</strong> ${name}<br>
                <strong>Email:</strong> ${email}<br>
                <strong>Date:</strong> ${date}<br>
                <strong>Time:</strong> ${time}
            `;

            confirmationMessage.style.display = 'block';  // Show confirmation
        });
    }

});
