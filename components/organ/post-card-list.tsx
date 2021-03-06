import react from 'react'
import { useRouter } from 'next/router'
import {observer} from 'mobx-react'

import PostCardList from '@/components/tissue/post-card-list'
import {Post} from "@/model/Post";
import {useRootStore} from "@/mobx-store/RootStore"

export interface Props{
    posts: Post []
}

const OPostCardList = observer((props:Props)=>{
    const router = useRouter()
    const rootStore = useRootStore()
    const postListStore = rootStore.getPostListStore()

    react.useEffect(()=>{
        postListStore.initialize(props.posts,10,0)
    },[])

    async function onClickByPostId(id_:number){
        await router.push(`/post-view/${id_}`)
    }

    async function onEndScroll(){
        await postListStore.nextPage()
    }

    return (
        <PostCardList onClickPostCard={onClickByPostId}
                          onEndScroll={onEndScroll}
                          posts={postListStore.getList()}/>
    )
})


export default OPostCardList