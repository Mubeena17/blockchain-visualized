import { Handle, Position } from "reactflow";
import {
    Card,
    Text,
    CardBody,
    Tag,
    Tooltip,
    TagLabel,
    Stack,
    CardHeader,
    Heading,
    Box,
    Flex,
} from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";

const BlockNode = ({ data }) => {
    return (
        <>
            <Card variant="outline">
                <CardHeader>
                    <Flex
                        alignItems={"center"}
                        justifyContent={"space-between"}
                    >
                        <Heading size="md">Block</Heading>
                        <Tooltip
                            placement="auto"
                            hasArrow
                            label="The body of a block contains transaction records. 
                                Storing these records safely is one of the priorities of the blockchain. 
                                But to be able to function in a blockchain, a block also needs a few other elements. 
                                Cryptocurrencies earned their name because they rely heavily on cryptography. 
                                In the case of blocks, the cryptographic principle used is called the hash function. 
                                A string of symbols, called a hash, is determined through a hashing algorithm. 
                                This algorithm takes all the data in a block and turns it into a unique string of symbols that serve as the block’s ID."
                            fontSize="md"
                            shouldWrapChildren
                        >
                            <FiInfo />
                        </Tooltip>
                    </Flex>
                </CardHeader>
                <CardBody>
                    <Stack spacing="16px">
                        <Box>
                            <Text fontSize="xs">Hash</Text>
                            <Tag size="md" variant="solid" colorScheme="green">
                                <TagLabel>{data.hash}</TagLabel>
                            </Tag>
                        </Box>
                        <Box>
                            <Text fontSize="xs">Previous Node Hash</Text>
                            <Tag size="md" variant="subtle" colorScheme="cyan">
                                <TagLabel>{data.preHash}</TagLabel>
                            </Tag>
                        </Box>
                        <Box>
                            <Text fontSize="xs">Nonce</Text>
                            <Tag size="md" variant="subtle" colorScheme="cyan">
                                <TagLabel>{data.nonce}</TagLabel>
                            </Tag>
                        </Box>
                        <Box>
                            <Text fontSize="xs">Transactions</Text>
                            <Stack>
                                {data.transactions.map((tx) => (
                                    <Tooltip
                                        key={tx.txid}
                                        label={JSON.stringify(tx)}
                                    >
                                        <Tag
                                            size="md"
                                            variant="subtle"
                                            colorScheme="cyan"
                                        >
                                            <TagLabel>{tx.txid}</TagLabel>
                                        </Tag>
                                    </Tooltip>
                                ))}
                            </Stack>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>

            <Handle type="source" position={Position.Right} />
            <Handle type="target" position={Position.Left} />
        </>
    );
};
export default BlockNode;
