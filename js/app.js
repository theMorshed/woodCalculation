// flat wood calculation
document.getElementById('flat-wood-btn-calculate').addEventListener('click', function () {
    const length = getValue('length-field') / 12;
    const width = getValue('width-field');
    const thickness = getValue('thickness-field');
    const resultField = document.getElementById('result-field');
    if (length !== undefined && width !== undefined && thickness !== undefined) {
        let result = (length * width * thickness) / 144;
        if (result < 1) {
            result *= 12;
            resultField.value = `${result.toFixed(2)} INCH`;
        } else {
            resultField.value = `${result.toFixed(2)} FOOT`;
        }
    } else {
        alert('Please fill all the field');
    }
});

// round wood calculation
document.getElementById('round-wood-btn-calculate').addEventListener('click', function () {
    let length = getValue('round-wood-length-field');
    let round = getValue('round-wood-round-field');
    const resultField = document.getElementById('round-wood-result-field');
    if (length !== undefined && round !== undefined) {
        length /= 12;
        round /= 12;
        let result = ((round * round) * length) / 16;
        if (result < 1) {
            result *= 12;
            resultField.value = `${result.toFixed(2)} INCH`;
        } else {
            resultField.value = `${result.toFixed(2)} FOOT`;
        }
    } else {
        alert('Please fill all the field');
    }
    console.log(resultField.value);
});
