document.addEventListener('DOMContentLoaded', () => {
    feather.replace();

    const bentoItems = document.querySelectorAll('.bento-item');

    bentoItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            const icon = item.querySelector('i');
            icon.style.animation = 'pulse 0.5s ease-in-out';
        });

        item.addEventListener('mouseout', () => {
            const icon = item.querySelector('i');
            icon.style.animation = 'none';
        });
    });
});

const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

