var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
var XHRBtn = document.querySelector("#xhr");
var fetchBtn = document.querySelector("#fetch");
var jqueryBtn = document.querySelector("#jquery");
var axiosBtn = document.querySelector("#axios");




var display  = document.querySelector("#quote");


XHRBtn.addEventListener("click", function(){
  // console.log("clicked");
  console.log("XML Choice");
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function(){
    if(XHR.readyState === 4 && XHR.status == 200){
      var quote = JSON.parse(XHR.responseText)[0];
      display.innerText = quote;
    }
  }

  XHR.open("GET", url);
  XHR.send();
});

// Fetch Call.......
fetchBtn.addEventListener("click", function(){
  console.log("Fetch Choice.!!");
  fetch(url)
  .then(function(res){
    res.json().then(function(data){
      // console.log(data[0]); (for testing....)
      display.innerText = data[0];
    })
  })

  .catch(function(err){
    console.log("Error");
  })

});


//Jquery Call....
$('#jquery').click(function(){
  console.log("Jquery calls !!")
  $.getJSON(url)
  .done(function(res){
    // console.log(res[0]); (for testin....)
    display.innerText = res[0];
  });
});

// Axios Call....

axiosBtn.addEventListener("click", function(){
  console.log("Axios Call!!")

axios.get(url)
.then(function(data){
  display.innerText = data.data[0];
})
.catch(function(err){
  console.log("Error !!!")
})

});