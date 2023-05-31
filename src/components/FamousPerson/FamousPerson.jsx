function FamousPerson(props) {
    console.log(props.person)
    let person=props.person
    console.log(person)
    return (
        <div>
            <li key={person.id}>{person.name} is famous for {person.role}.</li>
        </div> 
        )

}
export default FamousPerson;