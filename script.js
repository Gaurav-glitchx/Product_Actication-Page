document.getElementById('formatted-input').addEventListener('input', function (e) {
    let value = e.target.value.replace(/-/g, '');
    let formattedValue = '';

    for (let i = 0; i < value.length; i += 4) {
        if (i > 0) {
            formattedValue += '-';
        }
        formattedValue += value.substring(i, i + 4);
    }

    e.target.value = formattedValue;
});


document.getElementById('formatted-input').addEventListener('input', function() {
    const inputBox = document.getElementById('formatted-input');
    const submitButton = document.getElementById('submit');

    if (inputBox.value.trim() !== '') {
        submitButton.disabled = false;
        submitButton.classList.add('enabled');
    } else {
        submitButton.disabled = true;
        submitButton.classList.remove('enabled');
    }
});

document.getElementById('submit').addEventListener('click', function() {
    if (!this.disabled) {
        window.location.href = '400.html'; 
    }
});