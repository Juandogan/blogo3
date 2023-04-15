export class UserLogin {
    public user = {
        email:'',
        password:'',
        role:''
    }

    constructor(email="", password="", role ="" )     {

        this.email = email
        this.password = password
        this.role = role
    }

    password:string
    email:string
    role:string


}



