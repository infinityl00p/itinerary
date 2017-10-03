// Uncomment one or the other

// export default {
//   wedding: {
//     wedding_id: null,
//     user_id: null,
//     name: null,
//     events: [],
//     guests: []
//   },
//   session: {}
// };

export default {
  wedding: {
    weddingId: 1,
    userId: 1,
    name: 'Sim & Wifey',
    date: 'Fri Sep 29 2018 15:01:08 GMT+0100 (BST)',
    events: [
      {
        id: 1,
        weddingId: 1,
        name: 'Sim\'s Maiyan',
        date: 'Tuesday, Sept 26',
        time: '5:30 pm',
        location: '6899 130 Street, Surrey',
        notes: 'string of notes',
        guests: [1, 2, 3]
      },
      {
        id: 2,
        weddingId: 1,
        name: 'Cocktail party',
        date: 'Tuesday, Sept 26',
        time: '5:30 pm',
        location: '6899 130 Street, Surrey.',
        notes: 'string of notes',
        guests: [1, 2, 3, 3, 4, 1, 2, 3, 4]
      },
      {
        id: 3,
        weddingId: 1,
        name: 'Reception',
        date: 'Tuesday, Sept 26',
        time: '5:30 pm',
        location: '6899 130 Street, Surrey.',
        notes: 'string of notes',
        guests: [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]
      },
      {
        id: 4,
        weddingId: 1,
        name: 'Fourth Event',
        date: 'Tuesday, Sept 26',
        time: '5:30 pm',
        location: '6899 130 Street, Surrey.',
        notes: 'string of notes',
        guests: [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]
      }
    ],
    guests: [
      {
        id: 1,
        groupId: 1,
        weddingId: 1,
        name: 'guest name',
        isPrimary: true,
        contactType: 'email',
        contactInfo: 'my@mail.com',
        inviteSent: true,
        events: [1, 2, 3, 4]
      },
      {
        id: 2,
        groupId: 1,
        weddingId: 1,
        name: 'guest name',
        isPrimary: false,
        inviteSent: false,
        events: [1, 2, 3, 4]
      }
    ]
  },
  session: {}
}