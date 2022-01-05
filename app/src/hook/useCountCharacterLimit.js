import {useEffect, useState} from "react";

export const useCountCharacterLimit = (text, limit) => {
    const [characterLimit, setCharacterLimit] = useState(0)

    useEffect(() => {
        setCharacterLimit(limit - text?.length)
    }, [text, limit])


    return characterLimit
}