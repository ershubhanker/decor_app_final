$('#id_ajax_upload_floor').submit(function(e){
    e.preventDefault();
    $form = $(this)
    var formData = new FormData(this);
    var btnVal = $('#texture1').val();
    console.log(btnVal)
    $.ajax({
        url: "project/",
        type: 'POST',
        data: formData,
        
        success: function (response) {
            console.log(data),
            // $('.error').remove();
            console.log(response)
            if(response.error){
                console.log(response.errors)
                $.each(response.errors, function(name, error){
                    
                    error = '<small class="text-muted error">' + error + '</small>'
                    $form.find('[name=' + name + ']').after(error);
                })
            }
            else{
                alert(response.message)
                window.location = ""
            }
        },
        cache: false,
        contentType: false,
        processData: false
    });
  });
  
  //ajax for wall files upload
  $('#id_ajax_upload_wall').submit(function(e){
      e.preventDefault();
      $form = $(this)
      var formData = new FormData(this);
      $.ajax({
          url: "project/",
          type: 'POST',
          data: formData,
          success: function (response) {
              $('.error').remove();
              console.log(response)
              if(response.error){
                  $.each(response.errors, function(name, error){
                      error = '<small class="text-muted error">' + error + '</small>'
                      $form.find('[name=' + name + ']').after(error);
                  })
              }
              else{
                  alert(response.message)
                  window.location = ""
              }
          },
          cache: false,
          contentType: false,
          processData: false
      });
    });
  
  
    //ajax for countertop files upload
    $('#id_ajax_upload_counter').submit(function(e){
      e.preventDefault();
      $form = $(this)
      var formData = new FormData(this);
      $.ajax({
          url: "project/",
          type: 'POST',
          data: formData,
          success: function (response) {
              $('.error').remove();
              console.log(response)
              if(response.error){
                  $.each(response.errors, function(name, error){
                      error = '<small class="text-muted error">' + error + '</small>'
                      $form.find('[name=' + name + ']').after(error);
                  })
              }
              else{
                  alert(response.message)
                  window.location = ""
              }
          },
          cache: false,
          contentType: false,
          processData: false
      });
    });
  
    
    $('#id_ajax_upload_baseCabinet').submit(function(e){
      e.preventDefault();
      $form = $(this)
      var formData = new FormData(this);
    //   console.log(formData)
      $.ajax({
          url: "project/",
          type: 'POST',
          data: formData,
          
          success: function (response) {
              $('.error').remove();
              console.log(response)
              if(response.error){
                  $.each(response.errors, function(name, error){
                      error = '<small class="text-muted error">' + error + '</small>'
                      $form.find('[name=' + name + ']').after(error);
                  })
              }
              else{
                  alert(response.message)
                  window.location = ""
              }
          },
          cache: false,
          contentType: false,
          processData: false
      });
    });