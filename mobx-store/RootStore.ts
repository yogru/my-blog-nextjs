import { makeAutoObservable } from "mobx"
import { MobXProviderContext } from 'mobx-react';
import React from "react";

import {PostStore, PostStoreImp} from "@/mobx-store/PostStore";
import UserStoreImp ,{UserStore} from "@/mobx-store/UserStore";


export interface RootStore {
    getPostStore:()=>PostStore
    getUserStore:()=>UserStore
}


export default class RootStoreImp implements RootStore {

    private readonly postStore: PostStore
    private readonly userStore: UserStore

    constructor() {
       // makeAutoObservable(this)
        this.userStore = new UserStoreImp()
        this.postStore = new PostStoreImp(this.userStore)
    }

    public getPostStore(): PostStore {
        return this.postStore
    }

    public getUserStore():UserStore{
        return this.userStore
    }

}

export function useRootStore():RootStore{
    return React.useContext(MobXProviderContext).rootStore
}


