import {useState} from "react";
import {useRouter} from "next/router";

function TweetSearch({modelValue = "",placeholder = "",disabled = false, children}) {
    const [search, setSearch] = useState(modelValue)
    const router = useRouter()

    const handleClick = async () => {
        router.push(`${router.pathname}/${search}`);
    }

    return <div className="relative border-b">
        <input
            type="text"
            className="text-gray-700 w-full pl-16 pr-32 py-4 bg-gray-50"
            placeholder={placeholder}
            value={search}
            onChange={e => setSearch(e.target.value)}
        />
        <div className={`absolute left-0 inset-y-0 flex items-center justify-center pl-8 pr-2 ${search ? "text-gray-700" : "text-gray-400"}`}>
            {children}
        </div>
        <div className="absolute right-0 inset-y-0 flex items-center pr-8">
            <button
                onClick={handleClick}
                disabled={disabled}
                className={`rounded-full px-4 py-1  font-semibold ${!disabled ? 'text-gray-700 bg-gray-300 hover:bg-gray-400 hover:text-white' : 'text-gray-400 bg-gray-200 cursor-not-allowed'}`}
            >
                Search
            </button>
        </div>
    </div>
}

export default TweetSearch