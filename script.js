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



document.getElementById('snippetForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input values
    const description = document.getElementById('shortDescription').value;
    const eventGroupId = document.getElementById('eventGroupId').value;
    const eventNameSuffix = document.getElementById('eventNameSuffix').value;
    const startValue = parseInt(document.getElementById('startValue').value); // Retrieve startValue
    const endValue = parseInt(document.getElementById('endValue').value); // Retrieve endValue
    const uiExperience = document.getElementById('uiExperience').value;




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