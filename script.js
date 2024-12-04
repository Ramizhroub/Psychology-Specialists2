document.addEventListener('DOMContentLoaded', () => {
    const consultBtn = document.getElementById('consultBtn');
    const consultModal = document.getElementById('consultModal');
    const closeBtn = document.querySelector('.close');
    const consultForm = document.getElementById('consultForm');
    const contactForm = document.getElementById('contactForm');
    const psychologistList = document.querySelector('.psychologist-list');

    // Sample psychologist data
    const psychologists = [
        { name: 'Dr. Jane Smith', specialization: 'Cognitive Behavioral Therapy' },
        { name: 'Dr. John Doe', specialization: 'Family Therapy' },
        { name: 'Dr. Emily Brown', specialization: 'Child Psychology' },
        { name: 'Dr. Michael Johnson', specialization: 'Couple Counseling' }
    ];

    // Populate psychologist list
    psychologists.forEach(psych => {
        const card = document.createElement('div');
        card.classList.add('psychologist-card');
        card.innerHTML = `
            <h3>${psych.name}</h3>
            <p>${psych.specialization}</p>
        `;
        psychologistList.appendChild(card);
    });

    // Open consultation modal
    consultBtn.addEventListener('click', () => {
        consultModal.style.display = 'block';
    });

    // Close consultation modal
    closeBtn.addEventListener('click', () => {
        consultModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === consultModal) {
            consultModal.style.display = 'none';
        }
    });

    // Handle consultation form submission
    consultForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('consultName').value;
        const email = document.getElementById('consultEmail').value;
        const message = document.getElementById('consultMessage').value;

        // Here you would typically send this data to a server
        console.log('Consultation request:', { name, email, message });

        alert('Thank you for your consultation request. We will get back to you soon!');
        consultModal.style.display = 'none';
        consultForm.reset();
    });

    // Handle contact form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Here you would typically send this data to a server
        console.log('Contact form submission:', { name, email, message });

        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });
});
