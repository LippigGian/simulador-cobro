import React from "react";
import MainSimuladorInputs from "./MainSimuladorInputs";
import MainSimuladorDetalles from "./MainSimuladorDetalles";
import "./mainSimulador.css";
import { useState, useEffect } from "react";
import calculoDetalle from "../utils/calculoDetalle";
import { feePayment, feeAcreditacion, comisionesMedioPago } from "../assets/comisiones";
import { paymentTypeOptions, OpcionesMediosPago } from "../assets/opcionesPago";
import DetalleInfo from "./DetalleInfo";
import formatearNumeros from "../utils/formatearNumeros";

import Cards from "./Cards";
function MainSimulador() {
  //Dinero que quiero cobrar
  const [amount, setAmount] = useState(0);
  const [monto, setMonto] = useState(0);
  //Metodo de pago
  // const [methodPayment, setMethodPayment] = useState(null);
  //Metodo de cobro
  const [typePayment, setTypePayment] = useState(null);
  //Medio de pago
  const [medioPago, setMedioPago] = useState(null);
  //Dinero que voy a recibir
  const [receive, setReceive] = useState(0);
  //Comision en $
  const [comision, setComision] = useState(0);
  //Comision en %
  const [tasa, setTasa] = useState(0);
  //Tipo de pago para mostrar detalle .label
  // const [tipoPago, setTipoPago] = useState("");
  const [labelPago, setLabelPago] = useState("");
  //Plazo de acreditación
  const [plazoAcreditacion, setPlazoAcreditacion] = useState("1");
  //Comision por plazo de acreditacion en %
  const [tasaPlazoAcreditacion, setTasaPlazoAcreditacion] = useState(0);

  //CUOTAS
  //Determinar si existen cuotas o no
  const [cuotas, setCuotas] = useState(false);
  //Cantidad de cuotas
  const [cantidadCuotas, setCantidadCuotas] = useState("1");
  //Tasa de las cuotas en % para el cliente
  const [tasaCuotas, setTasaCuotas] = useState("0.00");
  //Monto final que pagará el cliente en cuotas con intereses
  const [finalAmount, setFinalAmount] = useState("");

  // // Calcular el total automáticamente cuando cambian amount, paymentType, methodPayment
  useEffect(() => {
 const total = calculoDetalle(
  monto,

  //     typePayment,
  //     // methodPayment,
  comisionesMedioPago,
  medioPago
  //     setTasa,
  //     tasaCuotas,
  //     setComision,
  //     setFinalAmount,
  //     plazoAcreditacion,
  //     feeAcreditacion,
  //     setPlazoAcreditacion,
  //     setTasaPlazoAcreditacion,
  //     cuotas,
  //     formatearNumeros,
  //     tipoPago
  );
  setReceive(total);
  }, [
    monto,
    typePayment,
    // methodPayment,
    plazoAcreditacion,
    tasaPlazoAcreditacion,
    tasaCuotas
  ]);

  // Obtener las opciones de typePayment según el methodPayment seleccionado
  // const typePaymentOptions = paymentTypeOptions[methodPayment] || [];
  const tipoOpcionesMedioPago = OpcionesMediosPago || [];
  return (
    <div className="flex justify-center gap-5">
      <Cards>
        <MainSimuladorInputs
          monto={monto}
          setMonto={setMonto}
          formatearNumeros={formatearNumeros}
          medioPago={medioPago}
          setMedioPago={setMedioPago}
          OpcionesMediosPago={OpcionesMediosPago}
          tipoOpcionesMedioPago={tipoOpcionesMedioPago}
          labelPago = {labelPago}
          setLabelPago={setLabelPago}
          cuotas={cuotas}
          setCuotas={setCuotas}
          cantidadCuotas={cantidadCuotas} 
          setCantidadCuotas={setCantidadCuotas}
        ></MainSimuladorInputs>
      </Cards>
      <Cards>
        <MainSimuladorDetalles
          receive={receive}
          monto={monto}
          comision={comision}
          labelPago={labelPago}
          //  tipoPago={tipoPago}
         tasa={tasa}
        ></MainSimuladorDetalles>
        <h1>Hola 2</h1>
      </Cards>
    </div>
    // <>
    //   <div className="containerGeneral">
    //     <div className="simuladorContainer">
    //       <MainSimuladorInputs
    //         amount={amount}
    //         // methodPayment={methodPayment}
    //         setAmount={setAmount}
    //         // setMethodPayment={setMethodPayment}
    //         setTypePayment={setTypePayment}
    //         setCuotas={setCuotas}
    //         setCantidadCuotas={setCantidadCuotas}
    //         typePayment={typePayment}
    //         typePaymentOptions={typePaymentOptions}
    //         setTipoPago={setTipoPago}
    //         cuotas={cuotas}
    //         cantidadCuotas={cantidadCuotas}
    //         setFinalAmount={setFinalAmount}
    //         setTasa={setTasa}
    //         setTasaCuotas={setTasaCuotas}
    //         receive={receive}
    //         plazoAcreditacion={plazoAcreditacion}
    //         setPlazoAcreditacion={setPlazoAcreditacion}
    //         setTasaPlazoAcreditacion={setTasaPlazoAcreditacion}
    //         formatearNumeros={formatearNumeros}
    //       ></MainSimuladorInputs>
    //       <MainSimuladorDetalles
    //         receive={receive}
    //         amount={amount}
    //         comision={comision}
    //         tipoPago={tipoPago}
    //         tasa={tasa}
    //       ></MainSimuladorDetalles>
    //     </div>

    //       {cantidadCuotas && cuotas ? (
    //          <div className="simuladorContainer_cuotas simuladorContainer_cuotas_detalle">
    //         <DetalleInfo
    //           primaryValue={`Conocé cuánto pagará en total tu cliente en cuotas. `}
    //           secondaryValue={`Pagará $${finalAmount} (${tasaCuotas}%) + IVA según la tasa de financiación
    //             (CFT).`}
    //         />
    //               </div>
    //       ) : null}
    //     </div>

    // </>
  );
}

export default MainSimulador;
