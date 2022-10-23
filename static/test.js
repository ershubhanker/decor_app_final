// var model_name = ""
function requestmodel(callback) {
    
    $.ajax({
      async: false,
      url: "/myapp/sendmodel",
      type: "GET",
      datatype: "json",
      success: function (response) {
        // console.log(response['is_taken']); //print value on console to see the value of model received
        // return response['is_taken']
        callback(response['is_taken']);
      },
      
    });
    
}

// requestmodel();