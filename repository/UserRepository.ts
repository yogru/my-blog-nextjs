import fetcher from '@/modules/Fetcher'
import UserModel from "@/model/UserModel";


export class LoginResponse {
    public token:string
}

export class LoginRequest {
    email:string
    password:string
}


export interface UserRepository {
    login(loginReq):Promise<LoginResponse>
    getUserByEmail(email:string):Promise<UserModel | null>
}


class UserRepositoryImp implements UserRepository {
    public  baseUrl = "http://127.0.0.1:8080/users"

    public async login(loginReq:LoginRequest): Promise<LoginResponse> {
         return  fetcher.post<LoginRequest,LoginResponse>(this.baseUrl+"/login",loginReq)
    }

    public async getUserByEmail(email:string):Promise<UserModel | null >{
        try {
            const res = await fetcher.get(this.baseUrl,{"email":email});
            if(!res.ok)return null
            const json = await res.json()
            return UserModel.createByJson(json);
        }catch (e){
            return  null
        }
    }

}


export default new UserRepositoryImp()
