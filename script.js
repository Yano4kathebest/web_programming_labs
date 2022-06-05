
function notReadyAlert() {
            alert('Sorry, not ready yet!\nИзвините, еще не готово!');
            return false;
        }

        function search() {
            let name = document.getElementById('search').value;
            let productNumber = null;
            if (name == 'Пластинка "David Bowie"') {
                productNumber = 0;
            } else if (name == 'Пластинка "Queen"') {
                productNumber = 1;
            } else if (name == 'Пластинка "Depeche Mode"') {
                productNumber = 2;
            } else {
                alert('Товар не найден :(');
            }

            let cards = document.getElementsByClassName('card');
            let card = cards[productNumber];
            card.style.border = '1px dashed white';
            card.style.backgroundColor = 'purple';

            setTimeout(function() {
                card.style.border = 'none';
                card.style.backgroundColor = '';
            }, 2000);
        }

        function generateMenu() {
            let menu = document.querySelector('nav.main-menu ul');
            menu.innerHTML = '';

            let items = [
                {href: 'index.html', text: 'Товары'},
                {href: '', text: 'Контакты'},
                {href: '', text: 'Доставка'},
                {href: '', text: 'Акции'},
                {href: 'about-us.html', text: 'О нас'},
            ];

            for(let i=0; i<items.length; i++) {
                let link = document.createElement('a');
                link.innerText = items[i].text;
                link.href = items[i].href;
                if(items[i].href==''){
                    link.addEventListener('click', notReadyAlert);
                }

                let menuItem = document.createElement('li');
                menuItem.appendChild(link);

                menu.appendChild(menuItem);
            }
        }

        function loaded() {
            let searchbox = document.getElementById('search');
            searchbox.addEventListener('keydown', function (key) {
                if(key.key == 'Enter')
                    search();
            });

            generateMenu();
        }