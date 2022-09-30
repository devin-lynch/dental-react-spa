import { Link } from 'react-router-dom'

export default function Services(props) {

    const servicesArr = props.services.map((service, i) => {
        return (
            <li key={`li-${i}`}>
                <Link
                    to={`/services/${service.id}`} 
                    key={`service-${i}`}
                >
                    {service.name}
                </Link>
            </li>
        )
    })

    return (
        <div>
            <h1>Services</h1>
            <ol>{servicesArr}</ol>
        </div>
    )
}