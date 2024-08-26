import DetalleInfo from "./DetalleInfo";
import formatearNumeros from "../utils/formatearNumeros";
const Detalle = ({ receive, amount, comision, tipoPago, tasa }) => {
  return (
    <>
      <div className="simuladorContainer_card">
        <label className="titulo">Detalle de la venta</label>
        <DetalleInfo
          title="Cobrás"
          primaryValue={amount !== "" ? "$" + formatearNumeros(amount) : "0"}
         
        />
        <DetalleInfo
          title="Comisión"
          primaryValue={"$" +comision}
          leyendaDetalle={
            tipoPago === "" ? (
              <div className="gris">Tasa por método de pago: 0% + IVA.</div>
            ) : (
              ` ${tipoPago} ${tasa} % + IVA`
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
export default Detalle;
