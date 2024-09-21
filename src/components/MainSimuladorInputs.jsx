import React from "react";
import Selector from "./Selector";
import MontoInput from "./MontoInput";

//Comisiones por cobro y por cobro en cuotas
import {
  comisionesMedioPago,
  comisionesPorAcreditacion,
} from "../assets/comisiones";

//Medios de pago, tipos de pagos y cuotas
import {
  paymentMethodOptions,
  paymentTypeOptions,
  installmentsOptions,
  plazoAcreditacionOption,
  OpcionesMediosPago,
} from "../assets/opcionesPago";

//Import de handles
// import handleMedioCobro from "../utils/handleMedioCobro";
import handleMedioPago from "../utils/handleMedioPago";
import handleCuotas from "../utils/handleCuotas";
import handleMonto from "../utils/handleMonto";
import DetalleInfo from "./DetalleInfo";
import handlePlazoAcreditacion from "../utils/handlePlazoAcreditacion";

const MainSimuladorInputs = ({
  monto,
  setMonto,
  formatearNumeros,
  OpcionesMediosPago,
  setMedioPago,
  labelPago,
  setLabelPago,
  tipoOpcionesMedioPago,
  cuotas,
  setCuotas,
  cantidadCuotas,
  setCantidadCuotas,
  comisionesPorcuotas,
  setTasaPagoCuotas,
  setTasaPlazoAcreditacion,
  setPlazoAcreditacion,
  montoARecibir,
  setTasaComision,
  medioCobro
}) => {
  return (
    <>
      <div className="w-full">
        <label className="titulo">Ingresá los datos de la venta</label>
        <MontoInput
          className="mt-[15px] gap-[15px] flex flex-col"
          label="Monto"
          monto={monto}
          onChange={(e) => handleMonto(e, setMonto, formatearNumeros)}
        />
          {medioCobro &&  <Selector
          label="Medio de cobro"
          name="medioCobro"
          options={tipoOpcionesMedioPago}
          // onChange={(e) =>
          //   handleMedioPago(
          //     e,
          //     tipoOpcionesMedioPago,
          //     setMedioPago,
          //     setLabelPago,
          //     setCuotas,
          //     setCantidadCuotas,
          //     setTasaPagoCuotas,
          //     setPlazoAcreditacion,
          //     setTasaComision,
          //     setTasaPlazoAcreditacion
          //   )
          // }
        ></Selector>
      }   
        <Selector
          label="Medio de pago"
          name="medioPago"
          options={tipoOpcionesMedioPago}
          onChange={(e) =>
            handleMedioPago(
              e,
              tipoOpcionesMedioPago,
              setMedioPago,
              setLabelPago,
              setCuotas,
              setCantidadCuotas,
              setTasaPagoCuotas,
              setPlazoAcreditacion,
              setTasaComision,
              setTasaPlazoAcreditacion
            )
          }
        ></Selector>
        {cuotas ? (
          <>
            <Selector
              label="Cantidad de cuotas"
              name="cantidadCuotas"
              value={cantidadCuotas}
              valorInicial={cantidadCuotas}
              leyendaSelector="Las cuotas corren a cargo del cliente."
              onChange={(e) =>
                handleCuotas(e, comisionesPorcuotas, setTasaPagoCuotas)
              }
              options={installmentsOptions}
            />
            <Selector
              label={"Plazo de pago"}
              name="PlazoAcreditacion"
              valorInicial={"1"}
              value={comisionesPorAcreditacion}
              onChange={(e) =>
                handlePlazoAcreditacion(
                  e,
                  setPlazoAcreditacion,
                  comisionesPorAcreditacion,
                  setTasaPlazoAcreditacion
                )
              }
              options={plazoAcreditacionOption}
              leyendaSelector="Elegí cómo recibís el dinero."
            ></Selector>
          </>
        ) : null}
        <hr className="mt-[20px]"></hr>
        <DetalleInfo
          primaryValue={`Recibís $` +formatearNumeros(montoARecibir) }
          className={"recibis"}
        ></DetalleInfo>
      </div>
    </>
  );
};
export default MainSimuladorInputs;
