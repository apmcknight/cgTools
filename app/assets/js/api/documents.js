const url = 'http://localhost:8081/documents';

let xhr = new XMLHttpRequest;

xhr.open('GET', url, true);

xhr.onload = function()
    {
        if (this.status === 200){
            let apiData = JSON.parse(this.responseText);

            // One
            if (apiData[0].active == true) {
                let docOneTitle = document.querySelector("#docOne > h4");
                let docOneLink = document.querySelector("#docOne > a");
                docOneTitle.innerHTML += apiData[0].document_title;
                docOneLink.href += apiData[0].document_upload;
            }

            // Two
            if (apiData[1].active == true) {
                let docTwoTitle = document.querySelector("#docTwo > h4");
                let docTwoLink = document.querySelector("#docTwo > a");
                docTwoTitle.innerHTML += apiData[1].document_title;
                docTwoLink.href += apiData[1];
            }
            
            // Three
            if (apiData[2].active == true) {
                let docThreeTitle = document.querySelector("#docThree>h4");
                let docThreeLink = document.querySelector("#docThree>a");
                docThreeTitle.innerHTML += apiData[2].document_title;
                docThreeLink.href += apiData[2].document_upload[1].url;
            }

            
     

    
        }
    }

xhr.send();

