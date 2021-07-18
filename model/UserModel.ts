import {LoginResponse} from "@/repository/UserRepository";
import JWT from "@/modules/JWT";

export default class UserModel {
    public id:number
    public roles:string []
    public email:string
    public nickName:string | null
    public name:string


    static createByJwtToken():UserModel{
        const decoded = JWT.getDecode()
        const ret = new UserModel()
        if(!decoded)return null

        ret.id = decoded.id
        ret.name= decoded.name
        ret.email= decoded.email
        ret.roles = decoded.roles
        ret.nickName = decoded.nickName
        return ret
    }

    /**
     * 나중에 권한 같은것도 필요할듯?
     */

    // static createByLoginResponse(res:LoginResponse):UserModel{
    //     let ret = new UserModel()
    //     ret.email = res.email
    //     return ret;
    // }
}