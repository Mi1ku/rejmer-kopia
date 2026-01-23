const nameslist = () => {
    const imiona = ["Jan", "Kasia", "Piotr"]
    
    return (
        <>
        {imiona.map((imie,index) => (
            <li key={index}>{imie}</li>
        ))}
        </>
    )
}
export default nameslist