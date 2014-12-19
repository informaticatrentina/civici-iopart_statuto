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

function drawChart(data) {
  google.load("visualization", "1", {packages: ["corechart"]});
  var options = {
    title: data.title
  };
  new google.visualization.LineChart($('#line-chart')).draw(data, options);
  var data = google.visualization.arrayToDataTable([
    ['User', 'Age'],
    ['10', 17.36],
    ['20', 15.62],
    ['30', 13.63],
    ['40', '100'],
    ['40', '90'],
    ['40', '90'],
    ['40', '90'],
    ['40', '90'],
    ['40', '90'],
    ['40', '90'],
    ['40', '90'],
    ['40', '90'],
    ['40', '80'],
    ['40', '10']
  ]);
  new google.visualization.LineChart($('#line-chart')).draw(data, options);
}
