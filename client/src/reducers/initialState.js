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
    wedding_id: 1,
    user_id: 1,
    name: 'Sim & Wifey',
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
  },
  session: {}
}