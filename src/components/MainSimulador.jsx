import React from "react";
import MainSimuladorInputs from "./MainSimuladorInputs";
import MainSimuladorDetalles from "./MainSimuladorDetalles";
import "./mainSimulador.css";
import { useState, useEffect } from "react";
import calculoDetalle from "../utils/calculoDetalle";
import {
  feePayment,
  comisionesMedioPago,
  comisionesPorcuotas,
  comisionesPorAcreditacion,
} from "../assets/comisiones";
import { paymentTypeOptions, OpcionesMediosPago } from "../assets/opcionesPago";
import DetalleInfo from "./DetalleInfo";
import formatearNumeros from "../utils/formatearNumeros";

import Cards from "./Cards";
function MainSimulador() {
  //Dinero que quiero cobrar
  const [monto, setMonto] = useState(0);
  //Metodo de cobro
  const [medioCobro, setMedioCobro] = useState(null);
  //Medio de pago
  const [medioPago, setMedioPago] = useState(null);
  //Dinero que voy a recibir
  const [montoARecibir, setMontoARecibir] = useState(0);
  //Comision en $
  const [comision, setComision] = useState(0);
  //Comision en %
  const [tasaComision, setTasaComision] = useState(0);
  //Tipo de pago para mostrar detalle .label
  const [labelPago, setLabelPago] = useState("");
  //Plazo de acreditación
  const [plazoAcreditacion, setPlazoAcreditacion] = useState("1");
  //Comision por plazo de acreditacion en %
  const [tasaPlazoAcreditacion, setTasaPlazoAcreditacion] = useState(0.049);

  //CUOTAS
  //Determinar si existen cuotas o no
  const [cuotas, setCuotas] = useState(false);
  //Cantidad de cuotas
  const [cantidadCuotas, setCantidadCuotas] = useState("1");
  //Tasa de las cuotas en % para el cliente
  const [tasaPagoCuotas, setTasaPagoCuotas] = useState("0.00");
  //Monto final que pagará el cliente en cuotas con intereses
  const [montoPagoCuotas, setMontoPagoCuotas] = useState(0);

  // Calcular el total automáticamente cuando cambian monto, plazo de acreditacion, medio de pago, tasa de plazo de acreditacion y tasa de pago en cuotas
  useEffect(() => {
    const total = calculoDetalle(
      monto,
      comisionesMedioPago,
      medioPago,
      setComision,
      setTasaComision,
      tasaPagoCuotas,
      setMontoPagoCuotas,
      plazoAcreditacion,
      tasaPlazoAcreditacion
    );
    setMontoARecibir(total);
  }, [
    monto,
    plazoAcreditacion,
    medioPago,
    tasaPlazoAcreditacion,
    tasaPagoCuotas,
  ]);

  // Obtener las opciones de typePayment según el methodPayment seleccionado
  const tipoOpcionesMedioPago = OpcionesMediosPago || [];
  const montoPagoCuotasNumber = Number(montoPagoCuotas);
  return (
    <div className="flex justify-center mb-[40px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px] lg:gap-[15px] max-w-[864px] w-full m-[20px]">
        <Cards>
          <MainSimuladorInputs
            monto={monto}
            setMonto={setMonto}
            formatearNumeros={formatearNumeros}
            medioPago={medioPago}
            setMedioPago={setMedioPago}
            OpcionesMediosPago={OpcionesMediosPago}
            tipoOpcionesMedioPago={tipoOpcionesMedioPago}
            labelPago={labelPago}
            setLabelPago={setLabelPago}
            cuotas={cuotas}
            setCuotas={setCuotas}
            cantidadCuotas={cantidadCuotas}
            setCantidadCuotas={setCantidadCuotas}
            comisionesPorcuotas={comisionesPorcuotas}
            setTasaPagoCuotas={setTasaPagoCuotas}
            setTasaPlazoAcreditacion={setTasaPlazoAcreditacion}
            setPlazoAcreditacion={setPlazoAcreditacion}
            montoARecibir={montoARecibir}
            setTasaComision={setTasaComision}
            medioCobro={medioCobro}
          />
        </Cards>
        <Cards>
          <MainSimuladorDetalles
            montoARecibir={montoARecibir}
            monto={monto}
            comision={comision}
            labelPago={labelPago}
            tasaComision={tasaComision}
          />
        </Cards>
        {cantidadCuotas && cuotas ? (
          <div className="lg:col-span-2">
            <Cards className="flex flex-col items-center bg-[#f5f5f5] rounded-[20px] p-[32px] md:p-[20px] gap-[15px]">
              <p>{`Conocé cuánto pagará en total tu cliente en cuotas. `}</p>
              <p>
                {`Pagará $${formatearNumeros(montoPagoCuotasNumber)} (${tasaPagoCuotas}%) + IVA según la tasa de financiación (CFT).`}
              </p>
            </Cards>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default MainSimulador;
