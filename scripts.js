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


    var buttons = document.getElementsByClassName('btn-prod');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            // Update the content of the element with id 'basket-counter'
            var element = document.getElementById('basket-counter');
            // Get the current count, convert it to a number, increment by 1, and update the content
            var count = parseInt(element.innerHTML, 10);
            element.innerHTML = count + 1;
        });
    }
}


