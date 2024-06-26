// Packages
import { Button, Card, CardFooter, Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

// Images
import Portada from "@/assets/portada.jpg";
import Logo from "@/assets/logo.png";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card
        isFooterBlurred
        className="w-full h-[100vh] col-span-12 sm:col-span-7"
      >
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover object-bottom"
          src={Portada}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Mtb Neiva app icon"
              className="rounded-full w-20 h-20"
              src={Logo}
            />
            <div className="flex flex-col">
              <h2 className="text-lg text-white/80 text-bold">
                No te puede poner un límite, no hay nada imposible
              </h2>
              <p className=" text-white/60">Usain Bolt</p>
            </div>
          </div>
          <Button
            radius="full"
            size="lg"
            color="success"
            onClick={() => navigate("/sign-up")}
          >
            Inscribirse
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default MainPage;
