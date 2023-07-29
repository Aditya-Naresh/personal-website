function validation(){
    let name = document.forms["form"]["Name"].value
    if(name === ""){
        alert("Name must be filled out")
        return false
    }
}