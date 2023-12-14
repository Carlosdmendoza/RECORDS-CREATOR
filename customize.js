    /*Customize Event Creation Form*/
    function toggleFormVisibility(formId) {
        var form = document.getElementById(formId);
        var formGroups = form.getElementsByClassName('form-group');
        for (var i = 0; i < formGroups.length; i++) {
            var formGroup = formGroups[i];
            formGroup.style.display = (formGroup.style.display === 'none' || formGroup.style.display === '') ? 'block' : 'none';
        }
    }