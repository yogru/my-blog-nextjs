export class Editor{
    public name: string
    public email:string
    public nickName:string

    constructor(obj:any) {
        this.name = obj['name']
        this.email = obj['email']
        this.nickName = obj['nickName']
    }
}

export class PostSummary {
    public id?:number
    public editor: Editor
    public title: string
    public tags: string []
    public deleted:boolean
    public createAt: string
    public updateAt: string


    constructor(obj:any) {
        this.id = obj['id']
        this.title = obj['title']
        this.deleted = obj['deleted']
        this.tags = obj['tags']
        this.createAt = obj['createAt']
        this.updateAt = obj['updateAt']
        this.editor = new Editor(obj['editor'])
    }

}


export class Post extends PostSummary {
    public body

    constructor(obj:any) {
        super(obj);
        this.body = obj['body']
    }


    // public static create(id:number,title:string,body:string,
    //                      tag:string[],editor:Editor,createAt:string, updateAt:string):Post{
    //     let ret = new Post()
    //     ret.id = id
    //     ret.title = title
    //     ret.body = body
    //     ret.tags = tag
    //     ret.createAt = createAt
    //     ret.updateAt = updateAt
    //     ret.editor= editor
    //     return ret
    // }


    // public static createByView(title:string, body:string,tag?:string [], editor?: UserModel):Post{
    //     /**
    //      *  화면에서 post 만들 때 사용 하는 메서드
    //      */
    //     let ret =  new Post()
    //     ret.id = null
    //     ret.body = body
    //     ret.title = title
    //     ret.tags = tag || []
    //     ret.editor = editor
    //     ret.createAt = new Date().toString() // 실제로는 사용 안하고 서버에서 저장된 시점 사용할것임
    //     // Nullable 하게 속성 정의하면, 다른곳에서 사용할 떄 귀찮아서.
    //     ret.updateAt = ret.createAt
    //     return ret
    // }


}


