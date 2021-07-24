import {GetServerSidePropsContext, GetServerSideProps} from "next"

import PostViewContainer from '@/container/post-view'
import {useRootStore} from "@/mobx-store/RootStore";
import PostModel from "@/model/PostModel";
import UserModel from "@/model/UserModel";

export interface Props {
  post?:string
}

export default function PostViewPage(props:Props){
    console.log(props.post)
    const post = JSON.parse(props.post)
    return (
        <>
            {
                props.post ?  <PostViewContainer post={post} />:
                    "해당 포스트 없음 ㅋㅋ"
            }
        </>

    )
}


export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {

    const id =  context.params['id']
    const userModel = UserModel.create(1,[],
                                      "rsef013@gmail.com",
                                      "브로니","권영복")
    let post = {
        id: Number(id),
        title:"테스트 객체",
        body:"<pre>강조인가 이거??</pre>",
        editors:[userModel],
        tag:["tag1","tag2","tag3"],
        createAt:new Date(),
        updateAt:new Date()
    }

    // post = null

    const props:Props = {
      post:JSON.stringify(post)
    }

    return {
        props,
    }
}
