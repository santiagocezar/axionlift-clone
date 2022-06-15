import {memo, ReactNode} from 'react'
import IcRoundCall from './icones/icones/IcRoundCall';
import UimFacebookF from './icones/icones/UimFacebookF';
import UimInstagram from './icones/icones/UimInstagram';
import UimLinkedinAlt from './icones/icones/UimLinkedinAlt';
import UimYoutube from './icones/icones/UimYoutube';
import logoURL from './res/logo.svg'
import './style/Header.scss'

interface NavItemProps {
    text: string;
    children?: ReactNode;
}

const NavItem = ({text, children}: NavItemProps) => (
    <li><a href="#">{text}</a>{children}</li>
)

export const Header = memo(() => (
    <header>
        <img className="logo" src={logoURL} alt="axionlift" />
        <nav>
            <ul>
                <NavItem text="Inicio" />
                <NavItem text="Nosotros">
                    <ul>
                        <NavItem text="Comerciales" />
                    </ul>
                </NavItem>
                <NavItem text="Productos">
                <ul>
                        <NavItem text="Elevadores" />
                        <NavItem text="Hidrogrúas" />
                    </ul>
                </NavItem>
                <NavItem text="Servicios" />
                <NavItem text="Novedades" />
                <NavItem text="RR.HH." />
            </ul>
        </nav>
        <div className="social">
            <a href="https://www.facebook.com/AXIONLIFT/"> <UimFacebookF/></a>
            <a href="https://www.linkedin.com/company/axion-lift/"> <UimLinkedinAlt/></a>
            <a href="https://www.youtube.com/user/AXIONLIFT"> <UimYoutube/></a>
            <a href="https://www.instagram.com/_axionlift/"> <UimInstagram/></a>
            <a href="tel:+13057674645"> <IcRoundCall/></a>
        </div>
    </header>
))