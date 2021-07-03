import Button from "@material-ui/core/Button";

import Fetcher from "@/modules/Fetcher";


export default function Test(){



    return (
        <Button
        onClick={()=>{
            Fetcher.get("http://127.0.0.1:8080/users/hello",{})
        }}
        >
            121212
        </Button>
    )

}