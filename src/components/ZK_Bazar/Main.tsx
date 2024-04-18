import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Image,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";
import useStore from "./Store.ts";
import { Data } from "./Data/Data.ts";

function Main() {
  const toast = useToast();
  const { filteredValue, setBadgeCounter, setCardId } = useStore();
  const filteredResponse =
    filteredValue === "All"
      ? Data
      : Data.filter((e) => e.Type === filteredValue);
  const handleClick = (cartId: string) => {
    setBadgeCounter(true);
    toast({
      title: "Added",
      description: "Your Order has been Added!",
      status: "info",
      duration: 1000,
      isClosable: true,
      position: "top",
    });
    setCardId(cartId);
  };

  return (
    <>
      <SimpleGrid spacing={3} minChildWidth={"220px"}>
        {filteredResponse &&
          filteredResponse.map((item) => (
            <Card key={item.ID} size={"sm"}>
              <CardHeader>
                {<Image src={item.Address} objectFit={"cover"} />}
              </CardHeader>
              <CardBody
                backgroundColor={"lightskyblue"}
                borderBottomRadius={"8px"}
              >
                {
                  <div>
                    <h1>Description: {item.Description}</h1>
                    <b>Price: {item.Price}$</b>
                  </div>
                }
              </CardBody>
              <CardFooter justify={"flex-end"}>
                {
                  <HStack>
                    <Button colorScheme={"facebook"}>Like</Button>
                    <Button
                      colorScheme={"twitter"}
                      onClick={() => handleClick(item.ID)}
                    >
                      Add to Card
                    </Button>
                  </HStack>
                }
              </CardFooter>
            </Card>
          ))}
      </SimpleGrid>
    </>
  );
}
export default Main;
