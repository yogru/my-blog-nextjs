
export default class PostEditor{
    public name: string
    public email:string
    public nickName:string

    public static create(name:string, email:string, nickName:string){
        let ret = new PostEditor()
        ret.name = name
        ret.email = email
        ret.nickName = nickName
        return ret
    }

}