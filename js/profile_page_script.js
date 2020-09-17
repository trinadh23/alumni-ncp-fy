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
    var getUrlParams = function()
    {
        const queryString = window.location.search.substring(1);
        params = {}
        queryString.split('&').forEach(function (queries)
        {
            key_value = queries.split('=');
            params[key_value[0]] = params[key_value[1]];
        })
        return queryString
    }

    var validateUser = function()
    {
        if (sessionStorage.getItem('rollno') == null)
        {
            return false;
        }
        userroll = sessionStorage.getItem('rollno')
        profileroll = getUrlParams['rollno']
        if(userroll!=profileroll)
        {
            return false;
        }
        return true;
    }

    if (validateUser())
    {
        console.log(getUrlParams())
        $('button').hide();
    }
    var editButtons = $('button[name ="edit-button"]')
    var saveButtons = $('button[name ="save-button"]')
    var resetButtons = $('button[name ="reset-button"]')
    var cancelButtons = $('button[name ="cancel-button"]')
    $(':input').attr('readonly','readonly');
    saveButtons.hide()
    resetButtons.hide();
    cancelButtons.hide();
    editButtons.click(function(){
        $(':input').prop("readonly", false);
        saveButtons.show();
        resetButtons.show();
        cancelButtons.show();
        editButtons.hide();
      });
      saveButtons.click(function(){
        $(':input').prop("readonly", false);
      });
    
    $(".file-upload").on('change', function(){
        readURL(this);
    });

    $("body").on('click', '.panel[data-href]', function(){
        $($(this).data('href')).modal();
    });

    
});



