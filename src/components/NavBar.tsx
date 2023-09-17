import React from "react";
import {
    Box,
    Flex,
    Link,
    Button,
    Menu,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Heading,
    Highlight,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

interface Props {
    children: React.ReactNode;
}

const NavLink = (props: Props) => {
    const { children } = props;

    return (
        <Box
            as="a"
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
            }}
            href={"#"}
        >
            {children}
        </Box>
    );
};

export default function Nav({ menuItems }) {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
                <Flex
                    h={16}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <img src="cryptologo.png" width="40px" />
                    <Heading
                        as="h2"
                        size="xl"
                        marginEnd={"32px"}
                        marginStart={"12px"}
                        style={{
                            fontFamily: "Quicksand",
                            fontWeight: 600,
                        }}
                    >
                        Crypto{" "}
                        <Highlight
                            query="spotlight"
                            styles={{
                                px: "2",
                                py: "1",
                                rounded: "full",
                                bg: "red.100",
                            }}
                        >
                            Playground
                        </Highlight>
                    </Heading>

                    <Flex alignItems={"center"}>
                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            spacing={2}
                        >
                            <Menu>
                                {menuItems.map((menuItem) => menuItem)}
                                <Button onClick={toggleColorMode}>
                                    {colorMode === "light" ? (
                                        <MoonIcon />
                                    ) : (
                                        <SunIcon />
                                    )}
                                </Button>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}
