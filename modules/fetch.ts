import fetch from 'isomorphic-unfetch'

export interface method{
    <T,U>(url:string,data:T):Promise<U>
}

export  async function post<T,U>(url:string,data:T):Promise<U>{
   const ret =  await fetch(url,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(data)
    })
    return ret.json()
}



