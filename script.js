



function handleClick(){

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let pwd = document.getElementById("pwd").value;
    let phone = document.getElementById("phone").value;
    


    let namePattern = /[a-z]{3,}/i
    let emailPattern = /[\w]{5,}\@[a-z]{3,}\.[a-z]{2,}/i
    let pwdPattern = /[A-Za-z0-9]{5,}[A-Z]+[\W]+/ //virusFound
    let phonePattern = /^\+[\d]{1,3}\(?[\d]{6,}\)?/ //+234(1234567893)
    
    
        // alert("successful")
        if(fname === "" || email === "" || pwd === "" || phone === ""){
            document.getElementById("notification").style.display = "flex"
            document.getElementById("notification").style.backgroundColor = "rgb(123, 20, 08)"
            document.getElementById("text").innerText = "input field cannot be empty"

        }else if(!namePattern.test(fname) || !namePattern.test(lname)){
            document.getElementById("notification").style.display = "flex"
            document.getElementById("notification").style.backgroundColor = "red"
            document.getElementById("text").innerText = "enter valid name"
;
        }else if(!emailPattern.test(email)){
            document.getElementById("notification").style.display = "flex"
            document.getElementById("notification").style.backgroundColor = "blue"
            document.getElementById("text").innerText = "enter valid email"

        }else if(!pwdPattern.test(pwd)){
            document.getElementById("notification").style.display = "flex"
            document.getElementById("notification").style.backgroundColor = "purple"
            document.getElementById("text").innerText = "enter strong password"

        }else if(!phonePattern.test(phone)){
            alert("enter valid phone number with country code");

        }else{
            document.getElementById("notification").style.display = "flex"
            document.getElementById("notification").style.backgroundColor = "rgb(123, 205, 178)"
            document.getElementById("text").innerText = "success"

        }
    

       

        //  alert(fname)
    
    }

    document.getElementById("icon").onclick = function(){
        document.getElementById("notification").style.display = "none"
    }




    // oop
// class  is a blueprints for creating objects




// class person{
//     constructor (name, country){
//        this.myname = name;
//        this.mycountry = country;
//     }
 
//  info(){
//     // alert(`my name is ${this.myname} and i am from ${this.mycountry}`)
//  }
//  }
// //  var p1 = new person ("kayode", "uk")
//  var p2 = new person ("yusuf", "nigeria")
//  var p3 = new person ()
 
//  p2.info()
// //  console.log(p2.country)
    
//  class Car extends person{
//     constructor (name, country,year, model){
//         super(name, country)
//         this.year = year;
//         this.model = model;
//     }


//     carData(){
//         alert(` my name is ${this.myname} also from ${this.mycountry} and the car i purchased is of ${this.year} ${this.model}`)
//     }
//  }

//  var c1 = new Car('kayode', 'uk', 2022, 'nissan')
//  var c2 = new Car(2020, 'camry')

//  c1.info()

//  JQuery is a javacript library that helps to write javascript in an easier way

// JQuery syntax

// $("button:nth-child(1)").click(function(){
//     alert("hello")
// })

// $("button:nth-child(1)").dblclick(function(){
//     alert("hello")
// })





