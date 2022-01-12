import {useAnchorWallet} from "@solana/wallet-adapter-react";
import {Connection, PublicKey} from "@solana/web3.js";
import { Provider, Program } from '@project-serum/anchor'
import idl from '../../../target/idl/solana_twitter.json'

export function useWorkspace () {
    const wallet = useAnchorWallet()
    const connection = new Connection('http://127.0.0.1:8899')

    const programID = new PublicKey(idl.metadata.address)

    const provider = new Provider(connection, wallet)
    const program = new Program(idl, programID, provider)

    return {wallet, connection, programID, provider, program}
}