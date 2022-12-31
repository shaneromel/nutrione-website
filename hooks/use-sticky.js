import { useEffect, useState } from "react";

const useSticky = () => {
    const [headerSticky,setHeaderSticky] = useState(false);

    const stickyHeader = () => {
        if(window.scrollY > 80){
            setHeaderSticky(true)
        }
        else{
            setHeaderSticky(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',stickyHeader)
    },[]);

    return {
        headerSticky,
    }

}

export default useSticky;