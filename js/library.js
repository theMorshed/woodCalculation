// getValue function declaration
function getValue(fieldId) {
    const element = document.getElementById(fieldId);
    if (element.tagName.toLowerCase() === 'input') {
        const elementString = element.value;
        if (isNaN(elementString) || elementString === '') {
            element.value = '';
            return undefined;
        }
        const elementValue = parseFloat(elementString);
        return elementValue;
    } else {
        const elementString = element.innerText;
        const elementValue = parseFloat(elementString);
        return elementValue;
    }
}