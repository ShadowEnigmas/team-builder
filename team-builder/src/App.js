import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import NewMember from './Components/SignUp'

const TeamContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border: 1px solid black;`

function App() {

  const [team, newTeam] = useState([{
    name: 'Robert Stevens',
    email: 'rstevens@verneidegm.com',
    role: 'React Developer (In Training)'
  }]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {team.map((member, i) => {
          return <TeamContainer key={i}>
            Name: {member.name}
            <br/>
            Email: {member.email}
            <br/>
            Role: {member.role}
          </TeamContainer>
        })}

        <NewMember team={team} newTeam={newTeam}/>
        
      </header>
    </div>
  );
}

export default App;
