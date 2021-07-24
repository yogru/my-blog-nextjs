import {LoginResponse} from "@/repository/UserRepository";
import JWT from "@/modules/JWT";

export default class UserModel {
    public id:number
    public roles:string []
    public email:string
    public nickName:string | null
    public name:string


    // public toJson(){
    //     return {
    //         id:this.id,
    //         roles:this.roles,
    //         email:this.email,
    //         nickName:this.nickName,
    //         name:this.name
    //     }
    // }



    static create(id:number,roles:string[],email:string,nickName:string,name:string):UserModel {
        const ret = new UserModel()
        ret.id = id
        ret.roles = [...roles]
        ret.email = email
        ret.nickName = nickName
        ret.name = name
        return ret
    }


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
}