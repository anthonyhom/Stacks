// document.querySelector(".add_button1").onclick = function(){
// 	popUp();
// }

// function popUp(){
// 	document.querySelector(".add_button1").innerHTML = '<div class="pop-over is-shown" style="left: 5px; top: 211px; position: fixed;"><div class="no-back"><div class="pop-over-header js-pop-over-header"><span class="pop-over-header-title">Create Project</span><a href="#" class="pop-over-header-close-btn icon-sm icon-close">::before</a></div><div><div class="pop-over-content js-pop-over-content u-fancy-scrollbar js-tab-parent" style="max-height: 532px;"><div><div><form><p class="error" style="display:none"></p><label for="org-display-name">Name</label><input id="org-display-name" class="js-autofocus js-display-name" type="text" name="displayName" value="" dir="auto" maxlength="100"><label for="org-desc">Description <span class="quiet u-font-weight-normal">(optional)</span></label><textarea id="org-desc" name="desc" dir="auto"></textarea><input class="primary wide js-save" type="submit" value="Create" disabled=""></form><hr></div></div></div></div></div></div>';
// }

var modal = document.querySelector(".pop-overis-shown");
var button = document.querySelector(".add_button1");
var span = document.getElementsByClassName("pop-up-close")[0];

button.onclick = function(){
	modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById('submit').onclick = function(event){
  // var newEl = document.createElement('li');
  // var newText = document.createTextNode('node');
  // newEl.appendChild(newText);
  var project_name = document.getElementById("org-display-name").value;
  var entry = '<li class="nav-item"><a class="nav-link" href="#"><span data-feather="hash"></span>' + project_name + "</a></li>";
  document.getElementById("nav flex-column mb-1").appendChild(entry);
  event.preventDefault();
}

$('.pop-up-input').on("keyup", action);
function action() {
   if($('.pop-up-input').val().length > 0) {
      $('.submit').prop("disabled", false);
   }else {
      $('.submit').prop("disabled", true);
   }
}