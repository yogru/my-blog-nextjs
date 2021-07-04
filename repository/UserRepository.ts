import fetcher from '@/modules/Fetcher'


export class LoginResponse {
    public token:string
}

export class LoginRequest {
    email:string
    password:string
}


export interface UserRepository {
    login(loginReq):Promise<LoginResponse>
}


class UserRepositoryImp implements UserRepository {
    public  baseUrl = "http://127.0.0.1:8080/users"

    public async login(loginReq:LoginRequest): Promise<LoginResponse> {
         return  fetcher.post<LoginRequest,LoginResponse>(this.baseUrl+"/login",loginReq)
    }
}


export default new UserRepositoryImp()
