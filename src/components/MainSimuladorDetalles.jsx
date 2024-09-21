import DetalleInfo from "./DetalleInfo";
import formatearNumeros from "../utils/formatearNumeros";
const MainSimuladorDetalles = ({
  montoARecibir,
  monto,
  comision,
  labelPago,
  tasaComision,
}) => {
  return (
    <>
      <div className="">
        <label className="titulo">Detalle de la venta</label>
        <DetalleInfo
          title="Cobrás"
          primaryValue={monto !== "" ? "$" + formatearNumeros(monto) : "0"}
        />
        <DetalleInfo
          title="Comisión"
          primaryValue={"$" + formatearNumeros(comision)}
          leyendaDetalle={
            labelPago === "" ? (
              <div className="gris">Tasa por método de pago: 0%</div>
            ) : (
              ` ${labelPago} ${tasaComision} % + IVA`
            )
          }
        />
        <DetalleInfo
          title={"Recibis"}
          secondaryValue={" $" + formatearNumeros(montoARecibir)}
          className={"recibis"}
        ></DetalleInfo>
        <hr className="mt-[20px]"></hr>
        <DetalleInfo
          title={" "}
          leyendaDetalle={
            "Los valores presentados en esta simulación son estimativos y podrían no reflejar todos los impuestos aplicables a la transacción. Tampoco se han considerado posibles promociones o condiciones especiales que puedan afectar el precio final."
          }
        ></DetalleInfo>
      </div>
    </>
  );
};
export default MainSimuladorDetalles;
