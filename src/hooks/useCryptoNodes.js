import { useEffect } from "react";
import { useNodesState, useEdgesState } from "reactflow";

const useCryptoNodes = (blocks, wallets, miningData) => {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    useEffect(() => {
        setNodes((nodes) => {
            const existingBlockHash = nodes
                .filter((node) => node.type === "blockNode")
                .map((node) => node.data.hash);

            const currentWalletPublicAddress = nodes
                .filter((node) => node.type === "walletNode")
                .map((node) => node.data.publicAddress);

            const newBlocks = blocks
                .filter((block) => !existingBlockHash.includes(block.hash))
                .map((block, index) => {
                    return {
                        id: `block-${block.hash}`,
                        position: {
                            x: 400 + (existingBlockHash.length + index) * 400,
                            y: 50,
                        },
                        data: block,
                        type: "blockNode",
                        height: 400,
                        width: 100,
                    };
                });

            const existingMinerNodeIndex = nodes.findIndex(
                (node) => node.type === "minerNode"
            );
            let minerNode;
            if (existingMinerNodeIndex !== -1) {
                nodes[existingMinerNodeIndex].data = miningData;
                minerNode = nodes[existingMinerNodeIndex];
            } else {
                minerNode = {
                    id: `miner`,
                    position: {
                        x: blocks.length * 400,
                        y: 50,
                    },
                    data: miningData,
                    type: "minerNode",
                    height: 400,
                    width: 100,
                };
            }

            const newWallets = wallets
                .filter(
                    (wallet) =>
                        !currentWalletPublicAddress.includes(
                            wallet.publicAddress
                        )
                )
                .map((wallet, index) => {
                    return {
                        id: `wallet-${wallet.publicAddress}`,
                        position: {
                            x:
                                (currentWalletPublicAddress.length + index) *
                                400,
                            y: 400,
                        },
                        data: wallet,
                        type: "walletNode",
                        height: 400,
                        width: 100,
                    };
                });

            return [...nodes, ...newBlocks, ...newWallets, minerNode];
        });
        setEdges(
            blocks.map((block) => {
                if (block.preHash != 0) {
                    return {
                        id: `edge-${block.preHash}-${block.hash}`,
                        source: `block-${block.preHash}`,
                        target: `block-${block.hash}`,
                    };
                }
                return null;
            })
        );
    }, [blocks, wallets, miningData]);

    return {
        nodes,
        onNodesChange,
        edges,
        onEdgesChange,
    };
};

export default useCryptoNodes;
