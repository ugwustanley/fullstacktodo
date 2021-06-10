const element = (id) => document.getElementById(id) 

class UserRegister {

    constructor(firstName , lastName , email , username , password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.password = password;
    }

    verifyUser(){
        if(typeof this.firstName !== "string") return false;
        if(typeof this.lastName !== "string") return false;
        if(this.password.length < 6) return false;
        const regex = /[A-Za-z1-9]+@[A-Za-z1-9]+\.[A-Za-z1-9]/g;
        const emailTest = regex.test(this.email)
        if(!emailTest) return false;
        if(!this.firstName || !this.lastName || !this.password || !this.username || !this.email) return false
        return true;
    }
    returnJson(){
        const json = {
            firstName : this.firstName,
            lastName  : this.lastName,
            email     : this.email,
            username  : this.username,
            password  : this.password
        }

        return json
    }
}

class UserLogin {

    constructor(username , password){

        this.username = username;
        this.password = password;
    }

    verifyUser(){
       
        if(this.password.length < 6) return false;
        if(!this.password || !this.username) return false;
    
        return true;
    }
    returnJson(){
        const json = {
            username  : this.username,
            password  : this.password
        }

        return json
    }
}


//register user
function registerUser(Event){
    Event.preventDefault()
     const firstName = element("firstName").value
     const lastName = element("lastName").value
     const email = element("email").value
     const username = element("username").value
     const password = element("password").value
  
     const userRegister = new UserRegister(firstName , lastName , email , username , password)
     
     const verified = userRegister.verifyUser()

     if(!verified){
         console.log("The inputed credentials are incorrect or incomplete")
     }
    if(verified){
        const json = userRegister.returnJson()
        console.log(json)
    }
   
}

//login function 
function loginUser(Event){
    Event.preventDefault()
     const username = element("username").value
     const password = element("password").value
  
     const userLogin = new UserLogin( username , password)
     
     const verified = userLogin.verifyUser()
     console.log(verified)
     if(!verified){
         console.log("The inputed credentials are incorrect or incomplete")
     }
    if(verified){
        const json = userLogin.returnJson()
        console.log(json)
    }
   
}