

export function ToyPreview(toy){

    return(
        <div>
            <h1>{toy.name}</h1>
            <p>{toy.price}</p>
            <table>
                {toy.labels.map(label=>{
                    <tbody key={label}>
                        <tr key={label}>
                            <td>{label}</td>
                        </tr>
                    </tbody>
                })
                }
            </table>
        </div>
    )

}