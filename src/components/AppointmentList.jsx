import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TiDelete } from "react-icons/ti";
const AppointmentList = ({ apps }) => {
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>
      {apps.map(({ id, patienet, consulted, doctor, day }) => (
        <div
          key={id}
          className={consulted ? "appointments consulted" : "appointments"}
        >
          <Row>
            <Col>
              <h4>{patienet}</h4>
              <h5>{doctor}</h5>
            </Col>
            <Col>{day}</Col>
            <Col>
              <TiDelete className="text-danger fs-1" />
            </Col>
          </Row>
        </div>
      ))}
      <div>
        <Row>
          <Col>
            <h4>Patienet Name</h4>
            <h5>Doctor Name</h5>
          </Col>
          <Col>Date</Col>
          <Col>Icon</Col>
        </Row>
      </div>
    </Container>
  );
};

export default AppointmentList;
