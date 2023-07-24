import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AppointmentList = ({ apps }) => {
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>
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
