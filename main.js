
let jsData
let pro 
let user = JSON.parse(localStorage.getItem("user"))

displayPro()

let icon = document.querySelector("nav i")
let mood = "none"

icon.addEventListener("click" , function(){
    if(mood == "none"){
        document.querySelector(".cart").style.display="flex"
        mood = "flex"
    }else{
        document.querySelector(".cart").style.display="none"
        mood = "none"
    }
})


let req = new XMLHttpRequest()
req.open("GET" , "https://fakestoreapi.com/products");
req.send()
req.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
         jsData = JSON.parse(this.responseText)
        let item = ""
        for (let i = 0; i < jsData.length; i++) {
            
            item+=`
            <div class="card col-lg-3 col-md-5 col-sm-12">
                <div class="imgCon">
                    <img src="${jsData[i].image}" class="card-img-top">
                </div>
                <div class="card-body">
                    <b>${jsData[i].title}</b>
                    <price class="text-success">$${jsData[i].price}</price>
                    <span>${jsData[i].description}</span>
                    <button class="w-50 bt p-1"  onclick="add(${i})" >Add Product</button>
                </div>
            </div>
            `
            document.querySelector(".put").innerHTML = item
            
        }
        let hight = ""
        for (let i = 6; i < 9 ; i++) {
            
            hight+=`
            <div class="card col-lg-3 col-md-5 col-sm-12">
                <div class="imgCon">
                    <img src="${jsData[i].image}" class="card-img-top">
                </div>
                <div class="card-body">
                    <b>${jsData[i].title}</b>
                    <price class="text-success">$${jsData[i].price}</price>
                    <span>${jsData[i].description}</span>
                    <button class="w-50 bt p-1"  onclick="add(${i})" >Add Product</button>
                </div>
            </div>
            `
            document.querySelector(".cards").innerHTML = hight
            
        }
        
    }

    
}
function add(i){
    pro = {
        title : jsData[i].title,
        image : jsData[i].image,
        price : jsData[i].price
    }
    user.data.push(pro);
    localStorage.setItem("user" , JSON.stringify(user))
    displayPro()
    location.reload();
}


function displayPro(){

        let ite = ""
        let total = 0
        let rounded
        for (let z = 0; z < user.data.length; z++) {
            ite+=`
            <div class="inCart">
                <img src="${user.data[z].image}" alt="">
                <div class="proInfo">
                    <span class="Name">${user.data[z].title}</span>
                    <b class="text-success">${user.data[z].price}</b>
                </div>
                <button class="del bg-danger p-1")>Delete</button>
            </div>
            `
            total+= user.data[z].price
            rounded = Math.round(total * 100 ) / 100 
            document.querySelector(".putItem").innerHTML = ite
            document.querySelector(".total").innerHTML = `Total: $${rounded}`
            document.querySelector(".proNum").innerHTML = user.data.length
        }
        
    }

var dell = document.querySelectorAll(".del")

    for (let d = 0; d < dell.length; d++) {
        dell[d].addEventListener("click" , function (){
            delet(d)
            location.reload();
        })
        
    }
    

function delet(d) {
    user.data.splice(d , 1)
    localStorage.setItem("user" , JSON.stringify(user))
    displayPro()
}
