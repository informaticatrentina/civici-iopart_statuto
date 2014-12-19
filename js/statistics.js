google.load("visualization", "1", {packages: ["corechart"]});
$(document).ready(function() {
  $('.data-chart-type').click(function() {
    var chartData = $(this).val();
    if (chartData == '') {
      $('#line-chart').html('We are getting some error.');
      return false;
    }   
    $.ajax({
      type: 'GET',
      url: statistic_page,
      dataType: 'json',
      data: {
        chart_data: chartData
      },  
      success: function(resp) {
        if (resp.success) {
          drawChart(resp.data);
        } else {
          $('#line-chart').html('We are getting some error.');
        }   
      },  
      error: function(resp) {
        $('#line-chart').html('We are getting some error.');
      }   
    }); 
  }); 
});

function drawChart(respData) {
  data = respData.statistic_data;
  var data = google.visualization.arrayToDataTable(data);
  var options = { 
     title: respData.title
  };  
  var chart = new google.visualization.LineChart(document.getElementById('line-chart'));
  chart.draw(data, options);
}
