import React, { Component } from 'react';

const data = [
  // Wedding
  {
    id: 1,
    user_id: 1,
    name: 'my wedding',
    events: [
      {
        id: 1,
        wedding_id: 1,
        name: 'my wedding event 1',
        date: 'my date',
        time: 'my time',
        location: 'my location',
        notes: 'string of notes',
        guests: [1, 2, 3]
      }
    ],
    guests: [
      {
        id: 1,
        group_id: 1,
        wedding_id: 1,
        name: 'guest name',
        isPrimary: true,
        contact_type: 'email',
        contact_info: 'my@mail.com'
      },
      {
        id: 2,
        group_id: 1,
        wedding_id: 1,
        name: 'guest name',
        isPrimary: false
      }
    ]
  }
];

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Wedding Itinerary App</h1>
        <p>{JSON.stringify(data)}</p>
     </div>
    );
  }
}

export default App;
