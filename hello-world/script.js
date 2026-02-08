document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('interactionBtn');
    
    btn.addEventListener('click', () => {
        // Simple confetti-like effect or alert for interaction
        alert('Hello! You clicked the button. Welcome to your new project!');
        
        // Change button text
        const originalText = btn.textContent;
        btn.textContent = 'Clicked!';
        btn.style.background = 'linear-gradient(135deg, #10b981, #34d399)';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = ''; // Revert to CSS
        }, 2000);
    });
    
    console.log('Hello World Project Loaded');
});
