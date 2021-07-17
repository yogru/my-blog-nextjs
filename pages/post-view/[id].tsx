import {GetServerSidePropsContext, GetServerSideProps} from "next"

import PostViewContainer from '@/container/post-view'
import {useRootStore} from "@/mobx-store/RootStore";
import PostModel from "@/model/PostModel";

export interface Props {
  post?:PostModel
}

export default function PostViewPage(props:Props){
    console.log(props.post)
    return (
        <>
            {
                props.post ?  <PostViewContainer post={props.post} />:
                    "해당 포스트 없음 ㅋㅋ"
            }
        </>

    )
}


export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {

    const id =  context.params['id']
    let post = {
        id: Number(id),
        title:"테스트 객체",
        body:"zzz",
        editors:[1,2,3],
        tag:["tag1","tag2","tag3"],
    }

    // post = null

    const props:Props = {
      post
    }

    return {
        props,
    }
}
