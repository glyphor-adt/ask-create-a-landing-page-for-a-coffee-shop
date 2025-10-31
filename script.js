document.addEventListener('DOMContentLoaded', () => {
    const learnMoreButton = document.getElementById('learn-more');
    const infoSection = document.getElementById('info-section');

    learnMoreButton.addEventListener('click', () => {
        if (infoSection.classList.contains('hidden')) {
            infoSection.classList.remove('hidden');
            infoSection.classList.add('visible');
        } else {
            infoSection.classList.remove('visible');
            infoSection.classList.add('hidden');
        }
    });
});