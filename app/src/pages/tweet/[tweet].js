import {fetchApi} from "../../utils/api/fetch";
import TweetCard from "../../components/TweetCard";

function Tweet ({tweet}) {
    return tweet ? <TweetCard tweet={tweet} /> : <div className="p-8 text-gray-500 text-center">
            Tweet not found
        </div>
}

export async function getServerSideProps ({query}) {
    const tweet = {
        topic: 'no-code',
        content: 'Octohook.com is awesome!',
        author_display: 'BnE7..NRGF',
        created_at: 'Nov 26, 2021 1:03PM',
        created_ago: '2 hours ago',
        timestamp: 1637932864,
    }
    return {
        props: {
            tweet
        }
    }
}

export default Tweet