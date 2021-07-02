export default class PostModel {

    public id: number | null
    public writerId: number []
    public title: string
    public body: string
    public tag: string []
    public createAt: Date
    public updateAt: Date | null

    static createByView(title:string, body:string,tag?:string [], writerId?: number []):PostModel{
        /**
         *  화면에서 post 만들 때 사용 하는 메서드
         */
        const ret =  new PostModel()
        ret.id = null
        ret.body = body
        ret.title = title
        ret.tag = tag || []
        ret.writerId = writerId || []
        ret.createAt = new Date()
        ret.updateAt = null
        return ret
    }


}




