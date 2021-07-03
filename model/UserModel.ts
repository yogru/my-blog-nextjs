import {LoginResponse} from "@/repository/UserRepository";

export default class UserModel {
    public email:string
    public nickName:string | null

    /**
     * 나중에 권한 같은것도 필요할듯?
     */

    static createByLoginResponse(res:LoginResponse):UserModel{
        let ret = new UserModel()
        ret.email = res.email
        return ret;
    }
}