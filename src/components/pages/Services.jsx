export default function Services(props) {

    const servicesArr = props.services.map((service, i) => {
        return <li key={`service-${i}`}>{service}</li>
    })

    return (
        <div>
            <h1>Services</h1>
            <ol>{servicesArr}</ol>
        </div>
    )
}