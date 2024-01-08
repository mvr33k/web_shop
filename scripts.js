window.onload = function () {
    document.getElementById('sg-button').onclick = function () {
        document.getElementById('prod').style.display = 'none';
        document.getElementById('cont').style.display = 'none';
        document.getElementById('sg').style.display = 'block';
    };
    document.getElementById('prod-button').onclick = function () {
        document.getElementById('cont').style.display = 'none';
        document.getElementById('sg').style.display = 'none';
        document.getElementById('prod').style.display = 'block';
    };
    document.getElementById('cont-button').onclick = function () {
        document.getElementById('prod').style.display = 'none';
        document.getElementById('sg').style.display = 'none';
        document.getElementById('cont').style.display = 'block';
    };


    var buttonsProd = document.getElementsByClassName('btn-prod');

    for (var i = 0; i < buttonsProd.length; i++) {
        buttonsProd[i].addEventListener('click', function () {
            var element = document.getElementById('basket-counter');
            var count = parseInt(element.innerHTML, 10);
            element.innerHTML = count + 1;
        });
    }


    function sortProducts() {
        // wybór ilości produktów
        const productsPerPage = parseInt(form.querySelector('select').value, 10);

        // wybór kategorii
        const selectedCategories = [];
        document.querySelectorAll('input[type="checkbox"]:checked').forEach((checkbox) => {
            selectedCategories.push(checkbox.value);
        });

        // pokazuje produkty zależnie od wybranych kategorii i ilości
        let visibleCount = 0;
        document.querySelectorAll('.card').forEach((card) => {
            const cardCategory = card.getAttribute('data-category');
            const isVisible = selectedCategories.includes(cardCategory) || selectedCategories.length === 0;

            if (isVisible) {
                if (visibleCount < productsPerPage) {
                    card.style.display = 'block';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    // obsługa formularza
    const form = document.getElementById('sorting-menu');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // nie cofa wyboru
            sortProducts();
        });
    }

    // Funkcja obsługująca kliknięcie w kategorię na stronie głównej
    function handleCategoryButtonClick() {
        const category = this.parentElement.querySelector('.service-name').innerText;

        // Przekierowanie do sekcji Produktów
        document.getElementById('prod-button').click();
    }
    // Dodanie event listenera do przycisków kategorii na stronie głównej
    const categoryButtons = document.querySelectorAll('.card-main .btn');
    if (categoryButtons) {
        categoryButtons.forEach((button) => {
            button.addEventListener('click', handleCategoryButtonClick);
        });
    }
    

    
}


