document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice');

    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            choices.forEach(c => c.classList.remove('clicked'));

            choice.classList.add('clicked');
        });
    });
});
