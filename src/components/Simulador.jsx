import React from "react";
import Calculadora from "./Calculadora";
import Detalle from "./Detalle";
import "./simulador.css";
import { useState, useEffect } from "react";
import calculoDetalle from "../utils/calculoDetalle";
import { feePayment, feeAcreditacion } from "../assets/comisiones";
import { paymentTypeOptions } from "../assets/opcionesPago";
import DetalleInfo from "./DetalleInfo";
import formatearNumeros from "../utils/formatearNumeros";

function Simulador() {
  //Dinero que quiero cobrar
  const [amount, setAmount] = useState(1000);
  //Metodo de pago
  const [methodPayment, setMethodPayment] = useState("1");
  //Metodo de cobro
  const [typePayment, setTypePayment] = useState("1");
  //Dinero que voy a recibir
  const [receive, setReceive] = useState(0);
  //Comision en $
  const [comision, setComision] = useState(0);
  //Comision en %
  const [tasa, setTasa] = useState(0);
  //Tipo de pago para mostrar detalle .label
  const [tipoPago, setTipoPago] = useState("");
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

  // Calcular el total automáticamente cuando cambian amount, paymentType, methodPayment
  useEffect(() => {
    const total = calculoDetalle(
      amount,
      typePayment,
      methodPayment,
      feePayment,
      setTasa,
      tasaCuotas,
      setComision,
      setFinalAmount,
      plazoAcreditacion,
      feeAcreditacion,
      setPlazoAcreditacion,
      setTasaPlazoAcreditacion,
      cuotas,
      formatearNumeros,
      tipoPago
    );
    setReceive(total);
  }, [
    amount,
    typePayment,
    methodPayment,
    plazoAcreditacion,
    tasaPlazoAcreditacion,
  ]);

  // Obtener las opciones de typePayment según el methodPayment seleccionado
  const typePaymentOptions = paymentTypeOptions[methodPayment] || [];

  return (
    <>
      <div className="containerGeneral">
        <div className="simuladorContainer">
          <Calculadora
            amount={amount}
            methodPayment={methodPayment}
            setAmount={setAmount}
            setMethodPayment={setMethodPayment}
            setTypePayment={setTypePayment}
            setCuotas={setCuotas}
            setCantidadCuotas={setCantidadCuotas}
            typePayment={typePayment}
            typePaymentOptions={typePaymentOptions}
            setTipoPago={setTipoPago}
            cuotas={cuotas}
            cantidadCuotas={cantidadCuotas}
            setFinalAmount={setFinalAmount}
            setTasa={setTasa}
            setTasaCuotas={setTasaCuotas}
            receive={receive}
            plazoAcreditacion={plazoAcreditacion}
            setPlazoAcreditacion={setPlazoAcreditacion}
            setTasaPlazoAcreditacion={setTasaPlazoAcreditacion}
            formatearNumeros={formatearNumeros}
          ></Calculadora>
          <Detalle
            receive={receive}
            amount={amount}
            comision={comision}
            tipoPago={tipoPago}
            tasa={tasa}
          ></Detalle>
        </div>
        <div className="simuladorContainer_cuotas">
          {cantidadCuotas && cuotas && methodPayment != "5" ? (
            <DetalleInfo
              className={"simuladorContainer_cuotas_detalle "}
              primaryValue={`Conocé cuánto pagará en total tu cliente en cuotas. `}
              secondaryValue={`Pagará $${finalAmount} (${tasaCuotas}%) + IVA según la tasa de financiación
                (CFT).`}
            />
          ) : null}
          {methodPayment === "5" && cuotas ? (
            <DetalleInfo
              className={"simuladorContainer_cuotas_detalle "}
              primaryValue={`Pueden pagar en 3 cuotas sin interés y sin tarjeta solo las personas que tengan cuenta en Galicia.`}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Simulador;
