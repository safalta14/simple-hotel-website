document.addEventListener("DOMContentLoaded", () => {

const addingpictures=document.querySelector("#adding_picture .overlay");
const hiddenimages=document.getElementById("hiding");

  if (addingpictures && hiddenimages) {
addingpictures.addEventListener("click",(e)=>{
   e.stopPropagation();
  hiddenimages.classList.add('active');
});

hiddenimages.addEventListener("click",function(e){
  if(e.target === hiddenimages){
    hiddenimages.classList.remove('active');
  }
});
  }


const links = document.querySelectorAll('.links');
const currentPage = window.location.pathname; // full path

links.forEach(link => {
  // Remove trailing slash for comparison
  const linkPath = link.getAttribute('href').replace(/\/$/, "");
  const currentPath = currentPage.replace(/\/$/, "");

  if(linkPath === currentPath){
    link.classList.add('active4');
  }
});

console.log("BOOKING JS LOADED");


// BOOKING
const image = document.getElementById('qr_overlay');
const noimage = document.getElementById('qr_payment');
const status = document.getElementById('payment_status');

// QR payment logic
if (image && noimage && status) {
    noimage.addEventListener('click', () => {
        image.classList.add('active1');
    });

    image.addEventListener('click', (e) => {
        if (e.target === image) {
            image.classList.remove('active1');
            status.textContent = 'paid';
            status.classList.add('active2');
            noimage.classList.remove('input-error');
        }
    });

    noimage.addEventListener('click', () => {
        status.textContent = 'paid';
        status.classList.add('active2');
        noimage.classList.remove('input-error');
    });
}

// Remove email red glow on input
if (emailInput) {
    emailInput.addEventListener('input', () => {
        emailInput.classList.remove('input-error');
    });
}

// Form submission logic
const form = document.getElementById('booking_form');
const emailInput = document.getElementById('email_input');
if (form) {
    form.setAttribute('novalidate', ''); // disable native browser validation

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // always prevent default to stop refresh

        let valid = true;

        const inputs = form.querySelectorAll('input, select, textarea');

        // Check blank fields / past date / other HTML constraints
        inputs.forEach(input => {
            if (!input.checkValidity()) {
                input.classList.add('input-error');
                valid = false;
            } else {
                input.classList.remove('input-error');
            }
        });

        // Check payment
        if (status.textContent !== 'paid') {
            valid = false;
            noimage.classList.add('input-error');
        } else {
            noimage.classList.remove('input-error');
        }

        // Email validation (only red glow)
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailValue)) {
            emailInput.classList.add('input-error');
            valid = false;
        }

        // If all valid → submit normally
        if (valid) {
         
          const messageDiv = document.getElementById('booking_message');
           if (messageDiv) {
              messageDiv.innerText = "The room is reserved. For more details contact us. Thank you!";
              messageDiv.classList.add('active3'); // Add your CSS styling for message
        }

        // Delay before redirect so user sees message
    setTimeout(() => {
    form.submit(); // submit to Django after message
    }, 2000);
    
        }
    });
}


//navbar login/logout color change
const color = document.getElementById('login');
const logging_in = document.querySelector('.style .submit');
const logging_out = document.querySelector('#yes');

// Keep login button green if user is logged in
if (color && localStorage.getItem('loggedIn') === 'true') {
  color.classList.add('green');
}

// When user logs in
if (logging_in) {
  logging_in.addEventListener('click', () => {
    localStorage.setItem('loggedIn', 'true');
    if (color) color.classList.add('green');
  });
}

// When user logs out
if (logging_out) {
  logging_out.addEventListener('click', () => {
    localStorage.removeItem('loggedIn');
    if (color) color.classList.remove('green');
  });
}


//logout

const show_opt1=document.getElementById('logout');
const choose=document.getElementById('event');
const remove = document.getElementById('no');

if(show_opt1&&choose&&remove){
show_opt1.addEventListener('click',(e)=>{
  e.preventDefault();
  choose.style.display='flex';

});
  remove.addEventListener('click', (e) => {
           e.preventDefault();
            choose.style.display = 'none';

  });
}

});



