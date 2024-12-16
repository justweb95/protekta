const contactForm = document.getElementById('contact-form');
const emailResponse = document.querySelector('.email-response');
const submitButton = document.getElementById('button');
const loader = document.getElementById('loader'); 

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  // Prikaži loader
  loader.style.display = 'block';
  submitButton.disabled = true; 

  // Regex patterns for validation
  const namePattern = /^[a-zA-Z\s]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const messagePattern = /.+/;
  const phonePattern = /^(?!\s*$)\+?[0-9]\d{0,14}$/;
  
  // Retrieve form data
  const fromName = document.getElementById('name');
  const replyTo = document.getElementById('email');
  const phoneNumber = document.getElementById('number');
  const message = document.getElementById('textarea');
  
  // Validate form data
  if (!namePattern.test(fromName.value)) {
    emailResponse.textContent = 'Molimo vas unesite ime.';
    fromName.parentNode.style.borderColor = '#FF867E';
    fromName.parentNode.querySelector('.target').style.color = '#FF867E';    
    
    // Sakrij loader i omogući dugme
    loader.style.display = 'none';
    submitButton.disabled = false;
    
    return;
  } else {
    emailResponse.textContent = '';
    fromName.parentNode.style.borderColor = '#FFF9FD';
    fromName.parentNode.querySelector('.target').style.color = '#FFF9FD';    

  }

  if (!emailPattern.test(replyTo.value)) {
    emailResponse.textContent = 'Molimo vas unesite email adresu.';
    replyTo.parentNode.style.borderColor = '#FF867E';
    replyTo.parentNode.querySelector('.target').style.color = '#FF867E';    

    
    // Sakrij loader i omogući dugme
    loader.style.display = 'none';
    submitButton.disabled = false;
    
    return;
  } else {
    emailResponse.textContent = '';
    replyTo.parentNode.style.borderColor = '#FFF9FD';
    replyTo.parentNode.querySelector('.target').style.color = '#FFF9FD';    

  }

  if (!phonePattern.test(phoneNumber.value)) {
    emailResponse.textContent = 'Molimo vas unesite broj telefona.';
    phoneNumber.parentNode.style.borderColor = '#FF867E';
    phoneNumber.parentNode.querySelector('.target').style.color = '#FF867E';    
    
    // Sakrij loader i omogući dugme
    loader.style.display = 'none';
    submitButton.disabled = false;
    
    return;
  } else {
    emailResponse.textContent = '';
    phoneNumber.parentNode.style.borderColor = '#FFF9FD';
    phoneNumber.parentNode.querySelector('.target').style.color = '#FFF9FD';    

}

  if (!messagePattern.test(message.value)) {
    emailResponse.textContent = 'Molimo vas unesite poruku.';
    message.parentNode.style.borderColor = '#FF867E';
    // message.parentNode.querySelector('.target').style.color = '#FF867E';    

    // Sakrij loader i omogući dugme
    loader.style.display = 'none';
    submitButton.disabled = false;
    
    return;
  } else {
    emailResponse.textContent = '';
    message.parentNode.style.borderColor = '#FFF9FD';
    // message.parentNode.querySelector('.target').style.color = '#FFF9FD';    
  }


  // Prepare form data for submission
  const formData = new FormData();
  formData.append('service_id', 'service_hdznhfs');
  formData.append('template_id', 'template_r16u3p6');
  formData.append('user_id', '8R2zmqL1zRDo5n1Ug');
  formData.append('from_name', fromName.value);
  formData.append('reply_to', replyTo.value);
  formData.append('phone_number', phoneNumber.value);
  formData.append('message', message.value);

  // Send form data
  fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
      method: 'POST',
      body: formData
  })
  .then(response => {
      if (response.ok) {
        fromName.value = '';
        replyTo.value = '';
        message.value = '';
        phoneNumber.value = '';
        emailResponse.textContent = 'Vas email je uspesno poslat!';
        emailResponse.style.color = '#FFF9FD';
      } else {
          throw new Error('Oops... Nesto nije uredu.');
      }
  })
  .catch(error => {
    emailResponse.textContent = 'Oops... Nesto nije uredu.';  
  })
  .finally(() => {
    // Sakrij loader i omogući dugme nakon završetka
    loader.style.display = 'none';
    submitButton.disabled = false;
  });
});