import {IsEmail, IsArray, Length, MaxLength} from "class-validator"
import JWT from "@/modules/JWT";

export default class UserModel {

    @IsArray()
    public roles:string []

    @IsEmail()
    public email:string

    @Length(1,30)
    public nickName:string | null

    @Length(2,30)
    public name:string

    @MaxLength(255)
    public selfIntroductions:string

    @MaxLength(255)
    public homepageUrl:string

    @MaxLength(255)
    public githubUrl:string


    static createByJson(json:any):UserModel{
        let ret:UserModel = json.data;
        ret.selfIntroductions ||=`안녕하세요! ${ret.nickName} 입니다.`
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
        ret.githubUrl = decoded.githubUrl
        return ret
    }

}