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
    private isNextPage:boolean
    private isLoading:boolean


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
        this.isNextPage = true
        this.isLoading = false
    }

    public getList(): Post[] {
        return this.posts
    }

    public async nextPage(): Promise<void> {
        console.log("뭐지??",this.page, this.isNextPage)
        if(!this.isNextPage)return
        if(this.isLoading)return
        console.log("한번만..",this.page, this.isNextPage)
        this.isLoading = true

        const json = await postRepository.search(null,new PageRequest(this.page+1,this.perPage))
        console.log(json)
        const contents = json['contents'].map((obj)=>new Post(obj))
        // const totalPage = parseInt(json['totalPage'],10)
        const isNextPage = json['next']
        const retPageReq = new PageRequest(parseInt(json['currentPage'],10),
            parseInt(json['perPage'],10))

        this.posts = [...this.posts,...contents]
        this.page = retPageReq.page
        this.isNextPage = isNextPage
        this.isLoading = false
    }

    public setPerPage(perPage:number) {
        this.perPage = perPage
    }

    public getCurrentPage(): number {
        return this.page
    }


}