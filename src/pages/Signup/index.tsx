// Packages
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Spacer,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Common
import {
  categories,
  document_types,
  modality_types,
  rh,
  sex,
  sizes,
} from "../../common/constants";

// Components
import MainInput from "../../components/Inputs/MainInput";
import DateInput from "../../components/Inputs/DateInput";
import MainSelect from "../../components/Inputs/MainSelect";

// Images
import Logo from "@/common/assets/logo.png";

// Icons
import {
  faBicycle,
  faDroplet,
  faHeartPulse,
  faLocationDot,
  faPassport,
  faRoute,
  faShirt,
  faUpload,
  faUser,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { createRef } from "react";

const SignUpPage = () => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = createRef<HTMLInputElement>();

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

  const handleChange = (event: any) => {
    event.target.files[0];
  };
  return (
    <>
      <section className="flex justify-center items-center min-h-screen">
        <Card className="w-1/2">
          <CardHeader className="flex justify-center">
            <Image
              alt="Mtb Neiva app icon"
              className="max-w-[8rem]"
              src={Logo}
            />
          </CardHeader>
          <CardBody className="flex gap-2">
            <div className="flex gap-2">
              <MainInput
                autofocus={true}
                endContent={
                  <FontAwesomeIcon icon={faUser} className="text-default-400" />
                }
                placeholder="Nombres"
                label="Nombre"
              />
              <MainInput
                endContent={
                  <FontAwesomeIcon icon={faUser} className="text-default-400" />
                }
                placeholder="Apellidos"
                label="Apellidos"
              />
            </div>
            <div className="flex gap-2">
              <MainInput
                startContent={
                  <div className="flex items-center">
                    <label className="sr-only" htmlFor="type_document">
                      No. de documento
                    </label>
                    <select
                      className="outline-none border-0 bg-transparent text-default-400 text-small"
                      id="type_document"
                      name="type_document"
                    >
                      {document_types.map((value) => (
                        <option key={value.id}>{value.name}</option>
                      ))}
                    </select>
                  </div>
                }
                endContent={
                  <FontAwesomeIcon
                    icon={faPassport}
                    className="text-default-400 pointer-events-none flex-shrink-0"
                  />
                }
                placeholder="# Documento"
                label="No. de documento"
              />
              <MainInput
                endContent={
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="text-default-400 pointer-events-none flex-shrink-0"
                  />
                }
                placeholder="# Whatsapp"
                label="Whatsapp"
              />
            </div>
            <div className="flex gap-2">
              <DateInput label="Fecha de nacimiento" />
              <MainSelect
                label="Sexo"
                placeholder="Sexo"
                data={sex}
                startContent={
                  <FontAwesomeIcon
                    icon={faVenusMars}
                    className="text-default-400 pointer-events-none flex-shrink-0"
                  />
                }
              />
            </div>
            <div className="flex gap-2">
              <MainInput
                endContent={
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-default-400 pointer-events-none flex-shrink-0"
                  />
                }
                placeholder="Ciudad"
                label="Ciudad de procedencia"
              />
              <MainInput
                endContent={
                  <FontAwesomeIcon
                    icon={faHeartPulse}
                    className="text-default-400 pointer-events-none flex-shrink-0"
                  />
                }
                placeholder="Eps"
                label="Eps"
              />
            </div>
            <div className="flex gap-2">
              <MainSelect
                label="RH"
                placeholder="RH"
                data={rh}
                startContent={
                  <FontAwesomeIcon
                    icon={faDroplet}
                    className="text-default-400 pointer-events-none flex-shrink-0"
                  />
                }
              />
              <MainSelect
                label="Modalidad"
                placeholder="Modalidad"
                data={modality_types}
                startContent={
                  <FontAwesomeIcon
                    icon={faRoute}
                    className="text-default-400 pointer-events-none flex-shrink-0"
                  />
                }
              />
            </div>
            <div className="flex gap-2">
              <MainSelect
                label="Categoría"
                placeholder="Categoría"
                data={categories}
                startContent={
                  <FontAwesomeIcon
                    icon={faBicycle}
                    className="text-default-400 pointer-events-none flex-shrink-0"
                  />
                }
              />
              <MainSelect
                label="Talla"
                placeholder="Talla"
                data={sizes}
                startContent={
                  <FontAwesomeIcon
                    icon={faShirt}
                    className="text-default-400 pointer-events-none flex-shrink-0"
                  />
                }
              />
            </div>
            <Spacer />
            <div className="">
              <Button
                className="w-full"
                variant="bordered"
                onClick={handleClick}
                startContent={
                  <FontAwesomeIcon
                    icon={faUpload}
                    className="text-default-400 pointer-events-none flex-shrink-0"
                  />
                }
              >
                Comprobante de pago
              </Button>
              <MainInput
                className="hidden"
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                endContent={
                  <FontAwesomeIcon
                    icon={faHeartPulse}
                    className="text-default-400 pointer-events-none flex-shrink-0"
                  />
                }
                placeholder="Eps"
                label="Eps"
              />
            </div>
          </CardBody>
          <CardFooter className="flex justify-end">
            <Button color="success" variant="flat">
              Inscribirse
            </Button>
          </CardFooter>
        </Card>
      </section>
    </>
  );
};

export default SignUpPage;
