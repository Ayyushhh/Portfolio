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