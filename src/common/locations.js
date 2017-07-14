export default {
  locations: [
    {
      image: '/cimarron.jpg',
      header: 'Cimarron Recreation Center',
      address: '265 Red River Trail, Irving, TX 75063',
      schedule: [
        {
          day: 'Monday',
          time: '7:30pm to 9:30pm',
        },
        {
          day: 'Saturday',
          time: '9:00am to 12:00pm',
        },
      ],
      directions: 'http://maps.google.com/maps?um=1&tab=wl&hl=en&q=265%20Red%20River%20Trail%20TX',
    },
    {
      image: '/jcc.jpg',
      header: 'Jewish Community Center',
      address: '7900 Northaven Road, Dallas, TX 75230',
      notice: {
        header: 'Parking Notice',
        content: 'Use upper level parking lots only and use the Health & Fitness Complex entrance door located on North side of building. Sign in at front desk.',
      },
      schedule: [
        {
          day: 'Monday',
          time: '6:30pm to 9:30pm',
        },
        {
          day: 'Wednesday',
          time: '6:30pm to 9:30pm',
        },
      ],
      directions: 'http://maps.google.com/maps?f=q&hl=en&geocode=&q=7900+Northaven+Road,+Dallas+75230&sll=37.0625,-95.677068&sspn=45.014453,81.738281&ie=UTF8&z=16&iwloc=addr&om=1',
    },
    {
      image: '/tbarm.jpg',
      header: 'T Bar M Racquet Club',
      address: '6060 Dilbeck Ln, Dallas, TX 75240',
      schedule: [
        {
          day: 'Saturday',
          time: '2:00pm to 5:00pm',
        },
        {
          day: 'Sunday',
          time: '2:00pm to 5:00pm',
        },
      ],
      directions: 'https://www.google.com/maps/place/6060+Dilbeck+Ln,+Dallas,+TX+75240/@32.9292,-96.8036111,17z/data=!3m1!4b1!4m5!3m4!1s0x864c20fa8be63af1:0x96164675e63cb247!8m2!3d32.9292!4d-96.8014224?hl=en',
    },
  ],
}