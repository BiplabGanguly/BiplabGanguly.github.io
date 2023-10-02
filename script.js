

function action(){
  let actionbtn = document.getElementById("actionbtn")
  console.log(audio,v1)
  if (this.document.getElementById("audio").paused){
    actionbtn.innerHTML = '<i class="bx bx-pause"></i>'
    this.document.getElementById("audio").volume = 0.2;
    this.document.getElementById("audio").play();
    this.document.getElementById("v1").play();
    this.document.getElementById("v2").play();
  }
  else{
    actionbtn.innerHTML = '<i class="bx bx-play"></i>'
    this.document.getElementById("audio").pause()
    this.document.getElementById("v1").play();
    this.document.getElementById("v2").play();
  }
}


/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


email = document.getElementById("email")
subject = document.getElementById("subject")
content = document.getElementById("content")

function sendEmail() {
  fullname = document.getElementById("fullname").value
  email = document.getElementById("email").value
  subject = document.getElementById("subject").value
  content = document.getElementById("content").value
  let body = "name :" +fullname + "<br/> email : " + email + "<br/> message: "+ content
  console.log(fullname,email,subject,content)
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "biplab123.abcd@gmail.com",
    Password: "E131C3A618B514D454E4C9FAB87881A6A3E9",
    To: 'biplab123.abcd@gmail.com',
    From: 'biplab123.abcd@gmail.com',
    Subject: subject,
    Body: body,
  })
    .then(function (message) {
      Swal.fire(
        'Good job!',
        'message send successfully!',
        'success'
      )
    });
}

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

        sections.forEach(sec => {
          let top = window.scrollY;
          let offset = sec.offsetTop - 150;
          let height = sec.offsetHeight;
          let id = sec.getAttribute('id');

          if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
              links.classList.remove('active');
              document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            })
          }
        })
 
    /*==================== sticky navbar ====================*/

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
};

/*==================== scroll reveal ====================*/


/*==================== typed js ====================*/