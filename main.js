/* Homepage Functions */
function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }

  /* Dynamic Project Functions */
  function projectOff() {
    document.getElementById("output").style.display = "none";
  }



function getProjectOne() {
fetch("projects.json")
.then((res) => res.json())
.then((data) => {
   output = `<div class="project_overlay">
   <div> 
    <button onclick="projectOff()" class="project_overlay_btn_close"> X </button>
   </div>
   <div class="project_body_overlay">
    <h2 class="title_overlay"> ${data[0].name} </h2>
    <ul class="project_body_title_list">
        <li class="title_list_main_overlay">${data[0].projectClient}</li>
        <li>${data[0].projectInfo[0]}</li>
        <li>${data[0].projectInfo[1]}</li>
    </ul>
    <img class="image_ovlerlay" src=${data[0].image} alt="snapshoot">
    <p>${data[0].mainText}</p>
    <ul class="project_tech_overlay">
        <li>${data[0].technologies[0]}</li>
        <li>${data[0].technologies[1]}</li>
        <li>${data[0].technologies[2]}</li>
    </ul>
    <hr>
    <div class="btn_group_overlay">
    <button class="overlay_btn"> See Live <img src="./images/Icon_Export.png" > </button>
    <button class="overlay_btn"> See Source <img src="./images/github_in_button.png" > </button>
    </div>
    </div>
    </div>`; 

    document.getElementById("output").innerHTML = output;
});
}