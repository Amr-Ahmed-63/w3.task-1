
var mail = document.querySelector(".email");
var pass = document.querySelector(".password");
var Name = document.querySelector(".name");
var sub = document.querySelector(".sub");


let users = JSON.parse(localStorage.getItem("users"))

if (localStorage.getItem("user")) {

    let getUser = (JSON.parse(localStorage.getItem("user")))
    for (let c = 0; c < users.length; c++) {
        
        if( getUser.email == users[c].email && getUser.password == users[c].password ){      
            users.splice(c , 1)
            users.push(getUser)
            localStorage.setItem("users" , JSON.stringify(users))
            localStorage.removeItem("user")
        }
    }
    
}

let check = [] 

sub.addEventListener("click" , (s)=>{
    var userInfo = {
        email : mail.value,
        password : pass.value,
        userName : Name.value,
        data : []
    }
    for (let l = 0; l < users.length; l++) {
        if( mail.value == users[l].email && pass.value == users[l].password ){
            localStorage.setItem("user" ,JSON.stringify(users[l]))
        }else{
            check.push("c");
        }

    }
    if(check.length == users.length){
        localStorage.setItem("user" ,JSON.stringify(userInfo))
        users.push(userInfo)
        localStorage.setItem("users" , JSON.stringify(users))
        
    } 
    
})

