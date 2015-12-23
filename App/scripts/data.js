$(function (){

    var $description = $('#description');

    $.ajax({
        type: 'GET',
        url: 'http://api.worldbank.org/v2/datacatalog/search/poverty',
        success: function(description) {
            $.each(description, function(i, name) {
                $description.append('name: '+ description.name</li>);
            });
        }
    });
});


