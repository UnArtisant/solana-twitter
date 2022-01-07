import TweetSearch from "../../components/TweetSearch";
import Tweets from "../../sections/Tweets";
import {fetchApi} from "../../utils/api/fetch";

function Author ({tweets}) {
    return <>
        <TweetSearch placeholder="public key" >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>
            </svg>
        </TweetSearch>
        {tweets.length ? <Tweets tweets={tweets} /> : <div className="p-8 text-gray-500 text-center">
            User not found...
        </div>}
    </>
}

export async function getServerSideProps ({query}) {
    const tweets = await fetchApi("http://localhost:3000/api/tweets")
    return {
        props: {
            tweets
        }
    }
}

export default Author