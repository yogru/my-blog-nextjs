import PostEditor from "@/model/PostEditor";

export default class PostSummaryModel {

    public postId:number
    public title:string
    public tags:string[]
    public createAt: string
    public updateAt: string
    public mainEditor:PostEditor


    public static create(postId:number, title:string,tags:string[], mainEditor:PostEditor):PostSummaryModel{
        let ret = new PostSummaryModel()
        ret.postId = postId
        ret.title = title
        ret.tags = tags
        ret.mainEditor = mainEditor
        return ret
    }
}