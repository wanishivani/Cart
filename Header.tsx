import { Container, Navbar as Navbarbs, Col, Row } from "react-bootstrap";
export function Header() {
  return (
    <>
      <Container
        className="mw-800 mh-800  "
        style={{ padding: "2rem", height: "140px" }}
      >
        {" "}
        <Navbarbs className="d-flex flex-column bd-highlight mb-3 mw-10800 bg-secondary text-white mh-300  mh-1800">
          <h1 className="display-1">The Generics</h1>
        </Navbarbs>



      </Container>
    </>
  );
}
