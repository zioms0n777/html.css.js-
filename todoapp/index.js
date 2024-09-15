
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function AddTask()
{
    if(inputBox.value === '')
    {
        alert("Musisz coś wpisać");
    }
    else
    {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let img= document.createElement("img");
        img.classList.add("delete-icon");
        img.src="images/multiply.png";
        li.appendChild(img)
    }
    inputBox.value="";
    saveData();

}

listContainer.addEventListener("click", function(e)
{
if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName==="IMG")
    {
        e.target.parentElement.remove();
        saveData();

    }



}, false);


function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML);

}
function showList()
{
listContainer.innerHTML=localStorage.getItem("data");
}
showTask();