function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }



function getText() {
fetch("projects.json")
.then((res) => res.json())
.then((data) => {
    console.log(data);
    /*let output = `<h2>Card</h2>`
    for (let project in projects) {
        output +=
        `<h2> ${project.name} </h2>`;
    }
    output += `
    <h2> ${data.name} </h2>
    <ul>
        <li>${data.projectClient}</li>
        <li>${data.projectInfo}</li>
    </ul>
    <p>${data.mainText}</p>
    <ul>
        <li>${data.technologies}</li>
        <li>${data.technologies}</li>
        <li>${data.technologies}</li>
    </ul>
    <button> See Live </button>
    <button> See Source </button>
    </div>`; */
});

}