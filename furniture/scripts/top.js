document.addEventListener('DOMContentLoaded', function () {
    // hidden products
    const moreBtn = document.getElementById('moreBtn');
    const lessBtn = document.getElementById('lessBtn');
    const hiddenProducts = document.getElementById('hiddenProducts');

    moreBtn.addEventListener('click', function () {
        hiddenProducts.classList.add('is-opened');
        moreBtn.classList.add('is-hidden');
        lessBtn.classList.add('is-shown');
        moreBtn.setAttribute('aria-expanded', 'true');
    });

    lessBtn.addEventListener('click', function () {
        hiddenProducts.classList.remove('is-opened');
        moreBtn.classList.remove('is-hidden');
        lessBtn.classList.remove('is-shown');
        moreBtn.setAttribute('aria-expanded', 'false');
    });
})