
document.addEventListener('DOMContentLoaded', function() {
  const ticketForm = document.getElementById('ticketForm');
//   const apiToken = '764B7AB970A66AB5211979A695C61358';
    // const apiToken = 'EFF5E5FC659B450B41B8BCDF4FC7358E';
    const apiToken = 'B41B2CA807C8A1E1B24A76B3BC644C06';

  ticketForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Andy was here")

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const apiUrl = 'https://helpdesk.datasci.land/osticket/api/tickets.json';

    const requestData = {
      alert: false,
      autorespond: true,
      source: 'API',
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    // const requestData = {
    //   "alert": false,
    //   "autorespond": true,
    //   "source": "API",
    //   "name": "Finally",
    //   "email": "hello2@helpdesk.com",
    //   "phone": "3185asdas558634X123",
    //   "subject": "Some problem",
    //   "ip": "123.211.233.122",
    //   "message": "data:text/html,MESSAGE <b>There are some problems here</b>"
    // };

    fetch(apiUrl, {
      method: 'POST',
      // mode: 'no-cors',
      body: JSON.stringify(requestData),
      headers: {
        // 'Content-Type': 'application/json',
        'X-API-Key': apiToken,
        // 'Access-Control-Allow-Headers': 'Content-Type, X-API-Key'
      },
    })
      .then(response => response.json())
      .then(data => {
        alert('Ticket submitted successfully');
        ticketForm.reset();
      })
      .catch(error => {
        alert('Error: ' + error.message);
      });
  });
});
