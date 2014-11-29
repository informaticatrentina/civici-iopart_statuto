$(document).ready(function() {
  $('#change-password').click(function() {
    var password = $('#new-password').val();
    if (password == '') {
      $('#error').html(Yii.t('js', "Please enter new Password"));
      return false;
    }
    var confirmPassword = $('#confirm-password').val();
    if (confirmPassword == '') {
      $('#error').html(Yii.t('js', "Please enter confirm password"));
      return false;
    }
    if (password != confirmPassword) {
      $('#error').html(Yii.t('js', "Password does not match"));
      return false;
    }
    $('#reset-password').submit();
  });
});

