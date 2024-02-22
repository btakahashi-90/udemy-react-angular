import {Button, ListGroup} from 'react-bootstrap';
import { RiDeleteBin2Line } from "react-icons/ri";

const AppointmentInfo = ({appointment, onDeleteAppointment}) => {
    return(
        <>
            <ListGroup.Item key={appointment.id}>
                <p><small>Date: {appointment.aptDate}</small></p>
                <p><strong>Name: {appointment.firstName} {appointment.lastName}</strong></p>
                <p><strong>Notes: {appointment.aptNotes}</strong></p>
                <Button size="sm" variant="danger" onClick={() => onDeleteAppointment(appointment.id)}><RiDeleteBin2Line /> Delete</Button>
            </ListGroup.Item>
        </>
    )
}

export default AppointmentInfo;