import PostEditor from "@/model/PostEditor";
import UserModel from "@/model/UserModel";


export default class PostModel {
    public id?: number
    // 첫 번쨰 유저가 최초 작성자로.. 이런거 .. 내부적으로 룰 하는것 너무 구린거 같은데.

    public editors: PostEditor []
    public title: string
    public body: string
    public tags: string []
    public createAt: string
    public updateAt: string


    public static create(id:number,title:string,body:string,
                         tag:string[],editors:PostEditor [],createAt:string, updateAt:string){
        let ret = new PostModel()
        ret.id = id
        ret.title = title
        ret.body = body
        ret.tags = tag
        ret.createAt = createAt
        ret.updateAt = updateAt
        ret.editors= editors
        return ret
    }


    public static createByView(title:string, body:string,tag?:string [], editors?: UserModel []):PostModel{
        /**
         *  화면에서 post 만들 때 사용 하는 메서드
         */
        let ret =  new PostModel()
        ret.id = null
        ret.body = body
        ret.title = title
        ret.tags = tag || []
        ret.editors = editors || []
        ret.createAt = new Date().toString() // 실제로는 사용 안하고 서버에서 저장된 시점 사용할것임
                                 // Nullable 하게 속성 정의하면, 다른곳에서 사용할 떄 귀찮아서.
        ret.updateAt = ret.createAt
        return ret
    }


}




