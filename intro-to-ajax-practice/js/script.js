let movieData;

const $title = $('#title');
const $year = $('#year');
const $rated = $('#rated');
const $poster = $('#poster')
const $input = $('input[type="text"]')

function handleGetData (event){
    event.preventDefault() 
    $.ajax({
        url:`https://www.omdbapi.com/?apikey=9d304474&t=${$input.val()}`
      }).then(
        function(data){
         console.log(data);
         movieData= data;
         render();
         $input.val("")

        },
        function(error){
         console.log('bad request', error);
        }
      );
}


function render(){
    $title.text(movieData.Title);
    $year.text(movieData.Year);
    $rated.text(movieData.Rated);
    $poster.attr("src", movieData.Poster);
}

$('form').on('submit', handleGetData);



