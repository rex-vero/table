const btn = document.getElementById('btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    const firstName = document.getElementById('fname');
    const lastName = document.getElementById('lname');
    const score = document.getElementById('score');
    const table = document.getElementById('table');
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
<td>${firstName.value}</td>
<td>${lastName.value}</td>
<td>${score.value}</td>
`;
    table.appendChild(tableRow);
    firstName.value = '';
    lastName.value = '';
    score.value = '';
})