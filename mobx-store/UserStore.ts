import { makeAutoObservable } from "mobx"

import UserRepository, {LoginRequest} from "@/repository/UserRepository";
import UserModel from "@/model/UserModel";
import Fetcher from '@/modules/Fetcher'
import JWT from "@/modules/JWT";


export interface UserStore {

    /**
     *  현재 로그인한 사용자의 아이디 가져온다.
     */
    getCurrentUserId():number | null

    attemptLogin(loginRequest:LoginRequest):Promise<void>

    attemptLogout():void

}

export default class UserStoreImp implements UserStore{

    private user:UserModel | null;

    constructor() {
        this.user = null
        makeAutoObservable(this)
    }

    public getCurrentUserId(): number {
        // "stub"
        return 1
    }

    public async attemptLogin(loginRequest: LoginRequest): Promise<void> {
        const res = await UserRepository.login(loginRequest)
        this.user = UserModel.createByLoginResponse(res)
        console.log(this.user," 로그인 유저 ", res)
        // 이 부분이 좀 많이 구리다...
        Fetcher.setJwt(new JWT(res.token))
    }

    public attemptLogout(): void {
        this.user = null
        Fetcher.setJwt(null)
    }

}

