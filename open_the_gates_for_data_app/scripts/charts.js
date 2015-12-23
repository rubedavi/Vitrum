// Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Value');
        data.addRows([
          ['', 3],
        ]);

        // Set chart options
        var options = {'title':'Parameter #1',
                       'width':'100%',
                       'height': 105,
                       'backgroundColor':  { fill:'transparent' }};

        // Instantiate and draw our chart, passing in some options.
        var chart1 = new google.visualization.BarChart(document.getElementById('chart1'));
        chart1.draw(data, options);
        var chart2 = new google.visualization.BarChart(document.getElementById('chart2'));
        chart2.draw(data, options);
        var chart3 = new google.visualization.BarChart(document.getElementById('chart3'));
        chart3.draw(data, options);
        var chart4 = new google.visualization.BarChart(document.getElementById('chart4'));
        chart4.draw(data, options);
        var chart5 = new google.visualization.BarChart(document.getElementById('chart5'));
        chart5.draw(data, options);
        var chart6 = new google.visualization.BarChart(document.getElementById('chart6'));
        chart6.draw(data, options);
        var chart7 = new google.visualization.BarChart(document.getElementById('chart7'));
        chart7.draw(data, options);
        var chart8 = new google.visualization.BarChart(document.getElementById('chart8'));
        chart8.draw(data, options);
        var chart9 = new google.visualization.BarChart(document.getElementById('chart9'));
        chart9.draw(data, options);
        var chart10 = new google.visualization.BarChart(document.getElementById('chart10'));
        chart10.draw(data, options);
      }
