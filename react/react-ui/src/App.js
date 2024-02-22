import 'bootstrap/dist/css/bootstrap.min.css';
import {BsFillCalendar2CheckFill} from 'react-icons/bs';
import {Container, Row, Col, Card, ListGroup} from 'react-bootstrap';
import Search from './components/Search';
import AddAppointment from './components/AddAppointment';
import AppointmentInfo from './components/AppointmentInfo';
import {useState, useCallback, useEffect} from 'react';

function App() {

  let [appointments, setApts] = useState([])
  let [query, setQuery] = useState("")
  let [sortBy, setSort] = useState("firstName")
  let [orderBy, setOrder] = useState("asc")

  const filteredApts = appointments.filter(
    item => {
      return (
        item.firstName.toLowerCase().includes(query.toLowerCase()) || 
        item.lastName.toLowerCase().includes(query.toLowerCase()) || 
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      )
    }
  ).sort((a, b) => {
    let order = (orderBy === "asc") ? 1 : -1
    return(
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 * order : 1 * order
    )
  })

  const fetchData = useCallback(() => {
    fetch('./data.json')
    .then(response => response.json())
    .then(data => {
      setApts(data)
    })
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center fw-light mt-3"><BsFillCalendar2CheckFill /> Appointments</h1>
        </Col>
        </Row>
        <Row className="justify-content-center">
          <AddAppointment />
        </Row>
        <Row className="justify-content-center">
          <Col md="4">
            <Search query={query} onQueryChange={myQuery => setQuery(myQuery)} />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            <Card className="mb-3">
              <Card.Header>Appointments</Card.Header>
                <ListGroup variant="flush">
                  {filteredApts.map(appointment => (
                    <AppointmentInfo key={appointment.id} appointment={appointment}
                    onDeleteAppointment={
                      appointmentId => setApts(appointments.filter(
                        appointment => appointment.id !== appointmentId
                      ))
                    } />
                  ))}
                </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
