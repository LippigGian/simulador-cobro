import DetalleInfo from "./DetalleInfo";
import formatearNumeros from "../utils/formatearNumeros";
const MainSimuladorDetalles = ({ receive, monto, comision, labelPago, tasaComision }) => {
  return (
    <>
      <div className="simuladorContainer_card">
        <label className="titulo">Detalle de la venta</label>
        <DetalleInfo
          title="Cobrás"
          primaryValue={monto !== "" ? "$" + formatearNumeros(monto) : "0"}
         
        />
        <DetalleInfo
          title="Comisión"
          primaryValue={"$" +comision}
          leyendaDetalle={
            labelPago === "" ? (
              <div className="gris">Tasa por método de pago: 0%</div>
            ) : (
              ` ${labelPago} ${tasaComision} %`
            )
          }
        />

        <DetalleInfo
          title={"Recibis"}
          secondaryValue={" $" + receive}
          className={"recibis"}
        ></DetalleInfo>
        <hr></hr>
        <DetalleInfo
          title={" "}
          leyendaDetalle={
            "Estos valores no incluyen IVA ni otros impuestos que puedan corresponder. Tampoco contempla las promociones o condiciones especiales que puedan aplicar."
          }
        ></DetalleInfo>
      </div>
    </>
  );
};
export default MainSimuladorDetalles;
