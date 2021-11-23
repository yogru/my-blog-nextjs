import { makeAutoObservable } from "mobx"

import {Post} from "@/model/Post";
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

        // 태그가 없을 땐 none으로 설정.록
        const postModel = new Post({
            title,body,tags:["none"], editor:userModel
        })
        // PostModel.createByView(title,body,[],userModel)
        return  PostRepository.createPost(postModel)
    }

}

