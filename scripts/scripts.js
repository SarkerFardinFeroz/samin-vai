const sendEmail = () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("area").value;
  let body = `<b> Name: </b> ${name}
     <br>
     <br>
    <b> Email: </b> ${email} 
      <br> 
      <br> 
      <b> Message: </b> ${message}
    `;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "saminfattah@gmail.com",
    Password: "8CEB9FBC5DCAEEA2BA75CB4AAD256D3D9B3F",
    To: "saminfattah@gmail.com",
    From: "saminfattah@gmail.com",
    Subject: "New Contact From Portfolio",
    Body: body,
  }).then((message) => alert("Message successfully has been sent"));
};
