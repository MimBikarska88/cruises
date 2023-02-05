import logo from '../../assets/img/logo.png';
import Navigation from './Navigation';
const Header = () => {
    return 		(
    <div className="banner-area default-header" id="home">
    <nav className="navbar navbar-expand-lg  navbar-light">
        <div className="container">
              <a className="navbar-brand" href="index.html">
                  <img src={logo}/>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="text-white lnr lnr-menu"></span>
              </button>
             <Navigation/>
              						
        </div>
    </nav>
</div>
);
}
export default Header;