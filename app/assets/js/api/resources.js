const url = 'http://localhost:8081/resources';

let xhr = new XMLHttpRequest;

xhr.open('GET', url, true);

xhr.onload = function()
    {
        if (this.status === 200){
            //API Data Prase Rule
            let apiData = JSON.parse(this.responseText);

            // Resource 1
            let resourceOneName = document.querySelector("#resourceOneTitle");
            let resourceOneLink = document.querySelector("#resourceOneLink");
            resourceOneName.innerHTML += apiData[0].resource_name;
            resourceOneLink.href= apiData[0].resource_link;

            // Resource 2
            let resourceTwoName = document.querySelector("#resourceTwoTitle");
            let resourceTwoLink = document.querySelector("#resourceTwoLink");
            resourceTwoName.innerHTML += apiData[2].resource_name;
            resourceTwoLink.href = apiData[2].resource_link;

            // Resource 3
            let resourceThreeName = document.querySelector("#resourceThreeTitle");
            let resourceThreeLink = document.querySelector("#resourceThreeLink");
            resourceThreeName.innerHTML += apiData[2].resource_name;
            resourceThreeLink.href = apiData[2].resource_link;

            


        }
    }

xhr.send();

