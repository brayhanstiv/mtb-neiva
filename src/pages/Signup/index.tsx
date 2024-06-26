// Packages
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  Image,
  Input,
  Link,
} from "@nextui-org/react";

// Images
import Logo from "@/assets/logo.png";

const SignUpPage = () => {
  return (
    <>
      <section className="flex justify-center items-center min-h-screen">
        <Card className="w-1/2">
          <CardHeader className="flex justify-center">
            <Image
              alt="Mtb Neiva app icon"
              className="max-w-[10rem]"
              src={Logo}
            />
          </CardHeader>
          <CardBody className="flex gap-4">
            <Input
              autoFocus
              /* endContent={
                <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              } */
              label="Email"
              placeholder="Enter your email"
              variant="bordered"
            />
            <Input
              /* endContent={
                <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              } */
              label="Password"
              placeholder="Enter your password"
              type="password"
              variant="bordered"
            />
            <div className="flex py-2 px-1 justify-between">
              <Checkbox
                classNames={{
                  label: "text-small",
                }}
              >
                Remember me
              </Checkbox>
              <Link color="primary" href="#" size="sm">
                Forgot password?
              </Link>
            </div>
          </CardBody>
          <CardFooter className="flex justify-end">
            <Button color="primary" variant="flat" size="lg">
              Inscribirse
            </Button>
          </CardFooter>
        </Card>
      </section>
    </>
  );
};

export default SignUpPage;
