// Header Main Page Details

const userData = {
    logoImage: "images/logo.png",
    title: "Developer",
    firstName: "Ayush",
    lastName: "Jain",
    country: "India",
    aboutImage: "images/user.png"
};

const logoPhoto = document.getElementById('logo-image');
logoPhoto.src = userData.logoImage;


const headerIdData = ['title', 'firstName', 'lastName', 'country'];

headerIdData.forEach(elementId => {
    const element = document.getElementById(elementId);
    element.innerHTML = userData[elementId];
});


// new

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbwPo5tZTgyeIwaXV19D2-SvwmdVQa_w2HWCbg4Bvw14D4TLS4n1YuP-R4TNC9GCakEF7Q/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg");
    
        form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message sent successfully";
                setTimeout(function(){
                    msg.innerHTML ="";
                },5000);

                form.reset();
            })
            .catch(error => console.error('Error!', error.message))
        })