import React from 'react'
import { makeAutoObservable } from "mobx"

import PostModel from "@/model/PostModel";
import PostRepository from "@/repository/PostRepository";

export interface PostStore {
    // submit: (dto:PostModel) => Promise<boolean>
    submit: (title:string, body:string) => Promise<boolean>
}

class PostImp  implements PostStore{

    constructor() {
        makeAutoObservable(this)
    }



    public async submit(title:string, body:string){

        // user-store 만들고, 이 스토어와 연결 해야함
        // 루트 스토어를 중간에 두고, 루트 스토어 통해서 user-store 얻는 방식
        // 루트 스토어는 리액트 cotext로 공유하고 ㅇㅇ
        const postModel =  PostModel.createByView(title,body)
        return  PostRepository.createPost(postModel)
    }

}

const ret:PostStore = new PostImp()

export default ret