import fetch from 'isomorphic-unfetch'


import PostModel from "@/model/PostModel";

export interface PostRepository {
    createPost:(postModel:PostModel)=>Promise<boolean>
}

class PostRepositoryImp implements PostRepository{

   public  baseUrl = "/post"

   public async createPost(postModel: PostModel): Promise<boolean> {
        try {
            const res =  await fetch(this.baseUrl,{method:"POST"})
            return true
        }
        catch(e) {
            return false
        }
    }

}

const ret:PostRepository = new PostRepositoryImp()

export default ret;