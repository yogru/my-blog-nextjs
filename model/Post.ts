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
}


