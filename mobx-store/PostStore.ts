import React from 'react'
import { makeAutoObservable } from "mobx"

import PostModel from "@/model/PostModel";
import PostRepository from "@/repository/PostRepository";
import {UserStore} from "@/mobx-store/UserStore";

export interface PostStore {
    // submit: (dto:PostModel) => Promise<boolean>
    submit: (title:string, body:string) => Promise<boolean>
}

export class PostStoreImp  implements PostStore{
    private readonly userStore:UserStore

    constructor(userStore:UserStore) {
        makeAutoObservable(this)
        this.userStore = userStore
    }

    public async submit(title:string, body:string){
        const userModel =  this.userStore.getUser()
        const postModel =  PostModel.createByView(title,body,[],[userModel.id])
        return  PostRepository.createPost(postModel)
    }

}

