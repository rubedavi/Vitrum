$(document).ready(function() {

$('input[type=checkbox]').on('change', function (e) {
    if ($('input[type=checkbox]:checked').length > 5) {
        $(this).prop('checked', false);
        alert("Je kan maximum 5 Parameters selecteren");
    }
});
});