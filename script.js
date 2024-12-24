let switches = () => {
    // Массивы для хранения id кнопок и таблиц
    let buttonIds = [1, 2, 3, 4, 5, 6];
    let tableIds = [11, 22, 33, 44, 55, 66];

    let handleClick = (btnId, tableId) => {

        let btn = document.getElementById(btnId);
        let table = document.getElementById(tableId);
        let noti = document.querySelectorAll('.notifications');


        if (btn && table) {
            btn.addEventListener('click', () => {
                noti.forEach(noti => {
                    noti.style.display = 'none';
                })
                
                // Скрываем все кнопки
                buttonIds.forEach(id => {
                    let currentBtn = document.getElementById(id);
                    if (currentBtn) {
                        currentBtn.style.display = 'none';

                    }
                });

                // Отображаем выбранную таблицу
                table.style.display = 'block';
                back.style.display = 'block';

            });
        }


        let back = document.querySelector('button');
        back.addEventListener('click', () => {
            // Скрываем таблицу
            table.style.display = 'none';
            back.style.display = 'none'
            // Показываем все кнопки
            buttonIds.forEach(id => {
                let currentBtn = document.getElementById(id);
                if (currentBtn) {
                    currentBtn.style.display = 'block';
                }
            });
            noti.forEach(noti => {
                noti.style.display = 'block';
            })
            

        });
    };

    // Применяем функцию handleClick к каждой паре кнопка-таблица
    buttonIds.forEach((btnId, index) => {
        handleClick(btnId, tableIds[index]);


    });


};




// Вызов функции switches при загрузке страницы
document.addEventListener('DOMContentLoaded', switches);