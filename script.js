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

document.getElementById('snippetForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input values
    const description = document.getElementById('shortDescription').value;
    const eventGroupId = document.getElementById('eventGroupId').value;
    const eventNameSuffix = document.getElementById('eventNameSuffix').value;
    const startValue = parseInt(document.getElementById('startValue').value); // Retrieve startValue
    const endValue = parseInt(document.getElementById('endValue').value); // Retrieve endValue
    const uiExperience = document.getElementById('uiExperience').value;

    document.getElementById('snippetForm2').addEventListener('submit', function(event) {
        event.preventDefault();

     // Get user input values for Event Items creation
    const isFree = document.getElementById('isFree').checked;
    const eventItemPrice = parseFloat(document.getElementById('eventItemPrice').value);
    const ticketName = document.getElementById('ticketName').value;
    const itemDescription = document.getElementById('itemDescription').value;
    const quantityAvailable = parseInt(document.getElementById('quantityAvailable').value);
    const isVisible = document.getElementById('isVisible').value;

    const generatedApexCode2 = `
    // This will create ${numRecords} event items.

    List<conference360__Event__c> events = [SELECT Id FROM conference360__Event__c WHERE conference360__Short_Description__c = '${description}' AND conference360__Visible__c = ${isVisible}];
    List<conference360__Event_Item__c> eventItems = new List<conference360__Event_Item__c>();
    for (conference360__Event__c ev : events) {
        conference360__Event_Item__c ei1 = new conference360__Event_Item__c();
        ei1.conference360__Event__c = ev.Id;
        ei1.conference360__Price__c = ${isFree ? 0 : eventItemPrice};
        ei1.conference360__Free__c = ${isFree};
        ei1.conference360__Item_Name__c = '${ticketName}';
        ei1.conference360__Description2__c = '${itemDescription}';
        ei1.conference360__Type__c = 'Main event ticket';
        ei1.conference360__Quantity_Made_Available__c = ${quantityAvailable};
        eventItems.add(ei1);
        ev.conference360__Visible__c = ${isVisible};
    }
    insert eventItems;
    update events;
`;
 // Display the generated Apex code
 const apexCodeElement2 = document.getElementById('apexCode2');
 apexCodeElement2.innerText = generatedApexCode2;
});


document.getElementById('openDebugPage').addEventListener('click', function() {
    // Get the Org Login URL from the input field
    const orgLoginUrl = document.getElementById('orgLoginUrl').value;

    // If Org Login URL is provided, open the debug page in a new tab
    if (orgLoginUrl) {
        const debugPageUrl = orgLoginUrl + '/_ui/common/apex/debug/ApexCSIPage?sdtd=1#';
        window.open(debugPageUrl, '_blank');
    } else {
        alert('Please provide an Org Login URL.');
    }
});

   // Add an event listener for the clear form button
    document.getElementById('clearForm').addEventListener('click', function() {
    // Reset all input fields
    document.getElementById('shortDescription').value = '';
    document.getElementById('startValue').value = ''; // Clear startValue
    document.getElementById('endValue').value = ''; // Clear endValue
    document.getElementById('eventGroupId').value = '';
    document.getElementById('eventNameSuffix').value = '';
    document.getElementById('orgLoginUrl').value = '';
});


let numRecords = endValue  - startValue;

 // Generate Apex code
 const generatedApexCode = `
 // This will create ${numRecords} event records.

 List<conference360__Event__c> events = new List<conference360__Event__c>();
  for(Integer i = ${startValue}; i <= ${endValue}; i++){
     conference360__Event__c e = new conference360__Event__c();
     e.Name = 'Event ' + '${eventNameSuffix} ' + i;
     e.conference360__Short_Description__c = '${description}';
     e.conference360__UI_Experience__c = '${uiExperience}';
     e.conference360__Event_Group__c = '${eventGroupId}';
     events.add(e);
   }
 insert events;
`;

// Display the generated Apex code
const apexCodeElement = document.getElementById('apexCode');
apexCodeElement.innerText = generatedApexCode;
});

// Add this function to your JavaScript
// Add this code to your JavaScript
function toggleField(fieldName) {
    const checkbox = document.getElementById(`${fieldName}Checkbox`);
    const element = document.getElementById(fieldName);
    const sectionLabel = document.querySelector(`label[for=${fieldName}]`);

    if (checkbox && element) {
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
        
        element.required = checkbox.checked; // Make the field required based on the checkbox state
        element.style.display = checkbox.checked ? 'block' : 'none'; // Toggle visibility
        element.value = element.value.trim() === '' && checkbox.checked ? 'XXX' : element.value; // Replace blank values
    }
    
    // If checkbox is unchecked, hide the field by default
    if (!checkbox.checked) {
        element.style.display = 'none';
    }
}


// Add this code at the end of your JavaScript file or script tag
document.addEventListener('DOMContentLoaded', function () {
 //Form 1
    toggleField('shortDescription');
    toggleField('eventGroupId');
  
//Form 2
    toggleField('isFree');
    toggleField('eventItemPrice');

});
