import { DTable, Footer, Menu, Navbar, Title } from "../components"

export const Informes = () => {
    return (
        <>
            <Navbar />
            <Menu nombre="InventarioSys" usuario="Jaimito el Cartero" />
            <div className="content-wrapper">
                <Title title="Informes" breadcrums={["Personas", "Menú"]} />
                <section className="content">

                    <div className="row">
                        <div className="col-4">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h4 className="card-title">Seleccionar filtros</h4>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Empleado</label>
                                            <select className="form-control">
                                                <option>-Todos-</option>
                                                <option>Juan Pérez</option>
                                                <option>Laura Sánchez</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Ubicación</label>
                                            <select className="form-control">
                                                <option>-Todas-</option>
                                                <option>Administración</option>
                                                <option>Recepción</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Tipo de artículo</label>
                                            <select className="form-control">
                                                <option>-Todos los tipos-</option>
                                                <option>Muebles</option>
                                                <option>Equipo de cómputo</option>
                                                <option>Equipo de laboratorio</option>
                                                <option>Artículo de laboratorio</option>
                                                <option>Artículo general</option>
                                                <option>Otro</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Tipo de artículo</label>
                                            <input type="date" className="form-control"/>
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
                                    <DTable />
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