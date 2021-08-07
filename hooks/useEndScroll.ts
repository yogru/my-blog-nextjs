import {useEffect, useState} from "react";


function isScrollEnd(caller:()=>Promise<void>){
    return function __isScrollEnd__(){
        const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)
        const scrollTop = Math.max(document.documentElement.scrollTop,document.body.scrollTop)
        const clientHeight = document.documentElement.clientHeight

        if(scrollTop+clientHeight >= scrollHeight){
            caller().catch(e=>console.log(e))
        }
    }
}


export default function UseEndScroll(caller:()=>Promise<void>){
    if (typeof window === 'undefined') return

    useEffect(()=>{
        const call = isScrollEnd(caller)
        window.addEventListener('scroll',call,true)
        return ()=>{
            window.removeEventListener('scroll',call)
        }
    },[window,caller])

}