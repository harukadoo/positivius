import logo from '../../img/logo.png';
import { Link } from "react-router-dom";
import '../../styles/index.scss';

export const Header = () => {
    return (
        <div className="header">
            <div className="header__container">
                <Link to={'/'} className="logo">
                    <img src={logo} alt="logo" className="logo__img" />
                    <p className="logo__name">Positivius</p>
                </Link>

                <div className="navigation">
                    <Link to={'/about-us'} className="navigation__link">About us</Link>
                    <Link to={'/services'} className="navigation__link">Services</Link>
                    <Link to={'/use-cases'} className="navigation__link">Use Cases</Link>
                    <Link to={'/pricing'} className="navigation__link">Pricing</Link>
                    <Link to={'/blog'} className="navigation__link">Blog</Link>

                    <button className="navigation__button">Request a quote</button>
                </div>
            </div>
        </div>
    )
}