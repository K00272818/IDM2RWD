const emailBtn = document.getElementById('email');
const twitterBtn = document.getElementById('twitter');
const facebookBtn = document.getElementById('facebook');
const instaBtn = document.getElementById('instagram');


function sendEmail() {
        const emailUrl = `https://www.mail.com/?utm_referrer=https://www.google.com/`;
        window.open(emailUrl, '_blank');
        }

function tweet() {
        const twitterUrl = `https://twitter.com/`;
        window.open(twitterUrl, '_blank');
        }
            
function fBook() {
        const facebookUrl = `https://www.facebook.com/`;
        window.open(facebookUrl, '_blank');
        }
            
function insta() {
        const instaUrl = `https://www.instagram.com/`;
        window.open(instaUrl, '_blank');
        }
            
                
emailBtn.addEventListener('click', sendEmail);
twitterBtn.addEventListener('click', tweet);
facebookBtn.addEventListener('click', fBook);
instaBtn.addEventListener('click', insta);
