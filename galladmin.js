
// addForm(), delForm(), editForm() displays the respective forms

function addForm() {
    var x = document.getElementById("add");
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("del").style.display = "none"; //hides the other two forms
        document.getElementById("edit").style.display = "none";
    } else {
        x.style.display = "none";
    }
}
function delForm() {
    var x = document.getElementById("del");
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("add").style.display = "none"
        document.getElementById("edit").style.display = "none"
    } else {
        x.style.display = "none";
    }

}
function editForm() {
    var x = document.getElementById("edit");
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("add").style.display = "none"
        document.getElementById("del").style.display = "none"
    } else {
        x.style.display = "none";

    }

}
function add() {
    var name = document.getElementById("fname").value;
    var info = document.getElementById("info").value;
    var url = document.getElementById("url").value;
    var date = document.getElementById("date").value;

    if (ValidateForm(name, info, url, date) == true) {
        adding(name, info, url, date); //if all the values entered by user are valid then adding function is called to add image
    }
}

//adds image to gallery
function adding(name, info, url, date) {
    obj = {
        name,
        url,
        info,
        date
    }
    let img = document.createElement('img');
    img.setAttribute('src', url);
    img.onload = function () {
        var img = localStorage.getItem("images");
        var arr = JSON.parse(img);
        arr.push(obj);
        localStorage.setItem("images", JSON.stringify(arr));
        window.alert("image added");
        window.location.href = "gallery.html";
    }
    img.onerror = function () {
        alert("Invalid Url.");
        return;;
    }
}



//deletes image of the name entered by user
function Delete() {
    var nam = document.getElementById("delName").value;
    var img = localStorage.getItem("images");
    var arr = JSON.parse(img);
    var flag = 0;
    arr.forEach((element, index) => {
        if (element.name == nam) {
            flag = 1;
            arr.splice(index, 1);
        }
    });
    //when user enters the name which is not present in gallery then it displays the message
    if (flag == 0) {
        alert("not found");
    }
    else {
        localStorage.setItem("images", JSON.stringify(arr));
        window.location.reload();
        window.alert("image deleted");
        window.location.href = "gallery.html";
    }

}

function Editing() {

    var name = document.getElementById("editName").value;
    var url = document.getElementById("editUrl").value;
    var dates = document.getElementById("editDate").value;
    var infos = document.getElementById("editInfo").value;
    if (ValidateForm(name, infos, url, dates) == true) {
        edit(name, infos, url, dates);//edits image after validation 
    }

}
function edit(name, info, url, date) {
    obj = {
        name,
        url,
        info,
        date
    }
    let image = document.createElement('img');
    image.setAttribute('src', url);

    image.onload = function () {
        var img = localStorage.getItem("images");
        var arr = JSON.parse(img);
        var flag = 0;
        arr.forEach((element, index) => {
            if (element.name == name) {
                flag = 1;
                arr[index].url = url;
                arr[index].info = info;
                arr[index].date = date;
            }
        });
        //if the image is not present in the gallery then it will display the message 
        if (flag == 0) {
            window.alert("Image not found");
            return;
        }
        else {
            localStorage.setItem("images", JSON.stringify(arr));
            window.location.reload();
            window.alert("image changed");

            window.location.href = "gallery.html";
        }
    }
    image.onerror = function () {
        alert("Invalid Url.");
        return;;
    }
}

function ValidateForm(name, info, url, date) {

    if (name == "" || info == "" || url == "" || date == "") { //checks if there is no empty value
        window.alert("Please fill all the details");
        return false;
    }
    else {
        if (new Date(date) > new Date()) { // checks if date is not in future
            alert("Invalid date");
            return false;
        }
        return true;
    }
    return true;
}