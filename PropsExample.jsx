export default function PropsExample(props)
{
    return<>
    <h1>Props Example</h1>
    <p>{props.title}</p>
    <p>{props.name}</p>
    </>
}

export default function PropsExample({title,name})
{
    return<>
    <h1>Props Example</h1>
    <p>{title}</p>
    <p>{name}</p>
    </>
}
