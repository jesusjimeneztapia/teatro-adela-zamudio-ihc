const schedules = [
  {
    id: '3b663257-3e84-41bc-b190-abee5026dfde',
    day: 'vie.',
    dayNumber: 11,
    hours: [
      {
        id: '72400070-9c88-44b5-be6c-3716488f5466',
        hour: '10:00',
        seats: []
      },
      {
        id: '9392c963-c954-430a-b277-67659cdaf3ff',
        hour: '19:00',
        seats: []
      }
    ]
  },
  {
    id: '3440baeb-4d02-4cf7-992f-495eccc1369a',
    day: 'sáb.',
    dayNumber: 12,
    hours: [
      {
        id: '7744d9ac-527f-441d-ad2d-80611e72a169',
        hour: '13:00',
        seats: []
      }
    ]
  },
  {
    id: 'd9a81db0-474e-4ed3-9e1c-72ee542244b2',
    day: 'dom.',
    dayNumber: 13,
    hours: [
      {
        id: '25d61fd9-9897-4d2a-8543-9871a6f8e6db',
        hour: '9:00',
        seats: []
      },
      {
        id: '36aab101-59d0-41e4-8729-1bfeb14c2c83',
        hour: '14:00',
        seats: []
      },
      {
        id: '45a5ea1c-1582-4809-85b0-160ca51abc8c',
        hour: '17:00',
        seats: []
      }
    ]
  }
]

export async function getSchedules(eventId) {
  return schedules
}