import { makeAutoObservable } from "mobx"

import PostModel from "@/model/PostModel";
import PostRepository from "@/repository/PostRepository";
import RootStore from "@/mobx-store/RootStore";

export default interface PostStore {
    submit: (title:string, body:string) => Promise<boolean>
}

export class PostStoreImp  implements PostStore{
    private readonly rootStore:RootStore

    constructor(rootStore:RootStore) {
        makeAutoObservable(this)
        this.rootStore = rootStore
    }

    public async submit(title:string, body:string){
        const userModel =  this.rootStore.getUserStore().getUser()
        const postModel =  PostModel.createByView(title,body,[],userModel)
        return  PostRepository.createPost(postModel)
    }

}

