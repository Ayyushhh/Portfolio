let desc = "Hello, I'm Ayush Jain, a frontend developer, 3D artist, UI/UX designer, and graphic designer with a versatile skill set. With a deep understanding of both the technical intricacies of game development and the creative nuances of 3D art and graphic design, I bring a holistic approach that fosters innovation and ensures the seamless integration of aesthetics and functionality in every project.";
document.getElementById("desc").innerHTML = desc;



var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }

            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }

            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }


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