import './style/Performance.css'
import perf1URL from './res/perf1.jpg'
import perf2URL from './res/perf2.jpg'

interface ItemProps {
    src: string;
    title: string;
    text: string;
}

function Item({ src, title, text }: ItemProps) {
    return (
        <div className="perf-item">
            <div className="perf-body">
                <h1>{title}</h1>
                <p>{text}</p>
                <a className="more" href="#" >— Ver más</a>
            </div>
            <img src={src} />
        </div>
    )
}

export function Performance() {
    return (
        <div className="performance">
            <h1>Equipos de Alta Performance</h1>
            <p>Nos dedicamos al desarrollo de Elevadores e Hidrogrúas de alta performance</p>
            <Item
                src={perf1URL}
                title="Hidrogrúas"
                text="Equipos especializados para manipulación de carga con tecnología de clase mundial."
            />
            <Item
                src={perf2URL}
                title="Elevadores"
                text="Equipos especializados para realizar trabajos en altura de manera eficiente y segura."
            />
            <br/>
            <h1>Soluciones a su alcance</h1>
            <p>En AxionLift creemos que un equipo de alta performance debe ser acompañado por un alto nivel de servicio. Por este motivo estamos cada vez más cerca de nuestros clientes, brindando un soporte integral con personal especializado.</p>
            <div className="solu">
                <p>Montaje de equipo</p>
                <p>Servicio técnico especializado</p>
                <p>Repuestos AxionLift</p>
                <p>Capacitación y certificación</p>
                <p>Taller móvil</p>
            </div>
        </div>
    )
}