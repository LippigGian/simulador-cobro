import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <>
      <div className="indexContainer">
        <div className="maxWidth container mx-auto flex justify-between items-center mt-[30px]">
          <div className=" flex items-center space-x-4">
            <h1>Simulá tu cobro</h1>

            <Button className="bg-primaryViolet text-white rounded-full w-[103px] h-[30px]">
              <a target="_blank" rel="noopener noreferrer">
                ¡Nuevo!
              </a>
            </Button>
          </div>
        </div>
        <div>
          <p className="maxWidth container mx-auto flex justify-between items-center mt-[15px]">
            Conocé cuánto vas a recibir en tu cuenta bancaria por tus ventas con
            los distintos medios de pago.
          </p>
        </div>
      </div>
    </>
  );
};

export default Index;
