/* Homepage Functions */
function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }

  /* Dynamic Project Functions */
  function projectOn() {
    document.getElementById("output").style.display = "block";
  }

  function projectOff() {
    document.getElementById("output").style.display = "none";
  }



function getProject(a) {
    projectOn();
fetch("projects.json")
.then((res) => res.json())
.then((data) => {
   output = `
   <div class="project_overlay">
    <div class="project_structure_overlay">
        <div> 
            <button onclick="projectOff()" class="project_overlay_btn_close"> X </button>
        </div>
        <div class="project_heading_overlay">
                <h2 class="title_overlay"> ${data[a].name} </h2>
                <ul class="project_body_title_list">
                    <li class="title_list_main_overlay">${data[a].projectClient}</li>
                    <li>${data[a].projectInfo[0]}</li>
                    <li>${data[a].projectInfo[1]}</li>
                </ul>
        </div>
        <div> <img class="image_ovlerlay" src=${data[a].image} alt="snapshoot"> </div>
        <div class="project_body_overlay">
            <div class="text_group_overlay">
                <p>${data[a].mainText}</p>
            </div>
                <hr>
            <div class="btn_group_overlay">
            <ul class="project_tech_overlay">
                    <li>${data[a].technologies[0]}</li>
                    <li>${data[a].technologies[1]}</li>
                    <li>${data[a].technologies[2]}</li>
                </ul>
                <button onclick=window.open(${data[a].liveVersionLink[1]}) class="overlay_btn"> See Live <img src="./images/Icon_Export.png" > </button>
                <button onclick=window.open(${data[a].linkToSource[1]}) class="overlay_btn"> See Source <img src="./images/github_in_button.png" > </button>
            </div>
        </div>
    
    </div>
    </div>`; 

    document.getElementById("output").innerHTML = output;
});
}