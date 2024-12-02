var sitenameInput = document.getElementById("sitename")
var siteurlInput = document.getElementById("siteurl")
var submitBtn = document.getElementById("submitBtn");
var tableContent = document.getElementById("Contentsite");

var BookMarkSite = [];
if(localStorage.getItem("bookmarksList") != null){
    BookMarkSite = JSON.parse(localStorage.getItem("bookmarksList"))
    displaydata()
    
}
function submit() {
    var bookmark = {
        BookmarkName: sitenameInput.value,
        websiteUrl : siteurlInput.value
    }
    BookMarkSite.push(bookmark)
    localStorage.setItem("bookmarksList", JSON.stringify(BookMarkSite))
    displaydata()
    clearInput()
}
function clearInput() {
    sitenameInput.value = "";
    siteurlInput.value = "";
  }
function deletebookmarks(x) {
    console.log(BookMarkSite)
    BookMarkSite.splice(x, 1)
    localStorage.setItem("bookmarksList", JSON.stringify(BookMarkSite))
    displaydata()
   
}
function displaydata() {
    var temp = ""
    for (var i = 0; i < BookMarkSite.length; i++)
        temp += ` <tr>     
    <td>${i+1}</td>    
             
    <td>${BookMarkSite[i].BookmarkName}</td>              
    <td> <a href=" ${BookMarkSite[i].websiteUrl}"
      <button class="btn btn-visit btn-success" >
        <i class="fa-solid fa-eye pe-2"></i>Visit
      </button>
    </td>
    <td>
      <button onclick="deletebookmarks(`+i+`)" class="btn  btn-danger pe-2" >
        <i class="fa-solid fa-trash-can"></i>
        Delete
      </button>
    </td>
 </tr> `


    document.getElementById("Contentsite").innerHTML = temp

} 
