import { makeAutoObservable } from "mobx"
import { MobXProviderContext } from 'mobx-react';
import React from "react";

import PostStore, {PostStoreImp} from "@/mobx-store/PostStore";
import UserStore ,{UserStoreImp} from "@/mobx-store/UserStore";
import PostListStore,{PostListStoreImp} from "@/mobx-store/PostListStore";

export default interface RootStore {
    getPostStore:()=>PostStore
    getUserStore:()=>UserStore
    getPostListStore:()=>PostListStore
}


export class RootStoreImp implements RootStore {

    private readonly postStore: PostStore
    private readonly userStore: UserStore
    private readonly postListStore: PostListStore

    constructor() {
       // makeAutoObservable(this)
        this.userStore = new UserStoreImp(this)
        this.postStore = new PostStoreImp(this)
        this.postListStore = new PostListStoreImp(this)
    }

    public getPostStore(): PostStore {
        return this.postStore
    }

    public getUserStore():UserStore{
        return this.userStore
    }

    public getPostListStore():PostListStore{
        return this.postListStore
    }

}

export function useRootStore():RootStore{
    return React.useContext(MobXProviderContext).rootStore
}


