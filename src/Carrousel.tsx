import './style/Carrousel.css'
import slide1URL from './res/slide1.jpg'
import slide2URL from './res/slide2.jpg'
import slide3URL from './res/slide3.jpg'

interface ItemProps{
    src: string;
    text: string;
}



function Item({src, text}: ItemProps) {
    return (
        <div className="carro-item">
            <img src={src} />
            <div className="carro-body">
                <h1>{text}</h1>
                <a href="#" className="more" >Ver más</a>
            </div>
        </div>
    )
}

export function Carrousel() {
    return (
        <div className="carrousel">
            <Item
                src={slide1URL}
                text="Hidrogruas de 3 a 300 tm"
            />
            <Item
                src={slide2URL}
                text="Elevadores de 10 a 24 m"
            />
            <Item
                src={slide3URL}
                text="Nadie cuida tu equipo mejor que nosostros"
            />
        </div>
    )
}