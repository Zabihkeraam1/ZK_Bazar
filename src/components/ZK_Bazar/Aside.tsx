import {
  Flex,
  Avatar,
  Heading,
  IconButton,
  Box,
  AbsoluteCenter,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import TypeCategory from "./TypeCategory.tsx";
import styles from "./Styles/Category.module.css";
import useStore from "./Store.ts";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { CloseIcon } from "@chakra-ui/icons";

function Aside() {
  const { setFilteredValue } = useStore();
  const [navSize, setNavSize] = useState("large");
  const logged = false;
  const navigate = useNavigate();

  return (
    <>
      <Flex
        bg={"#5a5af1"}
        flexDir={"column"}
        height={navSize == "small" ? "100vh" : ["60px", "60px", "100vh"]}
      >
        <IconButton
          display={{ base: "flex", md: "none", lg: "none" }}
          aria-label="button"
          bg={"purple"}
          mt={"30px"}
          icon={navSize == "small" ? <CloseIcon /> : <FiMenu />}
          onClick={() => {
            if (navSize === "small") {
              setNavSize("large");
            } else {
              setNavSize("small");
            }
          }}
        />
        <Flex
          bg={"#5a5af1"}
          w={
            navSize == "small"
              ? "166px"
              : { base: " 0", md: "166px", lg: "166px" }
          }
          display={navSize == "small" ? "block" : { base: "none", md: "block" }}
          flexDir={"column"}
          alignItems={"center"}
          pt={{ base: "15px", md: "54px", lg: "70px" }}
        >
          <Flex flexDir={"column"} pl={"20px"}>
            <h1 className={styles.sidebarTitle}>Category</h1>
            <TypeCategory
              value={"All"}
              id={"All"}
              label={"All"}
              name={"radio"}
              onFilter={(value) => setFilteredValue(value)}
            />
            <TypeCategory
              value={"Mobile"}
              id={"Phone"}
              label={"Phone"}
              name={"radio"}
              onFilter={(value) => setFilteredValue(value)}
            />

            <TypeCategory
              value={"Jacket"}
              id={"Jacket"}
              label={"Jacket"}
              name={"radio"}
              onFilter={(value) => setFilteredValue(value)}
            />
            <TypeCategory
              value={"Shoe"}
              id={"Shoes"}
              label={"Shoes"}
              name={"radio"}
              onFilter={(value) => setFilteredValue(value)}
            />
            <TypeCategory
              value={"Watch"}
              id={"Watch"}
              label={"Watch"}
              name={"radio"}
              onFilter={(value) => setFilteredValue(value)}
            />
          </Flex>
          <Flex flexDir={"column"} w={"100%"} alignItems={"center"} mb={4}>
            <Box position={"relative"} p={"10"}>
              <AbsoluteCenter bg={"#5a5af1"} px={"4"}>
                <b>User</b>
              </AbsoluteCenter>
            </Box>

            <Flex mt={4} align={"center"} flexDir={"column"}>
              <Avatar size={"md"} src="../../../public/Images/Profile.jpg" />
              <Flex flexDir={"column"} align={"center"}>
                <Heading as={"h3"} size={"sm"}>
                  Zabih Keraam
                </Heading>
                <Button
                  colorScheme="green"
                  mt={"10px"}
                  onClick={() =>
                    logged ? navigate("/Admin") : navigate("/LogIn")
                  }
                >
                  Profile
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
export default Aside;
