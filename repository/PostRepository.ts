import PostModel from "@/model/PostModel";
import fetch from '@/modules/Fetcher'
import PostEditor from "@/model/PostEditor";
import Pageable from "@/model/Pageable";
import PostSearchCondition from "@/model/PostSearchCondition";
import PageResponse from "@/model/PageResponse";

export interface PostRepository {
    createPost:(postModel:PostModel)=>Promise<boolean>
    findById:(id:number)=>Promise<PostModel | null>
    search:(condition?:PostSearchCondition, pageRequest?:Pageable)=> Promise< PageResponse<PostModel> >
}

class PostRepositoryImp implements PostRepository{

   public  baseUrl = "http://127.0.0.1:8080/post"

   public async createPost(postModel: PostModel): Promise<boolean> {
        try {
            console.log(postModel)
            const res =  await fetch.post(this.baseUrl,postModel)
            console.log(res)
            return true
        }
        catch(e) {
            return false
        }
       return true
   }

    public async findById(id: number): Promise<PostModel | null> {
       if(!Number.isInteger(id))return null
        try {
            const post = await fetch.get(this.baseUrl + `/${id}`)
            if(!post.ok) return null
            const json:any =  await post.json()
            const postEditors = json.editors.map((e)=>PostEditor.create(e.name,e.email,e.nickName))
            return PostModel.create(id,json.title,json.body,json.tags,postEditors,json.createAt,json.updateAt)
        }catch (e){
           return null
        }
    }


    public async search(condition?:PostSearchCondition ,pageRequest?:Pageable): Promise<PageResponse<PostModel>>{
       try {
            // parameter 는 나중으로 일단..
            const res = await fetch.get(this.baseUrl+"/list")
            if(!res.ok)return null
           const json:any = await res.json();
           console.log(json)
           return json
       }catch (e){
           console.log(e," error..")
           return null
       }
    }

}

const ret:PostRepository = new PostRepositoryImp()

export default ret;