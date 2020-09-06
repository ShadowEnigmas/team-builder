import React, {useState} from 'react';

const NewMember = props => {
    const [card, setCard] = useState({
        name: '',
        email: '',
        role: ''
    });
    const changes = event => {
        setCard({...card, [event.target.name]: event.target.value});
    }
    const submit = submission => {
        submission.preventDefault();
        const newTeamMember = {
            name: submission.target.name.value,
            email: submission.target.email.value,
            role: submission.target.role.value
        }
        props.newTeam(props.team.concat(newTeamMember))
    };

    return (
        <form onSubmit={submit} className='form'>
            <label htmlFor='name'>Name: </label>
            <input type='text' name='name' onChange={changes} value={card.name}/>

            <label htmlFor='email'>Email: </label>
            <input type='text' name='email' onChange={changes} value={card.email}/>

            <label htmlFor='role'>Role: </label>
            <input type='text' name='role' onChange={changes} value={card.role}/>

            <input type='submit'/>
        </form>
    )
}
export default NewMember;