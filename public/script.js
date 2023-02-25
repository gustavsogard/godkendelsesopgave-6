window.addEventListener('DOMContentLoaded', () => {
    let btn = document.getElementById('fetchData');
    let table = document.getElementById('table');

    btn.addEventListener('click', () => {
        table.innerHTML = `
            <tr>
                <th>Kategori</th>
                <th>Antal</th>
            </tr>
        `;

        fetch('/api/return_crew')
            .then(response => response.json())
            .then(data => {
                for (let key in data) {
                    table.innerHTML += `
                        <tr>
                            <td>${key}:</td>
                            <td>${data[key]}</td>
                        </tr>`;
                }
            })
            .catch(error => console.log(error));
    });
});