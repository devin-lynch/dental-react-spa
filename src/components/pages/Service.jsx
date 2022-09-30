import { useParams } from 'react-router-dom'

export default function Service(props) {
    let { id } = useParams()
    // console.log('PARAM:', id)
    const service = props.services.find((service) => 
    service.id.toString() === id)
    // console.log('ONE SERVICE', service)
    return (
        <div>
            <h3>{service.name}</h3>
            <p>${service.price}</p>
            <p>{service.description}</p>
        </div>
    )
}