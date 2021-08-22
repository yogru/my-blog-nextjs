import PostEditor from "@/model/PostEditor";
import UserModel from "@/model/UserModel";


export default class PostModel {
    public id?: number
    public editor: PostEditor
    public title: string
    public body: string
    public tags: string []
    public createAt: string
    public updateAt: string


    public static create(id:number,title:string,body:string,
                         tag:string[],editor:PostEditor,createAt:string, updateAt:string):PostModel{
        let ret = new PostModel()
        ret.id = id
        ret.title = title
        ret.body = body
        ret.tags = tag
        ret.createAt = createAt
        ret.updateAt = updateAt
        ret.editor= editor
        return ret
    }


    public static createByView(title:string, body:string,tag?:string [], editor?: UserModel):PostModel{
        /**
         *  화면에서 post 만들 때 사용 하는 메서드
         */
        let ret =  new PostModel()
        ret.id = null
        ret.body = body
        ret.title = title
        ret.tags = tag || []
        ret.editor = editor
        ret.createAt = new Date().toString() // 실제로는 사용 안하고 서버에서 저장된 시점 사용할것임
                                 // Nullable 하게 속성 정의하면, 다른곳에서 사용할 떄 귀찮아서.
        ret.updateAt = ret.createAt
        return ret
    }


}




