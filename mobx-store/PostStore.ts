import React from 'react'
import { makeAutoObservable } from "mobx"

import PostModel from "@/model/PostModel";
import PostRepository from "@/repository/PostRepository";

export interface PostStore {
    submit: (dto:PostModel) => Promise<boolean>
}

class PostImp  implements PostStore{

    constructor() {
        makeAutoObservable(this)
    }

    public async submit(dto:PostModel){
        return PostRepository.createPost(dto)
    }

}

const ret:PostStore = new PostImp()

export default ret