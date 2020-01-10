const Space = require('./space')
Space.remove({}).then(() =>{
  console.log("all item removed")
});
Space.create(
    [{
        spaceType: 'Bed Spacess',
        details : {
          name: 'Single bedrooms with one bed',
          img: ['assets/deluxe.jpg','assets/small.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished bed spaces with smart room gadgets',
          price: '1,000,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Bed Spaces',
        details : {
          name: 'Single bedrooms with one bed',
          img: ['assets/deluxe.jpg','assets/small.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished bed spaces with smart room gadgets',
          price: '1,000,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Bed Spaces',
        details : {
          name: 'Single bedrooms with one bed',
          img: ['assets/deluxe.jpg','assets/small.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished bed spaces with smart room gadgets',
          price: '1,000,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Bed Spaces',
        details : {
          name: 'Single bedrooms with double bed',
          img: ['assets/small.jpg','assets/luxury.jpg','assets/single1.jpg'],
          location: 'IBB Way, Abuja',
          description: 'Beautifully furnished office with electronic gadgets',
          price: '1,500,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Bed Spaces',
        details : {
          name: 'Single bedrooms with double bed',
          img: ['assets/small.jpg','assets/luxury.jpg','assets/single1.jpg'],
          location: 'IBB Way, Abuja',
          description: 'Beautifully furnished office with electronic gadgets',
          price: '1,500,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Bed Spaces',
        details : {
          name: 'Single bedrooms with double bed',
          img: ['assets/small.jpg','assets/luxury.jpg','assets/single1.jpg'],
          location: 'IBB Way, Abuja',
          description: 'Beautifully furnished office with electronic gadgets',
          price: '1,500,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Restaurant',
          img: ['assets/small.jpg','assets/luxury.jpg','assets/single1.jpg'],
          location: 'IBB Way, Abuja',
          description: 'Beautifully furnished office with electronic gadgets',
          price: '1,500,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Restaurant',
          img: ['assets/small.jpg','assets/luxury.jpg','assets/single1.jpg'],
          location: 'IBB Way, Abuja',
          description: 'Beautifully furnished office with electronic gadgets',
          price: '1,500,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Restaurant',
          img: ['assets/small.jpg','assets/luxury.jpg','assets/single1.jpg'],
          location: 'IBB Way, Abuja',
          description: 'Beautifully furnished office with electronic gadgets',
          price: '1,500,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Pub',
          img: ['assets/small.jpg','assets/luxury.jpg','assets/single1.jpg'],
          location: 'IBB Way, Abuja',
          description: 'Beautifully furnished office with electronic gadgets',
          price: '1,500,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Pub',
          img: ['assets/small.jpg','assets/luxury.jpg','assets/single1.jpg'],
          location: 'IBB Way, Abuja',
          description: 'Beautifully furnished office with electronic gadgets',
          price: '1,500,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Pub',
          img: ['assets/small.jpg','assets/luxury.jpg','assets/single1.jpg'],
          location: 'IBB Way, Abuja',
          description: 'Beautifully furnished office with electronic gadgets',
          price: '1,500,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Bar',
          img: ['assets/small.jpg','assets/luxury.jpg','assets/single1.jpg'],
          location: 'IBB Way, Abuja',
          description: 'Beautifully furnished office with electronic gadgets',
          price: '1,500,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Bar',
          img: ['assets/small.jpg','assets/luxury.jpg','assets/single1.jpg'],
          location: 'IBB Way, Abuja',
          description: 'Beautifully furnished office with electronic gadgets',
          price: '1,500,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Bar',
          img: ['assets/small.jpg','assets/luxury.jpg','assets/single1.jpg'],
          location: 'IBB Way, Abuja',
          description: 'Beautifully furnished office with electronic gadgets',
          price: '1,500,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Coffee',
          img: ['assets/small.jpg','assets/luxury.jpg','assets/single1.jpg'],
          location: 'IBB Way, Abuja',
          description: 'Beautifully furnished office with electronic gadgets',
          price: '1,500,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Coffee',
          img: ['assets/small.jpg','assets/luxury.jpg','assets/single1.jpg'],
          location: 'IBB Way, Abuja',
          description: 'Beautifully furnished office with electronic gadgets',
          price: '1,500,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Coffee',
          img: ['assets/small.jpg','assets/luxury.jpg','assets/single1.jpg'],
          location: 'IBB Way, Abuja',
          description: 'Beautifully furnished office with electronic gadgets',
          price: '1,500,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Library',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Library',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Library',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Library',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Movies',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Movies',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Movies',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Movies',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Concert',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Concert',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Concert',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Boat ride',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Boat ride',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Boat ride',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Receptions',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Receptions',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Receptions',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Reception',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: false,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Club',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Club',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Club',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Table',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Table',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Table',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Table',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Meetups',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Meetups',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Meetups',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Meetups',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'bonfire',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'bonfire',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'bonfire',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'bonfire',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'barbecue',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'barbecue',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'barbecue',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'barbecue',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Stargazing',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Stargazing',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Stargazing',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Spaces',
        details : {
          name: 'Stargazing',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Bed Spaces',
        details : {
          name: 'Executive Bedrooms',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Bed Spaces',
        details : {
          name: 'Executive Bedrooms',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Bed Spaces',
        details : {
          name: 'Executive Bedrooms',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Bed Spaces',
        details : {
          name: 'Executive Bedrooms',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Bed Spaces',
        details : {
          name: 'Executive suites',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Bed Spaces',
        details : {
          name: 'Executive suites',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Bed Spaces',
        details : {
          name: 'Executive suites',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Bed Spaces',
        details : {
          name: 'Executive suites',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Bed Spaces',
        details : {
          name: 'Luxury suites',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Bed Spaces',
        details : {
          name: 'Luxury suites',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Bed Spaces',
        details : {
          name: 'Luxury suites',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Bed Spaces',
        details : {
          name: 'Luxury suites',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Bed Spaces',
        details : {
          name: 'Apartments',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Bed Spaces',
        details : {
          name: 'Apartments',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Bed Spaces',
        details : {
          name: 'Apartments',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Bed Spaces',
        details : {
          name: 'Apartments',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Places',
        details : {
          name: 'Picnics',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Places',
        details : {
          name: 'Picnics',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Places',
        details : {
          name: 'Picnics',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Fun Places',
        details : {
          name: 'Picnics',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Event Spaces',
        details : {
          name: 'Meeting',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Event Spaces',
        details : {
          name: 'Meeting',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Event Spaces',
        details : {
          name: 'Double bed spaces',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Event Spaces',
        details : {
          name: 'Meeting',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Event Spaces',
        details : {
          name: 'Private meeting',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Event Spaces',
        details : {
          name: 'Private meeting',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Event Spaces',
        details : {
          name: 'Private meeting',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Event Spaces',
        details : {
          name: 'Private meeting',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Event Spaces',
        details : {
          name: 'Private meeting',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Event Spaces',
        details : {
          name: 'Board meeting',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Event Spaces',
        details : {
          name: 'Board meeting',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Event Spaces',
        details : {
          name: 'Board meeting',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Event Spaces',
        details : {
          name: 'Group meeting',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Event Spaces',
        details : {
          name: 'Group meeting',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Event Spaces',
        details : {
          name: 'Group meeting',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Event Spaces',
        details : {
          name: 'Group meeting',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Event Spaces',
        details : {
          name: 'Group meeting',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Event Spaces',
        details : {
          name: 'Trainings',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Event Spaces',
        details : {
          name: 'Trainings',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Event Spaces',
        details : {
          name: 'Trainings',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Event Spaces',
        details : {
          name: 'Trainings',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: true,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Event Spaces',
        details : {
          name: 'Event Spaces',
          img: ['assets/king.jpg','assets/small.jpg','assets/single1.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: false,
            breakfast: false,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Event Spaces',
        details : {
          name: 'Conference',
          img: ['assets/king.jpg','assets/small.jpg','assets/single1.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: false,
            breakfast: false,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Event Spaces',
        details : {
          name: 'Conference',
          img: ['assets/king.jpg','assets/small.jpg','assets/single1.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: false,
            breakfast: false,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Event Spaces',
        details : {
          name: 'Conference',
          img: ['assets/king.jpg','assets/small.jpg','assets/single1.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: false,
            breakfast: false,
            whiteBoard: true
          },
          bookings: []
    
      },
      {
        spaceType: 'Event Spaces',
        details : {
          name: 'Seminars',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Event Spaces',
        details : {
          name: 'Seminars',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Event Spaces',
        details : {
          name: 'Seminars',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Event Spaces',
        details : {
          name: 'Lectures',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Event Spaces',
        details : {
          name: 'Lectures',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Event Spaces',
        details : {
          name: 'Lectures',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Work Spaces',
        details : {
          name: 'Private Office',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Work Spaces',
        details : {
          name: 'Private Office',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Work Spaces',
        details : {
          name: 'Private Office',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Work Spaces',
        details : {
          name: 'Private Office',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Work Spaces',
        details : {
          name: 'Shared Office',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Work Spaces',
        details : {
          name: 'Shared Office',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Work Spaces',
        details : {
          name: 'Shared Office',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Work Spaces',
        details : {
          name: 'Co-working',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Work Spaces',
        details : {
          name: 'Co-working',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Work Spaces',
        details : {
          name: 'Co-working',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Work Spaces',
        details : {
          name: 'Open',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Work Spaces',
        details : {
          name: 'Open',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Work Spaces',
        details : {
          name: 'Open',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: false
          },
          bookings: []
    
      },
      {
        spaceType: 'Work Spaces',
        details : {
          name: 'Open',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed spaces with smart room gadgets',
          price: '1,200,000',
          },
          assets: {
            wifi: true,
            projector: true,
            tv: true,
            breakfast: false,
            whiteBoard: false
          },
          bookings: []
    
      },
    ]
).then(spaces =>{
    console.log(`${spaces.length} spaces have been created`)
}).catch(err =>{
    console.error(err)
})