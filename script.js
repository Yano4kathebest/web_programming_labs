
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
        
        function generateCards() {
            let items = [
                {href: 'product1.html', text: 'Виниловая пластинка "David Bowie"', image: 'david.jpg', price: 7000},
                {href: 'product2.html', text: 'Виниловая пластинка "Queen"', image: 'queen.jpg', price: 10000},
                {href: 'product3.html', text: 'Виниловая пластинка "Depeche Mode"', image: 'depeche.jpeg', price: 6800},
            ];

            let main = document.getElementsByTagName('main')[0];
            for(let i=0; i<items.length; i++) {
                let card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <a href="${items[i].href}">Виниловая пластинка "David Bowie"
                        <div class="image"><img src="${items[i].image}"></div>
                        <div class="product name">${items[i].text}</div>
                        <div class="price">${items[i].price}&#8381;</div>
                    </a>`;

                main.appendChild(card);

            }
        }

        function loaded() {
            let searchbox = document.getElementById('search');
            searchbox.addEventListener('keydown', function (key) {
                if(key.key == 'Enter')
                search();
            });

            generateMenu();
            generateCards();
        }
