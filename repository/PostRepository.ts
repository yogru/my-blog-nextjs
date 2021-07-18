import PostModel from "@/model/PostModel";
import fetch from '@/modules/Fetcher'

export interface PostRepository {
    createPost:(postModel:PostModel)=>Promise<boolean>
    findById:(id:number)=>Promise<PostModel | null>
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
          const post = await fetch.get(this.baseUrl ,{id})
        }catch (e){
           return null
        }
    }

}

const ret:PostRepository = new PostRepositoryImp()

export default ret;