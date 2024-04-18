import { Link } from "react-router-dom";
import {
  Tab,
  TabList,
  Tabs,
  Avatar,
  AvatarBadge,
  Text,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Box,
  MenuGroup,
} from "@chakra-ui/react";
import useStore from "./Store";
import { ExternalLinkIcon, HamburgerIcon, UnlockIcon } from "@chakra-ui/icons";

function Nav() {
  const { badgeCounter } = useStore();
  return (
    <>
      <Tabs variant={"soft-rounded"} display={{ base: "none", md: "block" }}>
        <TabList>
          <Tab _selected={{ color: "white" }}>
            <Link to={"/Main"}>Main</Link>
          </Tab>
          <Tab _selected={{ color: "white" }}>
            <Link to={"/LogIn"}>Login</Link>
          </Tab>
          <Tab _selected={{ color: "white" }}>
            <Link to={"/Shopping_Cart"}>
              <Avatar src="../../../public/Images/Profile.jpg" size={"sm"}>
                <AvatarBadge
                  width={"1.3em"}
                  bg={"teal.500"}
                  borderColor={"teal.500"}
                >
                  <Text fontSize={"xs"}>{badgeCounter}</Text>
                </AvatarBadge>
              </Avatar>
            </Link>
          </Tab>
        </TabList>
      </Tabs>
      <Box display={{ base: "block", md: "none" }} mr={"15px"}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuGroup title="Easy & Fast">
              <MenuItem icon={<HamburgerIcon />} as={"a"} href="/Main">
                <Link to={"/Main"}>Main</Link>
              </MenuItem>
              <MenuItem icon={<UnlockIcon />} as={"a"} href="/LogIn">
                <Link to={"/LogIn"}>Login</Link>
              </MenuItem>
              <MenuItem
                icon={<ExternalLinkIcon />}
                as={"a"}
                href="/Shopping_Cart"
              >
                <Link to={"/Shopping_Cart"}>Shopping Card</Link>
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Box>
    </>
  );
}
export default Nav;
