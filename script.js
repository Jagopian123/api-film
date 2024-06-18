$('#search-button').on('click', function(){
  $('#movie-list').html('');
  $.ajax({
    url: 'https://omdbapi.com',
    type: 'get',
    dataType: 'json',
    data: {
      'apikey': '9291dbae',
      's': $('#search-input').val()
    },
    success: function(result){
      if(result.Response == 'True'){
        let movies = result.Search;
        
        $.each(movies, function(i, data){
          $("#movie-list").append(`
  <div class='mt-3 col-md-4'>
  <div class="card" style="height:600px">
    <img style='height:450px'src="${data.Poster}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.Title}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${data.Year}</h6>
      <a href="#" class="card-link text-decoration-none">See detail</a>
    </div>
  </div>
  </div>
          `);
        });
        $('#search-input').val('');
      } else {
        $('#movie-list').html("<h1 class='text-center'>Movie tidak ditemukan!</h1>");
        $('#search-input').val('');
      }
    }
  });
});
