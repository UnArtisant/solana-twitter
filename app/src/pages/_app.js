import '../styles/globals.css'
import '@solana/wallet-adapter-react-ui/styles.css'
import Layout from "../sections/Layout";
import {useMemo} from "react";
import {WalletProvider, ConnectionProvider} from '@solana/wallet-adapter-react';
import {PhantomWalletAdapter, SolflareWalletAdapter} from "@solana/wallet-adapter-wallets";
import {WalletAdapterNetwork} from "@solana/wallet-adapter-base";
import {clusterApiUrl} from "@solana/web3.js";
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(localizedFormat)
dayjs.extend(relativeTime)

function MyApp({Component, pageProps}) {

    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
    const network = WalletAdapterNetwork.Devnet;

    // You can also provide a custom RPC endpoint.
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
            new SolflareWalletAdapter(),
        ],
        [network]
    );

    return <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
        </WalletProvider>
    </ConnectionProvider>
}

export default MyApp
