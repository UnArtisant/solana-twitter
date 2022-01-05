export default function tweets(req, res) {

    if (req.method === 'GET') {
        res.status(200).json([
            {
                topic: 'solana',
                content: 'gm',
                author_display: 'B1Af..wtRN',
                created_at: 'Nov 26, 2021 1:03PM',
                created_ago: 'just now',
                timestamp: 1637932864,
            },
            {
                topic: 'no-code',
                content: 'Octohook.com is awesome!',
                author_display: 'BnE7..NRGF',
                created_at: 'Nov 26, 2021 1:03PM',
                created_ago: '2 hours ago',
                timestamp: 1637932864,
            },
            {
                topic: '',
                content: 'Just setting up my Solana twttr',
                author_display: 'B1Af..wtRN',
                created_at: 'Nov 26, 2021 1:03PM',
                created_ago: '2 days ago',
                timestamp: 1637932864,
            },
        ])
    } else if(req.method === "POST") {
        res.status(201).json({
            topic: req.body.topic,
            content: req.body.content,
            author_display: 'B1Af..wtRN',
            created_at: 'Nov 26, 2021 1:03PM',
            created_ago: 'just now',
            timestamp: 1637932868,
        })
    }

}