let user_ip=document.querySelector("#user-ip")
let pass_ip=document.querySelector("#pass-ip")
let loginbtn=document.querySelector("#loginbtn")


loginbtn.addEventListener("click", (e) => {
    e.preventDefault()
    let user_ip_val = user_ip.value.trim();
    let pass_ip_val = pass_ip.value.trim();

    let useraccdetails = JSON.parse(localStorage.getItem("userdetails")) || [];
    if(user_ip_val!="" && pass_ip_val!=""){
    useraccdetails.push({ user_ip_val, pass_ip_val });
    localStorage.setItem("userdetails", JSON.stringify(useraccdetails));
    let getaccdetails = JSON.parse(localStorage.getItem("userdetails"));
    console.log(getaccdetails);
    alert(`congratulation!!🥰 ${user_ip_val} successfully logged in 👏🏻`)
    }
    user_ip.value ="";
    pass_ip.value="";
});



// Logic for signup

// loginbtn.addEventListener("click", (e) => {
//     e.preventDefault()
//     let user_ip_val = user_ip.value.trim();
//     let pass_ip_val = pass_ip.value.trim();

//     let useraccdetails = JSON.parse(localStorage.getItem("userdetails")) || [];
//     if(user_ip_val!="" && pass_ip_val!=""){
//      let userExists = useraccdetails.some(user => user.user_ip_val === user_ip_val);
//     if(!userExists){
//     useraccdetails.push({ user_ip_val, pass_ip_val });
//     localStorage.setItem("userdetails", JSON.stringify(useraccdetails));
//     let getaccdetails = JSON.parse(localStorage.getItem("userdetails"));
//     console.log(getaccdetails);
//     alert(`congratulation!!🥰 ${user_ip_val} successfully logged in 👏🏻`)
//      }
//      else{
//         alert("userId already exist")
//     }
//     }
//     user_ip.value ="";
//     pass_ip.value="";
// });