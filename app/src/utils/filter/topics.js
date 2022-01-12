import bs58 from 'bs58'


export const topicFilter = (topic = "") => ({
    memcmp: {
        offset: 8 + // Discriminator.
            32 + // Author public key.
            8 + // Timestamp.
            4, // Topic string prefix.
        bytes: bs58.encode(Buffer.from(topic)),
    }
})

export const authorFilter = authorBase58PublicKey => ({
    memcmp: {
        offset: 8, // Discriminator.
        bytes: authorBase58PublicKey,
    }
})