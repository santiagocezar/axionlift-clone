import './style/Best.css'
import best1URL from './res/best1.jpg'
import best2URL from './res/best2.jpg'
import best3URL from './res/best3.jpg'
import best4URL from './res/best4.jpg'

interface ItemProps{
    src: string;
    text: string;
}



function Item({src, text}: ItemProps) {
    return (
        <div className="best-item">
            <img src={src} />
            <p>{text}</p>
        </div>
    )
}

export function Best() {
    return (
        <div className="best-sellers">
            <h1>Los más vendidos</h1>
            <a href="#">Ver todos los productos</a>
            <div className="best-row">
                <Item
                    src={best1URL}
                    text="Hidrogrúa A100"
                />
                <Item
                    src={best2URL}
                    text="Hidrogrúa A65"
                />
                <Item
                    src={best3URL}
                    text="Elevador T4313"
                />
                <Item
                    src={best4URL}
                    text="Elevador UR3410"
                />
            </div>
        </div>
    )
}