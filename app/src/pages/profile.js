import TweetForm from "../components/TweetForm";
import Tweets from "../sections/Tweets";
import {fetchApi} from "../utils/api/fetch";

function Profile({tweets}) {
    return (
        <div>
            <div className="border-b px-8 py-4 bg-gray-50">
                B1AfN7AgpMyctfFbjmvRAvE1yziZFDb9XCwydBjJwtRN
            </div>
            <TweetForm />
            <Tweets tweets={tweets} />
        </div>
    )
}

export async function getServerSideProps() {
    const tweets = await fetchApi("http://localhost:3000/api/tweets")
    return {
        props: {
            tweets
        }
    }
}

export default Profile