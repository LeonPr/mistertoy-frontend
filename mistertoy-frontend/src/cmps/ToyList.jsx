

export function ToyList(toys) {

    return (
        <table className="toy-table">
            {toys.map(toy => {
                <tbody key={toy._id}>
                    <tr key={toy._id}>
                        <td>Name: {toy.name}</td>
                        <td>Is In Stock: {inStock}</td>
                        //todo change to link
                        <td>Details...</td>
                    </tr>
                </tbody>
            })
            }
        </table>
    )
}