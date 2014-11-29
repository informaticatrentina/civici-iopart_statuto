$(document).ready(function() {
  $('#save-additional-info').click(function(e) {
    e.preventDefault();
    if ($('#age').val() == '') {
      $('#error-msg').html(Yii.t('js', 'Please select age'));
      return false;
    }
    if ($('#gender').val() == '') {
      $('#error-msg').html(Yii.t('js', 'Please select gender'));
      return false;
    }
    var educationLevel = $('#education-level').val();
    if (educationLevel == '') {
      $('#error-msg').html(Yii.t('js', 'Please select education level'));
      return false;
    } else if (educationLevel == 'other') {
      if ($.trim($('#education-level-description').val()) == '') {
        $('#error-msg').html(Yii.t('js', 'Please select education level'));
        return false;
      }
    }
    if ($('#citizenship').val() == '') {
      $('#error-msg').html(Yii.t('js', 'Please select citizenship'));
      return false;
    }
    if ($('#work').val() == '') {
      $('#error-msg').html(Yii.t('js', 'Please select work'));
      return false;
    }
    if ($('#public-authority').val() == '') {
      $('#error-msg').html(Yii.t('js', 'Please select authority'));
      return false;
    }
    if ($('#authority-description').val() == '') {
      $('#error-msg').html(Yii.t('js', 'Please add authority description'));
      return false;
    }alert('hiii');
    $('#additional-info-form').submit();
  });
  
  $('#education-level').on('change', function() {
    var educationLevel = $('#education-level').val();
    if (educationLevel == 'other') {
      $('#education-level-description').show();      
    } else {
      $('#education-level-description').val('');     
      $('#education-level-description').hide();     
    }
  });
  
  $('#public-authority').on('change', function() {
    var authority = $('#public-authority').val();
    if (authority != '') {
      $('#authority-description').show();      
    } else {
      $('#authority-description').val('');     
      $('#authority-description').hide();     
    }
  });
});