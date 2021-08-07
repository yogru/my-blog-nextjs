import {LoginResponse} from "@/repository/UserRepository";
import JWT from "@/modules/JWT";

export default class UserModel {
    public roles:string []
    public email:string
    public nickName:string | null
    public name:string
    public selfIntroductions:string
    public homepageUrl:string
    public githubUrl:string


    static create(roles:string[],email:string,nickName:string,name:string,
                  selfIntroductions:string,homepageUrl:string,
                  githuburl:string):UserModel {
        const ret = new UserModel()
        ret.roles = [...roles]
        ret.email = email
        ret.nickName = nickName
        ret.name = name
        ret.selfIntroductions = selfIntroductions
        ret.homepageUrl = homepageUrl
        ret.githubUrl = githuburl
        return ret
    }





    static createByJwtToken():UserModel{
        const decoded = JWT.getDecode()
        const ret = new UserModel()
        if(!decoded)return null


        ret.name= decoded.name
        ret.email= decoded.email
        ret.roles = decoded.roles
        ret.nickName = decoded.nickName
        ret.selfIntroductions = decoded.selfIntroductions
        ret.homepageUrl = decoded.homepageUrl
        ret.githubUrl = decoded.githuburl
        return ret
    }

    /**
     * 나중에 권한 같은것도 필요할듯?
     */
}