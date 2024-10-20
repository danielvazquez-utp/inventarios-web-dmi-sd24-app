import { DTable, Footer, Menu, Navbar, Title } from "../components";

const columnas = [
    {
        name: 'Identificador',
        selector: row=> row.matricula
    },
    {
        name: 'Nombre',
        selector: row=> row.nombre
    },
    {
        name: 'Tipo',
        selector: row=> row.tipo
    },
    {
        name: 'Ubicación',
        selector: row=> row.ubicacion
    },
];

const data = [
    {
        id: 1,
        matricula: "ZAQ0001",
        nombre: "Mesa binaria",
        tipo: "Mueble de oficina",
        ubicacion: "Edificio D5 - 211",
    },
    {
        id: 2,
        matricula: "ZAQ0002",
        nombre: "CPU - HP Elite C800",
        tipo: "Equipo de computo",
        ubicacion: "Edificio D5 - 211",
    },
]

export const Mobiliario = () => {
    return (
        <>
            <Navbar />
            <Menu nombre="Stocky's" usuario="Jaimito el Cartero" />
            <div className="content-wrapper">
                <Title title="Mobiliario" breadcrums={["Inicio", "Mobiliario"]} />
                <section className="content">

                    <div className="row">
                        <div className="col-4">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h4 className="card-title">Agregar mobiliario/artículo</h4>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Matricula / Identificador / No. inventario</label>
                                            <input className="form-control" placeholder="NX02154" />
                                        </div>
                                        <div className="form-group">
                                            <label>Nombre del mobiliario / artículo</label>
                                            <input className="form-control" placeholder="Mesa de madera" />
                                        </div>
                                        <div className="form-group">
                                            <label>Tipo de mobiliario</label>
                                            <select className="form-control">
                                                <option>Seleccione</option>
                                                <option>Muebles</option>
                                                <option>Equipo de cómputo</option>
                                                <option>Equipo de laboratorio</option>
                                                <option>Artículo de laboratorio</option>
                                                <option>Artículo general</option>
                                                <option>Otro</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Ubicación</label>
                                            <select className="form-control">
                                                <option>Seleccione</option>
                                                <option>Edificio D5 - 211</option>
                                                <option>Edificio K5 - 101</option>
                                                <option>Edificio D6 - 205</option>
                                                <option>Otro</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-secondary">Cancelar</button>
                                    <button className="btn btn-lg btn-primary float-right">Aceptar</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h4 className="card-title">Personas registradas</h4>
                                </div>
                                <div className="card-body">
                                    <DTable cols={ columnas } info={ data } />
                                </div>
                            </div>
                        </div> 
                    </div>

                </section>
            </div>
            <Footer />
        </>
    )
}