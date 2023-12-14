//This will copy the code for Events Creation
function copyApexCode() {
    const apexCodeElement = document.getElementById('apexCode');
    const apexCode = apexCodeElement.innerText;

    const textarea = document.createElement('textarea');
    textarea.value = apexCode;
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand('copy');

    document.body.removeChild(textarea);

    alert('Code copied to clipboard!');
}

// This will copy the code for Event Items Creation.
function copyApexCode2() {
    const apexCodeElement = document.getElementById('apexCode2');
    const apexCode = apexCodeElement.innerText;

    const textarea = document.createElement('textarea');
    textarea.value = apexCode;
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand('copy');

    document.body.removeChild(textarea);

    alert('Code copied to clipboard!');
}

