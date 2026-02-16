export class User {
    public username:string = "";
    private password:string = "";
    private LOGIN_ATTEMPTS:number = 0;
    constructor(usernames:string,passwords:string){
        this.username = usernames;
        this.password = passwords;
    }
    public login(password:string):boolean{
        this.LOGIN_ATTEMPTS++
        return this.validatePassword(password);
    }
    private validatePassword(password:string):boolean{
        return this.password === password;
    }
    public getLoginAttempts():number{
        return this.LOGIN_ATTEMPTS;
    }
}
