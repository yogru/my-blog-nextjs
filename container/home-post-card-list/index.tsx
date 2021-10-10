import { useRouter } from 'next/router'

import HomePostCardList from "@/component/post-card-list";
import PostModel from "@/model/PostModel";

export interface Props{
    posts: PostModel []
}

function HomePostCardListContainer(props:Props){
    const router = useRouter()

    async function onClickByPostId(id_:number){
        await router.push(`/post-view/${id_}`)
    }

    async function onEndScroll(){
        console.log("zzz")
    }

    return (
        <HomePostCardList onClickPostCard={onClickByPostId}
                          onEndScroll={onEndScroll}
                          posts={props.posts}/>
    )
}

export default HomePostCardListContainer