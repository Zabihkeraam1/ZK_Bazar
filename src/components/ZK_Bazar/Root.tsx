import {
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Outlet } from "react-router-dom";
import Nav from "./Nav.tsx";
import Logo from "./Logo.tsx";
import Aside from "./Aside.tsx";
import useStore from "./Store.ts";

function Root() {
  const { setSearchValue } = useStore();
  return (
    <>
      <Flex
        justify={"space-between"}
        zIndex={3}
        padding={"5px 5px"}
        alignItems={"center"}
        bg={"#5a5af1"}
        color={"black"}
        position={"fixed"}
        right={"-1"}
        left={"-1"}
      >
        <Logo width={"50px"} height={"50px"} />
        <HStack spacing={"12px"}>
          <InputGroup pr={{ base: "1rem" }}>
            <InputLeftElement
              pointerEvents={"none"}
              children={<SearchIcon />}
            />
            <Input
              colorScheme={"purple"}
              bg={"white"}
              placeholder={"Search..."}
              variant={"outline"}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </InputGroup>
          <Nav />
        </HStack>
      </Flex>
      <Flex
        position={"fixed"}
        zIndex={1}
        minHeight={"100vh"}
        paddingTop={"30px"}
      >
        <Aside />
      </Flex>
      <SimpleGrid
        backgroundImage={
          "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"
        }
        p={"10px"}
        minChildWidth={"200px"}
        column={[2, 4, 6]}
        marginLeft={["0", "0", "165px"]}
        paddingTop={"60px"}
      >
        <Outlet />
      </SimpleGrid>
    </>
  );
}
export default Root;
