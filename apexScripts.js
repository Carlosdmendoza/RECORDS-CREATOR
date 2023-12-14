
document.getElementById('snippetForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input values for Events Creation
    const description = document.getElementById('shortDescription').value;
    const eventGroupId = document.getElementById('eventGroupId').value;
    const eventNameSuffix = document.getElementById('eventNameSuffix').value;
    const startValue = parseInt(document.getElementById('startValue').value); // Retrieve startValue
    const endValue = parseInt(document.getElementById('endValue').value); // Retrieve endValue
    const uiExperience = document.getElementById('uiExperience').value;
    const publishEvent = document.getElementById('publish').value;


    /* Logic to Open Debug Page */
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
 // This will create ${numRecords} event records. It will also publish them if your org allows publishing events without event items

 List<conference360__Event__c> events = new List<conference360__Event__c>();
  for(Integer i = ${startValue}; i <= ${endValue}; i++){
     conference360__Event__c e = new conference360__Event__c();
     e.Name = 'Event ' + '${eventNameSuffix} ' + i;
     e.conference360__Short_Description__c = '${description}';
     e.conference360__UI_Experience__c = '${uiExperience}';
     e.conference360__Event_Group__c = '${eventGroupId}';
     ev.conference360__Visible__c = '${publishEvent}';
     events.add(e);
   }
 insert events;
`;

// Display the generated Apex code
const apexCodeElement = document.getElementById('apexCode');
apexCodeElement.innerText = generatedApexCode;




document.getElementById('snippetForm2').addEventListener('submit', function(event){
    event.preventDefault();

    // Get user input values for Event Items creation
        const eventItemPrice = document.getElementById('eventItemPrice').value;
        const isFree = document.getElementById('isFree').value;
        const ticketName = document.getElementById('ticketName').value;
        const itemDescription = document.getElementById('itemDescription').value;
        const quantityAvailable = document.getElementById('quantityAvailable').value;
        const isVisible = document.getElementById('isVisible').value;

const generatedApexCode2 = `
// This will create ${numRecords} event items.

List<conference360__Event__c> events = [SELECT Id FROM conference360__Event__c WHERE conference360__Short_Description__c = '${description}' AND conference360__Visible__c = ${isVisible}];
List<conference360__Event_Item__c> eventItems = new List<conference360__Event_Item__c>();
for (conference360__Event__c ev : events) {
    conference360__Event_Item__c ei1 = new conference360__Event_Item__c();
    ei1.conference360__Event__c = ev.Id;
    ei1.conference360__Free__c = ${isFree};
    ei1.conference360__Price__c = ${eventItemPrice};
    ei1.conference360__Item_Name__c = '${ticketName}';
    ei1.conference360__Description2__c = '${itemDescription}';
    ei1.conference360__Type__c = 'Main event ticket';
    ei1.conference360__Quantity_Made_Available__c = '${quantityAvailable}';
    ev.conference360__Visible__c = ${isVisible ? true : false};
    eventItems.add(ei1);
   
}
insert eventItems;
update events;
`;

 // Display the generated Apex code
 const apexCodeElement2 = document.getElementById('apexCode2');
 apexCodeElement2.innerText = generatedApexCode2;
});


});

