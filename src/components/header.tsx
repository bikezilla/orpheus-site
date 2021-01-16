import { Link } from "gatsby"
import React from "react"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"

const Header = ({ location }: { location?: string }) => {
  return (
    <header>
      <Nav className="bg-light">
        <Navbar expand="md" collapseOnSelect>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <ul className="navbar-nav">
              <HeaderLink title="Начало" to="/" />
              <HeaderLink title="Правилник" to="/guide" />
              <HeaderLink title="Полезни съвети" to="/advices" />
              <NavDropdown
                id="examples"
                title="Примери"
                active={location?.includes("varvara")}
              >
                <NavDropdown.Item as="div">
                  <Link
                    className="nav-link"
                    activeClassName="active"
                    to="/varvara"
                  >
                    Варвара
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <HeaderLink title="Карта" to="/map" />
              <HeaderLink title="Организации" to="/organisations" />
              <HeaderLink title="Екип" to="/team" />
              <HeaderLink title="Контакти" to="/contacts" />
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </Nav>
    </header>
  )
}

const HeaderLink = ({ title, to }: { title: string; to: string }) => (
  <Nav.Item as="li">
    <Link className="nav-link" activeClassName="active" to={to}>
      {title}
    </Link>
  </Nav.Item>
)

export default Header
