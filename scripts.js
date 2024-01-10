window.onload = function () {

    // podstawowa zmiana okienek 
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


    // ilosc produktow w koszyku
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

    // kategorie na sg. nie udało mi się niestety zrobić sortowania buttonami z sg na prod
    const categoryButtons = document.querySelectorAll('.btn'); // dla wszystkich guzikow z klasy .btn
    if (categoryButtons) { //jesli klikniety
        categoryButtons.forEach((button) => {
            button.addEventListener('click', function () {
                document.getElementById('prod-button').click(); // zrob to co robi prod button
            });
        });
    }
}


