const url = 'http://localhost:8081/forms';

let xhr = new XMLHttpRequest;

xhr.open('GET', url, true);

xhr.onload = function()
    {
        if (this.status === 200){
            let apiData = JSON.parse(this.responseText);

            // One
            let formOneTitle = document.querySelector("#formOne > h4");
            let formOneLink = document.querySelector("#formOne > a");
            formOneTitle.innerHTML += apiData[0].form_title;
            formOneLink.href = apiData[0].form_link;

            // Two
            let formTwoTitle = document.querySelector("#formTwo > h4");
            let formTwoLink = document.querySelector("#formTwo > a");
            formTwoTitle.innerHTML += apiData[1].form_title;
            formTwoLink.href = apiData[1].form_link;

            // Three
            let formThreeTitle = document.querySelector("#formThree > h4");
            let formThreeLink = document.querySelector("#formThree > a");
            formThreeTitle.innerHTML += apiData[2].form_title;
            formThreeLink.href = apiData[2].form_link;

            // Four
            let formFourTitle = document.querySelector("#formFour > h4");
            let formFourLink = document.querySelector("#formFour > a");
            formFourTitle.innerHTML += apiData[3].form_title;
            formFourLink.href = apiData[3].form_link;

            // Five
            let formFiveTitle = document.querySelector("#formFive > h4");
            let formFiveLink = document.querySelector("#formFive > a");
            formFiveTitle.innerHTML += apiData[4].form_title;
            formFiveLink.href = apiData[4].form_link;

            // Six
            let formSixTitle = document.querySelector("#formSix > h4");
            let formSixLink = document.querySelector("#formSix > a");
            formSixTitle.innerHTML += apiData[5].form_title;
            formSixLink.href = apiData[5].form_link;

            


        }
    }

xhr.send();

