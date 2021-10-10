import { makeAutoObservable } from "mobx"

import {Post} from "@/model/Post";
import RootStore from "@/mobx-store/RootStore";
import postRepository from "@/repository/PostRepository";
import PostSearchCondition from '@/model/PostSearchCondition'
import {PageRequest,PageResponse} from "@/model/Paging";


export default interface PostListStore {
    initialize(loadedPosts:Post [], perPage:number, page:number)
    getList():Post[]
    nextPage():Promise<void>
    setPerPage(perPage:number):void
    getCurrentPage():number
}


export class PostListStoreImp implements PostListStore {
    private readonly rootStore:RootStore
    private posts: Post []
    private perPage:number
    private page:number


    constructor(rootStore:RootStore) {
        this.rootStore = rootStore
        this.posts = []
        this.perPage = 10
        this.page = 0
        makeAutoObservable(this)
    }

    public initialize(loadedPosts:Post [], perPage:number, page:number ){
        this.posts = loadedPosts
        this.perPage = perPage
        this.page = page
    }

    public getList(): Post[] {
        return this.posts
    }

    public async nextPage(): Promise<void> {
        this.page += 1
        const ret = await postRepository.search(null,new PageRequest(this.page,this.perPage+10))
        console.log(ret,this.page)
        return Promise.resolve()
    }

    public setPerPage(perPage:number) {
        this.perPage = perPage
    }

    public getCurrentPage(): number {
        return this.page
    }


}