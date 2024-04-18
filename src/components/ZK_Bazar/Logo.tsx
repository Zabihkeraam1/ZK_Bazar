import logo from "./logo/Logo Files/Black logo - no background.svg";
import { HStack, Image, Text } from "@chakra-ui/react";
interface Props {
  width: string;
  height: string;
}
function Logo({ width, height }: Props) {
  const style = {
    width: `${width}`,
    height: `${height}`,
  };
  return (
    <>
      <HStack sx={style} pl={"12px"}>
        <Image src={logo} alt="logo" />
        <Text
          fontSize={"18px"}
          fontWeight={700}
          display={{ base: "none", md: "block", lg: "block" }}
        >
          Easy&Fast
        </Text>
      </HStack>
    </>
  );
}
export default Logo;
