window.onload = function()
{
  globalThis.BACKEND_URL = "http://localhost:8080/Donor"  

  fetchAllDonors();
}

function fetchAllDonorsByLocation(){
  
  var xhr = new XMLHttpRequest();
  var HTML="";
  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4 && this.status ===200) {
      var data = JSON.parse(this.responseText);
      if(data.length != 0)
    for(var i in data)
    {
        HTML += "<div class = 'card'>"
        HTML += "<div style = 'width:100%;display:inline-block;justify-content:space-around;'>"
        HTML += "<h2 style = 'display:inline-block;color:rgb(6, 192, 6);'>"+ data[i].location+"</h2>"
        HTML += "<h2 style = 'color:red;display:inline-block;float:right;'> " + data[i].bloodGroup+ "</h2></div><br><br>  "
        HTML += "<h4>Name : "+ data[i].name+"<br>"
        HTML += "Contact : "+ data[i].phone + "<br>"
        HTML += "Email : " + data[i].email + "<br>"
        HTML += "Diagnosis Date : " + data[i].diagnosisDate + "</h4>"
        HTML += "Verification Status : " + data[i].verified + "</h4>"
        HTML += "</div>"
        document.getElementById('grid-container').innerHTML=HTML
      }
    else
    document.getElementById('grid-container').innerHTML="<h3>No Donors found.</h3>"
    }
  // $( ".input-group overflow" ).load(window.location.href + " .input-group overflow" );

  });
  var location = document.getElementById("searchLocation").value
  var bloodGroup = document.getElementById("searchBloodGroup").value
  if(location.trim() === "" && bloodGroup != "ALL")
  {
    xhr.open("GET", BACKEND_URL + "/bloodgroup/"+ bloodGroup );    
  }
  else if( bloodGroup === "ALL" && location.trim() != "")
  {
    xhr.open("GET", BACKEND_URL + "/location/" + location);
  }
  else if( bloodGroup === "ALL" && location.trim() === "")
  {
    xhr.open("GET", BACKEND_URL);
  }
  else
  {
      
    xhr.open("GET", BACKEND_URL + "/" + location + "/" + bloodGroup );
  }
  xhr.send();
}

function fetchAllDonors(){
  
  var xhr = new XMLHttpRequest();
  var HTML="";
  document.getElementById('grid-container').innerHTML=HTML
  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      var data = JSON.parse(this.responseText);
      if(data.length != 0)
    for(var i in data)
    {
        HTML += "<div class = 'card'>"
        HTML += "<div style = 'width:100%;display:inline-block;justify-content:space-around;'>"
        HTML += "<h2 style = 'display:inline-block;color:rgb(6, 192, 6);'>"+ data[i].location+"</h2>"
        HTML += "<h2 style = 'color:red;display:inline-block;float:right'> " + data[i].bloodGroup+ "</h2></div><br><br>  "
        HTML += "<h4>Name : "+ data[i].name+"<br>"
        HTML += "Contact : "+ data[i].phone + "<br>"
        HTML += "Email : " + data[i].email + "<br>"
        HTML += "Diagnosis Date : " + data[i].diagnosisDate + "</h4>"
        HTML += "Verification Status : " + data[i].verified + "</h4>"
        HTML += "</div>"
        document.getElementById('grid-container').innerHTML=HTML
      }
    else
    document.getElementById('grid-container').innerHTML="<h3>No Donors Found.</h3>"
    }
  // $( ".input-group overflow" ).load(window.location.href + " .input-group overflow" );

  });

  xhr.open("GET", BACKEND_URL);
  xhr.send();
}