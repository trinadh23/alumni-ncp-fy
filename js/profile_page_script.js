$(document).ready(function() {

    
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.avatar').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    $(':input').attr('readonly','readonly');
    $("#edit-button").click(function(){
        $(':input').prop("readonly", false);
      });
      $("#save-button").click(function(){
        $(':input').prop("readonly", false);
      }); 
    $(".file-upload").on('change', function(){
        readURL(this);
    });

    $("body").on('click', '.panel[data-href]', function(){
        $($(this).data('href')).modal();
    });
});



