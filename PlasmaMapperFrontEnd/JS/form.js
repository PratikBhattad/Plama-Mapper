window.onload = function()
{
  globalThis.BACKEND_URL = "http://localhost:8080/Donor"  
  setDate()
 
}

function setDate()
{
  var d = new Date(),
  month = '' + (d.getMonth() + 1),
  day = '' + d.getDate(),
  year = d.getFullYear();

  if (month.length < 2) 
  {
    month = '0' + month;
  }
  if (day.length < 2) 
  {
    day = '0' + day;
  }

  document.getElementById('date').value = [year, month, day].join('-');
}


function save()
{
    var email = document.getElementById('email').value
    var name = document.getElementById('name').value
    var location = document.getElementById('location').value
    var diagnosisDate = document.getElementById('date').value
    var phone = document.getElementById('phone').value
    var bloodGroup = document.getElementById('bloodgroup').value
    var phoneno = /^\d{10}$/;
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if (email.trim() === "" || name.trim() === "" || location.trim() === "" || diagnosisDate.trim() === "" || phone.trim() === "" || bloodGroup.trim() === "")
    {
        alert("All fields are mandatory.")
    }
    else if(!(phone.match(phoneno)))
    {
      alert("Invalid Phone Number.")
    }
    else if(!email.match(mailformat))
    {
      alert("Invalid email format.")
    }
    else{
    var data = {
      "email": document.getElementById('email').value,
      "name": document.getElementById('name').value,
      "location": document.getElementById('location').value,
      "diagnosisDate": document.getElementById('date').value,
      "phone": document.getElementById('phone').value,
      "bloodGroup": document.getElementById('bloodgroup').value,
      "verified": "Not Verified" 
    }
    
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4 && this.status === 200) {
          window.location.href = "home.html"
      }
    });

    xhr.open("POST", BACKEND_URL);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
}
}
function reset()
{
  document.getElementById('email').value = ""
  document.getElementById('name').value = ""
  document.getElementById('location').value = ""
  document.getElementById('date').value = ""
  document.getElementById('phone').value = ""
  setDate();
}