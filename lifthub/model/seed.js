const Space = require('./space')
// Space.remove({}).then(() =>{
//   console.log("all item removed")
// });
owners = ['5e0762abf083a90e70f6abae','5e2026421e232121bc17fbfe','5e29cf02120e43514cc5c31e', '5e29cff9b3e4e6548057c6a2']
const details =  {
  name: 'Single bedrooms with one bed ' ,
  img: ['assets/deluxe.jpg','assets/small.jpg','assets/king.jpg'],
  location: 'Central Business District, Abuja',
  description: 'Beautifully furnished bed spaces with smart room gadgets',
  price: '1,000,000',
  }
const assets =  {
  wifi: true,
  projector: false,
  tv: true,
  breakfast: true,
  whiteBoard: false
}
const booking = [] 
const spaces = []

const work = ['Private offices', ' Shared offices', 'Co-working spaces', ' Open workspaces', ].map(cat =>{
        
        let spaces = []
        for(var i=0; i<= 5; i++){
          var owner_id = owners[Math.floor(Math.random()*owners.length)];
            spaces.push({
              spaceType : 'Work Spaces',
              owner_id,
              category: cat,
              details,
              assets,
              booking
            })
        }
        return spaces 

 })
const event = ['Picnics','Meetings', 'Trainings', 'Private meeting', 'Board meeting','Group meeting','Receptions', 'Conference spaces','Trainings',
'Seminars','Meetups', 'Lectures'].map(cat =>{
        
  let spaces = []
  for(var i=0; i<= 5; i++){
    var owner_id = owners[Math.floor(Math.random()*owners.length)];
      spaces.push({
        spaceType : 'Event Spaces',
        owner_id,
        category: cat,
        details,
        assets,
        booking
      })
  }
  return spaces 

})
const bed = ['Single bedrooms with one bed', 'Single bedrooms with double beds', 'Executive bedrooms', 'Executive suite', 'Luxury suite' ,'Apartments' ].map(cat =>{
        
  let spaces = []
  for(var i=0; i<= 5; i++){
    var owner_id = owners[Math.floor(Math.random()*owners.length)];
      spaces.push({
        spaceType : 'Bed Spaces',
        owner_id,
        category: cat,
        details,
        assets,
        booking
      })
  }
  return spaces 

})
const fun = ['Restaurant','Pub','Bar','Coffee shop','Library','Movies','Concerts','Boat ride','Book a club','Book a table at a club','Bonfire night',
'Barbecue party','Stargazing'].map(cat =>{        
  let spaces = []
  for(var i=0; i<= 5; i++){
    var owner_id = owners[Math.floor(Math.random()*owners.length)];
      spaces.push({
        spaceType : 'Fun Spaces',
        owner_id,
        category: cat,
        details,
        assets,
        booking
      })
  }
  return spaces 

})
// console.log(...work)
spaces.push(...work.flat(Infinity), ...event.flat(Infinity), ...bed.flat(Infinity), ...fun.flat(Infinity))
console.log(spaces.slice(1,10))
Space.create(spaces).then(spaces =>{
    console.log(`${spaces.length} spaces have been created`)
}).catch(err =>{
    console.error(err)
})