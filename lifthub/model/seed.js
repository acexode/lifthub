const Space = require('./space')
Space.remove({}).then(() =>{
  console.log("all item removed")
});
Space.create(
    [{
        spaceType: 'Single bedrooms with one bed',
        details : {
          name: 'Single bed space',
          img: ['assets/deluxe.jpg','assets/small.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished bed space with smart room gadgets',
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
        spaceType: 'Single bedrooms with one bed',
        details : {
          name: 'Single bed space',
          img: ['assets/deluxe.jpg','assets/small.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished bed space with smart room gadgets',
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
        spaceType: 'Single bedrooms with one bed',
        details : {
          name: 'Single bed space',
          img: ['assets/deluxe.jpg','assets/small.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished bed space with smart room gadgets',
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
        spaceType: 'Single bedrooms with double beds',
        details : {
          name: 'Cottage',
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
        spaceType: 'Single bedrooms with double beds',
        details : {
          name: 'Cottage',
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
        spaceType: 'Single bedrooms with double beds',
        details : {
          name: 'Cottage',
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
        spaceType: 'Restaurant',
        details : {
          name: 'Cottage',
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
        spaceType: 'Restaurant',
        details : {
          name: 'Cottage',
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
        spaceType: 'Restaurant',
        details : {
          name: 'Cottage',
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
        spaceType: 'Pub',
        details : {
          name: 'Cottage',
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
        spaceType: 'Pub',
        details : {
          name: 'Cottage',
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
        spaceType: 'Pub',
        details : {
          name: 'Cottage',
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
        spaceType: 'Bar',
        details : {
          name: 'Cottage',
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
        spaceType: 'Bar',
        details : {
          name: 'Cottage',
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
        spaceType: 'Bar',
        details : {
          name: 'Cottage',
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
        spaceType: 'Coffee',
        details : {
          name: 'Cottage',
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
        spaceType: 'Coffee',
        details : {
          name: 'Cottage',
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
        spaceType: 'Coffee',
        details : {
          name: 'Cottage',
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
        spaceType: 'Library',
        details : {
          name: 'Double bed space',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Library',
        details : {
          name: 'Double bed space',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Library',
        details : {
          name: 'Double bed space',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Library',
        details : {
          name: 'Double bed space',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Movies',
        details : {
          name: 'Double bed space',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Movies',
        details : {
          name: 'Double bed space',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Movies',
        details : {
          name: 'Double bed space',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Movies',
        details : {
          name: 'Double bed space',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Concert',
        details : {
          name: 'Double bed space',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Concert',
        details : {
          name: 'Double bed space',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Concert',
        details : {
          name: 'Double bed space',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Boat ride',
        details : {
          name: 'Double bed space',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Boat ride',
        details : {
          name: 'Double bed space',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Boat ride',
        details : {
          name: 'Double bed space',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Receptions',
        details : {
          name: 'Double bed space',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Receptions',
        details : {
          name: 'Double bed space',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Receptions',
        details : {
          name: 'Double bed space',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Receptions',
        details : {
          name: 'Double bed space',
          img: ['assets/luxury.jpg','assets/small.jpg','assets/family.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Club',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Club',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Club',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Table',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Table',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Table',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Table',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Meetups',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Meetups',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Meetups',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Meetups',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'bonfire',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'bonfire',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'bonfire',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'bonfire',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'barbecue',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'barbecue',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'barbecue',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'barbecue',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'stargazing',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'stargazing',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'stargazing',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'stargazing',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Executive bedrooms',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Executive bedrooms',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Executive bedrooms',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Executive bedrooms',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Executive suites',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Executive suites',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Executive suites',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Executive suites',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Luxury suites',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Luxury suites',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Luxury suites',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Luxury suites',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Apartments',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Apartments',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Apartments',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Apartments',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Picnics',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Picnics',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Picnics',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Picnics',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Meeting',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Meeting',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Meeting',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Meeting',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Private Meeting',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Private Meeting',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Private Meeting',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Private Meeting',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Board Meeting',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Board Meeting',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Board Meeting',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Board Meeting',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Group Meeting',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Group Meeting',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Group Meeting',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Group Meeting',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Group Meeting',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Trainings',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Trainings',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Trainings',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Trainings',
        details : {
          name: 'Double bed space',
          img: ['assets/single1.jpg','assets/deluxe.jpg','assets/king.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Conference',
        details : {
          name: 'Maitama conference space',
          img: ['assets/king.jpg','assets/small.jpg','assets/single1.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Conference',
        details : {
          name: 'Maitama conference space',
          img: ['assets/king.jpg','assets/small.jpg','assets/single1.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Conference',
        details : {
          name: 'Maitama conference space',
          img: ['assets/king.jpg','assets/small.jpg','assets/single1.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Conference',
        details : {
          name: 'Maitama conference space',
          img: ['assets/king.jpg','assets/small.jpg','assets/single1.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Seminars',
        details : {
          name: 'Private-Office space',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Seminars',
        details : {
          name: 'Private-Office space',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Seminars',
        details : {
          name: 'Private-Office space',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Lectures',
        details : {
          name: 'Private-Office space',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Lectures',
        details : {
          name: 'Private-Office space',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Lectures',
        details : {
          name: 'Private-Office space',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Private Office',
        details : {
          name: 'Private-Office space',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Private Office',
        details : {
          name: 'Private-Office space',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Private Office',
        details : {
          name: 'Private-Office space',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Private Office',
        details : {
          name: 'Private-Office space',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Shared Office',
        details : {
          name: 'Private-Office space',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Shared Office',
        details : {
          name: 'Private-Office space',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Shared Office',
        details : {
          name: 'Private-Office space',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Co-working',
        details : {
          name: 'Private-Office space',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Co-working',
        details : {
          name: 'Private-Office space',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'Co-working',
        details : {
          name: 'Private-Office space',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'open',
        details : {
          name: 'Private-Office space',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'open',
        details : {
          name: 'Private-Office space',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'open',
        details : {
          name: 'Private-Office space',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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
        spaceType: 'open',
        details : {
          name: 'Private-Office space',
          img: ['assets/family.jpg','assets/king.jpg','assets/small.jpg'],
          location: 'Central Business District, Abuja',
          description: 'Beautifully furnished double bed space with smart room gadgets',
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