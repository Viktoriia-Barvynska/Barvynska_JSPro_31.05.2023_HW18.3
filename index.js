//=================HW18.3==================
//Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)
const table = document.getElementById('table');

    for (let i = 0; i < 10; i++) {
      const row = document.createElement('tr');

      for (let j = 0; j < 10; j++) {
        const cell = document.createElement('td');
        const number = i * 10 + j + 1;
        cell.textContent = number;
        row.appendChild(cell);
      }

      table.appendChild(row);
    }