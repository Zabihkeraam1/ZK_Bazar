import styles from "./Login.module.css";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertDialog,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Flex,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { EmailIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router";

const schema = z.object({
  email: z.string().email(),
  password: z.number({ invalid_type_error: "Password is required" }).min(8),
});

type FormData = z.infer<typeof schema>;

function LogIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data.email);
    console.log(data.password);
  };

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null); // Specify the type

  const navigate = useNavigate();

  useEffect(() => {
    onOpen(); // Open the AlertDialog when the component mounts
  }, []);

  return (
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <Flex
          backgroundImage={
            "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"
          }
          justifyContent={"center"}
          borderRadius={"30px"}
          overflow={"hidden"}
        >
          <AlertDialogCloseButton onClick={() => navigate("/Main")} />
          <div>
            <div>
              <header className={[styles.header].join()}>
                <h1>Hello & Welcome</h1>
              </header>
              <main>
                <form
                  action=""
                  className={[styles.form].join()}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <label className={[styles.label].join()} htmlFor="email">
                    Email:
                  </label>
                  <InputGroup>
                    <input
                      type="text"
                      id={"email"}
                      className={[styles.Linput].join()}
                      placeholder={"123@gmail.com"}
                      {...register("email")}
                    />
                    <InputRightElement width="4.5rem">
                      <EmailIcon />
                    </InputRightElement>
                  </InputGroup>
                  {errors.email && (
                    <p className={[styles.danger].join()}>
                      {errors.email.message}
                    </p>
                  )}
                  <label htmlFor="password" className={[styles.label].join()}>
                    Password:
                  </label>
                  <InputGroup>
                    <input
                      id={"password"}
                      type={show ? "text" : "password"}
                      className={[styles.Linput].join()}
                      placeholder={"Red123%"}
                      {...register("password", { valueAsNumber: true })}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? <ViewOffIcon /> : <ViewIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  {errors.password && (
                    <p className={[styles.danger].join()}>
                      {errors.password.message}
                    </p>
                  )}
                  <div className={[styles.btnContainer].join()}>
                    {/* <button className={[styles.button].join()}>Sign Up</button> */}
                    <Button mt={2} colorScheme="green">
                      Sing In
                    </Button>
                  </div>
                </form>
              </main>
            </div>
          </div>
        </Flex>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default LogIn;
