import { Link } from "react-router-dom";
import { DTable, Footer, Menu, Navbar, Title } from "../components";

export const Inicio = () => {
    return (
        <>
            <Navbar />
            <Menu nombre="Stocky's" usuario="Jaimito el Cartero" />
            <div className="content-wrapper">
                <Title title="Bienvenido(s)" breadcrums={["Menú principal"]} />
                <section className="content" style={{ paddingLeft: "2rem" }}>

                    <div className="row">
                        
                        <div className="col-3">
                            <div className="card card-widget widget-user">
                                <div 
                                    className="widget-user-header text-white" 
                                    style={{
                                        backgroundImage: "url('../dist/img/mobiliario-1.jpg')", 
                                        backgroundPosition: "center center",
                                        backgroundSize: "100% auto",
                                    }}
                                >
                                    <h4 className="widget-user-desc text-right">Mobiliario</h4>
                                </div>
                                <div className="widget-user-image">
                                    <img className="img-circle elevation-2" src="../dist/img/desktop-solid.jpg" alt="User Avatar" />
                                </div>
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col-sm-6 border-right">
                                            <div className="description-block">
                                                <Link to="/mobiliario" className="btn btn-primary btn-lg" title="Agregar nuevo">
                                                    <i className="fas fa-plus-circle"></i>
                                                </Link>
                                            </div>

                                        </div>
                                        <div className="col-sm-6">
                                            <div className="description-block">
                                                <Link to="/mobiliario" className="btn btn-warning btn-lg" title="Gestionar">
                                                    <i className="fas fa-pen"></i>
                                                </Link>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card card-widget widget-user">
                                <div 
                                    className="widget-user-header text-white" 
                                    style={{
                                        backgroundImage: "url('../dist/img/people.png')", 
                                        backgroundPosition: "center center",
                                        backgroundSize: "100% auto",
                                    }}
                                >
                                    <h4 className="widget-user-desc text-right">Personas</h4>
                                </div>
                                <div className="widget-user-image">
                                    <img className="img-circle elevation-2" src="../dist/img/usuarios-1.jpg" alt="User Avatar" />
                                </div>
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col-sm-6 border-right">
                                            <div className="description-block">
                                                <Link to="/personas" className="btn btn-primary btn-lg" title="Agregar nuevo">
                                                    <i className="fas fa-plus-circle"></i>
                                                </Link>
                                            </div>

                                        </div>
                                        <div className="col-sm-6">
                                            <div className="description-block">
                                                <Link to="/personas" className="btn btn-warning btn-lg" title="Gestionar">
                                                    <i className="fas fa-pen"></i>
                                                </Link>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card card-widget widget-user">
                                <div 
                                    className="widget-user-header text-white" 
                                    style={{
                                        backgroundImage: "url('../dist/img/office-1.jpg')", 
                                        backgroundPosition: "center center",
                                        backgroundSize: "100% auto",
                                    }}
                                >
                                    <h4 className="widget-user-desc text-right">Ubicaciones</h4>
                                </div>
                                <div className="widget-user-image">
                                    <img className="img-circle elevation-2" src="../dist/img/building-1.jpg" alt="User Avatar" />
                                </div>
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col-sm-6 border-right">
                                            <div className="description-block">
                                                <Link to="/ubicaciones" className="btn btn-primary btn-lg" title="Agregar nuevo">
                                                    <i className="fas fa-plus-circle"></i>
                                                </Link>
                                            </div>

                                        </div>
                                        <div className="col-sm-6">
                                            <div className="description-block">
                                                <Link to="/ubicaciones" className="btn btn-warning btn-lg" title="Gestionar">
                                                    <i className="fas fa-pen"></i>
                                                </Link>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div className="card card-widget widget-user">
                                <div 
                                    className="widget-user-header text-white" 
                                    style={{
                                        backgroundImage: "url('../dist/img/resumen-1.jpg')", 
                                        backgroundPosition: "center center",
                                        backgroundSize: "100% auto",
                                    }}
                                >
                                    <h4 className="widget-user-desc text-right">Informes</h4>
                                </div>
                                <div className="widget-user-image">
                                    <img className="img-circle elevation-2" src="../dist/img/pie-1.jpg" alt="User Avatar" />
                                </div>
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col-sm-6 border-right">
                                            <div className="description-block">
                                                <Link to="/informes" className="btn btn-primary btn-lg" title="Agregar nuevo">
                                                    <i className="fas fa-plus-circle"></i>
                                                </Link>
                                            </div>

                                        </div>
                                        <div className="col-sm-6">
                                            <div className="description-block">
                                                <Link to="/informes" className="btn btn-warning btn-lg" title="Gestionar">
                                                    <i className="fas fa-pen"></i>
                                                </Link>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card card-widget widget-user">
                                <div 
                                    className="widget-user-header text-white" 
                                    style={{
                                        backgroundImage: "url('../dist/img/user.png')", 
                                        backgroundPosition: "center center",
                                        backgroundSize: "100% auto",
                                    }}
                                >
                                    <h4 className="widget-user-desc text-right">Usuarios</h4>
                                </div>
                                <div className="widget-user-image">
                                    <img className="img-circle elevation-2" src="../dist/img/user-lock.jpg" alt="User Avatar" />
                                </div>
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col-sm-6 border-right">
                                            <div className="description-block">
                                                <Link to="/usuarios" className="btn btn-primary btn-lg" title="Agregar nuevo">
                                                    <i className="fas fa-plus-circle"></i>
                                                </Link>
                                            </div>

                                        </div>
                                        <div className="col-sm-6">
                                            <div className="description-block">
                                                <Link to="/usuarios" className="btn btn-warning btn-lg" title="Gestionar">
                                                    <i className="fas fa-pen"></i>
                                                </Link>
                                            </div>

                                        </div>

                                    </div>
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