import { makeAutoObservable , toJS} from "mobx"


import UserRepository, {LoginRequest} from "@/repository/UserRepository";
import UserModel from "@/model/UserModel";
import Fetcher from '@/modules/Fetcher'
import JWT from "@/modules/JWT";
import LocalStorageImp, {Localstorage} from "@/modules/Localstorage";


export interface UserStore {


    attemptLogin(loginRequest:LoginRequest):Promise<boolean>

    attemptLogout():void

    loadLocalStorage():void

    isLoginUser():boolean

    getUser():UserModel
}

export default class UserStoreImp implements UserStore{

    private user:UserModel | null;
    private lcs:Localstorage

    constructor() {
        this.lcs = new LocalStorageImp("auth_jwt_key")
       // const jwt = new JWT(this.lcs.get())
        this.user = null
        // UserModel.createByJwtToken(jwt)
        makeAutoObservable(this)
    }

    public loadLocalStorage(){
        const jwt = new JWT(this.lcs.get())
        const user= UserModel.createByJwtToken(jwt)
        if(user){
            Fetcher.setJwt(jwt)
            this.user = user
        }
    }

    public getUser():UserModel{
        return toJS(this.user)
    }


    public async attemptLogin(loginRequest: LoginRequest): Promise<boolean> {
        const res = await UserRepository.login(loginRequest)
        const jwt = new JWT(res.token)
        this.user = UserModel.createByJwtToken(jwt)
        this.lcs.set(res.token)
        // 이 부분이 좀 많이 구리다...
        Fetcher.setJwt(jwt)
        return true
    }

    public attemptLogout(): void {
        this.user = null
        this.lcs.clear()
        Fetcher.setJwt(null)
    }

    public isLoginUser(): boolean {
        return this.user === null ? false : true;
    }

}

