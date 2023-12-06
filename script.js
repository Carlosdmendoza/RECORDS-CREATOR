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




// Add this code to your JavaScript
function toggleField(fieldName) {
    const checkbox = document.getElementById(`${fieldName}Checkbox`);
    const element = document.getElementById(fieldName);
    const sectionLabel = document.querySelector(`label[for=${fieldName}]`);
    const uiExperienceField = document.getElementById('uiExperience');
    const uiExperienceLabel = document.querySelector('label[for=uiExperience]');

    if (checkbox && element && sectionLabel && uiExperienceField && uiExperienceLabel) {
        // Validation: If "Is Free" checkbox is checked, uncheck "Event Item Price" checkbox
        if (fieldName === 'isFree' && checkbox.checked) {
            const eventItemPriceCheckbox = document.getElementById('eventItemPriceCheckbox');
            if (eventItemPriceCheckbox) {
                eventItemPriceCheckbox.checked = false;
            }
        }

        // Validation: If "Event Item Price" checkbox is checked, uncheck "Is Free" checkbox
        if (fieldName === 'eventItemPrice' && checkbox.checked) {
            const isFreeCheckbox = document.getElementById('isFreeCheckbox');
            if (isFreeCheckbox) {
                isFreeCheckbox.checked = false;
            }
        }

        const isVisible = checkbox.checked;

        element.required = isVisible; // Make the field required based on the checkbox state
        element.style.display = isVisible ? 'block' : 'none'; // Toggle visibility
        sectionLabel.style.display = isVisible ? 'block' : 'none'; // Toggle section label visibility
        uiExperienceField.style.display = isVisible ? 'block' : 'none'; // Toggle UI Experience field visibility
        uiExperienceLabel.style.display = isVisible ? 'block' : 'none'; // Toggle UI Experience label visibility
        element.value = element.value.trim() === '' && isVisible ? '000' : element.value; // Replace blank values
    }

    // If checkbox is unchecked, hide the field and labels by default
    if (!checkbox.checked) {
        element.style.display = 'none';
        sectionLabel.style.display = 'none';
        uiExperienceField.style.display = 'none';
        uiExperienceLabel.style.display = 'none';
    }
}

// Add this code at the end of your JavaScript file or script tag
document.addEventListener('DOMContentLoaded', function () {
    // Form 1
    toggleField('eventNameSuffix');
    toggleField('shortDescription');
    toggleField('startValue');
    toggleField('endValue');
    toggleField('eventGroupId');
    toggleField('orgLoginURL');
    toggleField('uiExperience');
    toggleString('uiExperience');
 

    // Form 2
    toggleField('isFree');
    toggleField('eventItemPrice');
});

