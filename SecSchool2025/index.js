
// Base URL for verification (update with your actual domain if hosted)
const baseURL = "https://securityschool.com/certificate/";

// Example certificate data
const certificateID = "CERT12345";

// Generate QR Code and link
const qrCodeContainer = document.getElementById("qrcode");
const certLink = document.getElementById("cert-link");

// Function to generate QR Code
function generateQRCode(id) {
  const url = `${baseURL}${id}`;
  new QRCode(qrCodeContainer, {
    text: url,
    width: 150,
    height: 150,
  });
  certLink.href = url;
  certLink.textContent = url;
}

// Generate QR Code for the certificate ID
generateQRCode(certificateID);