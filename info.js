const info = (title, para,buttonOne, buttonTwo,buttonthree,buttonfour)=> {
let div = document.createElement("div")
div.className="leftDiv"
div.innerHTML= `<h1>${title}</h1>

                <p class="para">${para}</p>
        
                <div class="marginbutton">
                <button class="button1">${buttonOne}</button>
                <button class="button2">${buttonTwo}</button>
              
                </div>
                `
return div
}
export{info}