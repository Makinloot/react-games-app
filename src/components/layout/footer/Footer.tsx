import { Link } from "react-router-dom"

const Footer = (): JSX.Element => {

  return (
    <div className="Footer">
      <div className="container">
        <div className="Footer-wrapper">
          <div className="Footer-socials flex-row">
            <nav className="Footer-menu">
              <Link className="footer-link" to={"/"}>home</Link>
              <Link className="footer-link" to={"/browse/1"}>browse</Link>
              <Link className="footer-link" to={"/contact"}>contact</Link>
            </nav>
            <div className="socials flex-row">
              <a href="https://github.com/Makinloot" title="github" target="_blank">
                <i className="fa-brands fa-square-github"></i>
              </a>
              <a href="https://www.facebook.com/Meta1head/" title="facebook" target="_blank">
                <i className="fa-brands fa-square-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer