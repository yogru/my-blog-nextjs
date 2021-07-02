import fetch from 'isomorphic-unfetch'

import PostModel from "@/model/PostModel";


export interface PostRepository {
    createPost:(postModel:PostModel)=>Promise<boolean>
}

class PostRepositoryImp implements PostRepository{

   public  baseUrl = "http://127.0.0.1:8080/post"

   public async createPost(postModel: PostModel): Promise<boolean> {
        try {
            const res =  await fetch(this.baseUrl,{ method:"POST" })
            return true
        }
        catch(e) {
            return false
        }
       // console.log("post repository...", postModel)
       return true
    }

    // public async test(): Promise<any> {
    //     try {
    //         const res =  await fetch(this.baseUrl,{method:"GET"})
    //         const ret = await res.json();
    //         return "sss";
    //     }catch (e) {
    //         console.log("hi...??",e)
    //       return null;
    //     }
    // }
}

const ret:PostRepository = new PostRepositoryImp()

export default ret;