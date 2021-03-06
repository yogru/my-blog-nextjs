import { makeAutoObservable , toJS} from "mobx"


import UserRepository, {LoginRequest} from "@/repository/UserRepository";
import UserModel from "@/model/UserModel";
import Fetcher from '@/modules/Fetcher'
import JWT from "@/modules/JWT";
import LocalStorageImp, {Localstorage} from "@/modules/Localstorage";
import RootStore from "@/mobx-store/RootStore";

export default interface UserStore {
    attemptLogin(loginRequest:LoginRequest):Promise<boolean>
    attemptLogout():void
    loadLocalStorage():void
    isLoginUser():boolean
    getUser():UserModel
}

export class UserStoreImp implements UserStore{

    private user:UserModel | null;
    private readonly rootStore:RootStore

    constructor(rootStore:RootStore) {
        this.rootStore = rootStore
        this.user = null
        makeAutoObservable(this)
    }

    public loadLocalStorage(){
        const user= UserModel.createByJwtToken()

        if(user){
            this.user = user
        }
    }

    public getUser():UserModel{
        return toJS(this.user)
    }

    public async attemptLogin(loginRequest: LoginRequest): Promise<boolean> {
        const res = await UserRepository.login(loginRequest)
        JWT.saveLocalStorage(res.token)
        this.user = UserModel.createByJwtToken()
        return true
    }

    public attemptLogout(): void {
        this.user = null
        JWT.clear()
    }

    public isLoginUser(): boolean {
        return this.user === null ? false : true;
    }

}

