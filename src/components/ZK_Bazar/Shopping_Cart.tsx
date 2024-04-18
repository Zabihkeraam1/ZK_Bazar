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
  Box,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useStore from "./Store.ts";
import { DeleteIcon, AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Data } from "./Data/Data.ts";
function Shopping_Cart() {
  const toast = useToast();
  const { cardId, filteredValue, removeFromCard, setBadgeCounter } = useStore();
  const [totalPrice, setTotalPrice] = useState(0);
  const [valueStateChanged, setValueStateChanged] = useState(false);
  const [orderAmount, setOrderAmount] = useState([
    {
      id: "",
      amount: 1,
    },
  ]);

  useEffect(() => {
    filteredCard.forEach((element) => {
      orderAmount.push({ id: element.ID, amount: 1 });
    });
  }, []);
  const filteredCard = Data.filter((e) => cardId.includes(e.ID));
  const typeFiltered =
    filteredValue === "All"
      ? filteredCard
      : filteredCard.filter((e) => e.Type === filteredValue);

  const initialPrices = typeFiltered.reduce(
    (sum, card) => sum + parseInt(card.Price),
    0
  );

  const handleAdd = (cardId: string, price: string) => {
    if (valueStateChanged === false) {
      setTotalPrice(initialPrices);
    }
    setBadgeCounter(true);

    setTotalPrice((prevTotalPrice) => prevTotalPrice + parseInt(price));
    setValueStateChanged(true);

    const updatedOrderAmount = orderAmount.map((element) => {
      if (element.id === cardId) {
        let initailAmount = element.amount;
        initailAmount++;
        return { id: cardId, amount: initailAmount };
      } else {
        return element;
      }
    });
    setOrderAmount(updatedOrderAmount);
    toast({
      title: "Added",
      description: "Item quantity increased!",
      status: "success",
      duration: 1000,
      isClosable: true,
      position: "top",
    });
  };

  const handleMinus = (cardId: string, price: string) => {
    setBadgeCounter(false);

    if (totalPrice !== 0) {
      setTotalPrice((prevTotalPrice) => prevTotalPrice - parseInt(price));
      setValueStateChanged(true);
    }

    const updatedOrderAmount = orderAmount.map((element) => {
      if (element.id === cardId) {
        let initailAmount = element.amount;
        initailAmount--;
        return { id: cardId, amount: initailAmount };
      } else {
        return element;
      }
    });
    setOrderAmount(updatedOrderAmount);
    const numberOfCard = cardAmount(cardId);
    if (numberOfCard === 1) {
      removeFromCard(cardId);
      toast({
        title: "Deleted!",
        description: "Order quantity deleted!",
        status: "warning",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    } else {
      toast({
        title: "Removed",
        description: "Item removed from cart!",
        status: "info",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const handleDelete = (id: string, price: string) => {
    const numberOfCard = cardAmount(id);
    if (valueStateChanged === false) {
      setTotalPrice(initialPrices);
    }

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice - parseInt(price) * numberOfCard
    );
    setValueStateChanged(true);
    removeFromCard(id);
    toast({
      title: "Deleted",
      description: "Item deleted from cart!",
      status: "warning",
      duration: 1000,
      isClosable: true,
      position: "top",
    });
  };
  const cardAmount = (cardId: string): number => {
    let a: number = 1;
    orderAmount.map((item) => {
      if (item.id === cardId) {
        a = item.amount;
        return item.amount;
      }
    });
    return a;
  };

  return (
    <>
      <SimpleGrid flexDir={"column"} height={"100%"}>
        <Flex
          justifyContent={"center"}
          flexDir={"column"}
          alignItems={"center"}
        >
          <Heading textAlign={"center"} pt={"0.5em"}>
            Total Cost: $
            {valueStateChanged
              ? totalPrice.toFixed(2)
              : initialPrices.toFixed(2)}
          </Heading>
          <Box
            as="div"
            borderColor={"red.500"}
            borderWidth={"2px"}
            width={"20em"}
            mb={"0.5em"}
            borderRadius={"20%"}
          ></Box>
        </Flex>
        <SimpleGrid spacing={5} minChildWidth={"200px"}>
          {typeFiltered.map((item) => (
            <Card key={item.ID} size={"sm"}>
              <CardHeader>{<Image src={item.Address} />}</CardHeader>
              <CardBody backgroundColor={"lightcoral"} borderRadius={"20px"}>
                <div>
                  <h1>Discription: {item.Description}</h1>
                  <Flex justifyContent={"space-between"}>
                    <b>Price: {item.Price}$</b>{" "}
                    <span>
                      <b>Amount: {cardAmount(item.ID)}</b>
                    </span>
                  </Flex>
                </div>
              </CardBody>
              <CardFooter justifyContent={"center"}>
                <HStack>
                  <Button
                    colorScheme={"facebook"}
                    onClick={() => handleAdd(item.ID, item.Price)}
                  >
                    <AddIcon />
                  </Button>
                  <Button
                    colorScheme={"orange"}
                    onClick={() => handleMinus(item.ID, item.Price)}
                  >
                    <MinusIcon />
                  </Button>
                  <Button
                    colorScheme={"red"}
                    onClick={() => handleDelete(item.ID, item.Price)}
                  >
                    <DeleteIcon />
                  </Button>
                </HStack>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </SimpleGrid>
    </>
  );
}

export default Shopping_Cart;
