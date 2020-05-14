function sendEmail() {
  Email.send({
  Host: "smtp.gmail.com",
  Username : "narayanresidency8@gmail.com",
  Password : "#12345@6",
  To : 'ujjwalsinghrathore7@gmail.com',
  From : "narayanresidency8@gmail.com",
  Subject : "email subject",
  Body : "email body",
  }).then(
  	message => alert("mail sent successfully")
  );
}