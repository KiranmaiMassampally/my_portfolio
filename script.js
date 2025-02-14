document.addEventListener("DOMContentLoaded", function () {
  fetch('header.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('header-container').innerHTML = data;
      })
      .catch(error => console.error('Error loading header:', error));
});

function showClientInfo(clientId) {
  // Hide all client details initially
  const clientDetails = document.querySelectorAll('.client-details');
  clientDetails.forEach(client => client.style.display = 'none');

  // Show the selected client's details
  const selectedClient = document.getElementById(clientId);
  if (selectedClient) {
      selectedClient.style.display = 'block';
  }
}
