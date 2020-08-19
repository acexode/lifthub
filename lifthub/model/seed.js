const Space = require('./space')
Space.remove({}).then(() =>{
  console.log("all item removed")
});
owners = ['5e0762abf083a90e70f6abae','5e2026421e232121bc17fbfe','5e29cf02120e43514cc5c31e', '5e29cff9b3e4e6548057c6a2','5f2a4db790f94b58e42c345d']
const state = ['Abuja', 'Lagos', 'Portharcourt']
const titles = ["Matsoft","Treeflex","Home Ing","Tresom","Opela","Alpha","Otcom","Job","Tin",
"Quo Lux","Stim","Sonair","Wrapsafe","Overhold","Mat Lam Tam","Bitchip","Fix San","Voltsillam","Redhold","Opela",
"Pannier","Konklab","Flexidy","Hatity","Cardguard","Gembucket","Zaam-Dox","Stim","Konklab","Bitwolf"]
const assets = [true,false]
const price = [50000,35000,40000,100000,55000,30000,45000,60000,75000,80000,92000,85000,65000,70000]
const services = {
      wifi: 1300,
      breakfast: 1300,
      lunch:1300,
      dinner: 1300,
      external_catering:1500,
      snacks_drinks:800,
      airport_transfer:3000
    }
const booking = []
const spaces = []

const work = ['Private offices', ' Shared offices', 'Co-working spaces', ' Open workspaces', ].map(cat =>{

        let spaces = []
        for(var i=0; i<= 25; i++){
          var owner_id = owners[Math.floor(Math.random()*owners.length)];
          var stateAddress = state[Math.floor(Math.random()*state.length)];
            spaces.push({
              spaceType : 'Office Spaces',
              owner_id,
              category: cat,
              details:  {
                title: titles[Math.floor(Math.random()*titles.length)] ,
                capacity: Math.floor(Math.random()*5),
                img: ['assets/img/deluxe.jpg','assets/img/small.jpg','assets/img/king.jpg'],
                state: stateAddress,
                city: stateAddress,
                address: stateAddress,
                description: `Beautifully furnished ${cat} spaces with smart room gadgets`,
                price: price[Math.floor(Math.random()*price.length)]
                },
                assets : {
                  air_condition: assets[Math.floor(Math.random()*assets.length)],
                  refrigerator: assets[Math.floor(Math.random()*assets.length)],
                  projector: assets[Math.floor(Math.random()*assets.length)],
                  sound_system: assets[Math.floor(Math.random()*assets.length)],
                  tv: assets[Math.floor(Math.random()*assets.length)],
                  whiteBoard:assets[Math.floor(Math.random()*assets.length)],
                  gym:assets[Math.floor(Math.random()*assets.length)]
                },
                services,
              booking
            })
        }
        return spaces

 })
const event = ['Picnics','Meetings', 'Trainings', 'Private meeting', 'Board meeting','Group meeting','Receptions', 'Conference spaces','Trainings',
'Seminars','Meetups', 'Lectures'].map(cat =>{

  let spaces = []
  for(var i=0; i<= 25; i++){
    var owner_id = owners[Math.floor(Math.random()*owners.length)];
    var stateAddress = state[Math.floor(Math.random()*state.length)];
      spaces.push({
        spaceType : 'Event Spaces',
        owner_id,
        category: cat,
        details:  {
          title: titles[Math.floor(Math.random()*titles.length)] ,
          capacity: Math.floor(Math.random()*1000),
          img: ['assets/img/deluxe.jpg','assets/img/small.jpg','assets/img/king.jpg'],
          state: stateAddress,
          city: stateAddress,
          address: stateAddress,
          description: `Beautifully furnished ${cat} spaces with smart room gadgets`,
          price: price[Math.floor(Math.random()*price.length)]
          },
          assets : {
            air_condition: assets[Math.floor(Math.random()*assets.length)],
            refrigerator: assets[Math.floor(Math.random()*assets.length)],
            projector: assets[Math.floor(Math.random()*assets.length)],
            sound_system: assets[Math.floor(Math.random()*assets.length)],
            tv: assets[Math.floor(Math.random()*assets.length)],
            whiteBoard:assets[Math.floor(Math.random()*assets.length)],
            gym:assets[Math.floor(Math.random()*assets.length)]
          },
          services,
        booking
      })
  }
  return spaces

})
const bed = ['Single bedrooms with one bed', 'Single bedrooms with double beds', 'Executive bedrooms', 'Executive suite', 'Luxury suite' ,'Apartments' ].map(cat =>{

  let spaces = []
  for(var i=0; i<= 25; i++){
    var owner_id = owners[Math.floor(Math.random()*owners.length)];
    var stateAddress = state[Math.floor(Math.random()*state.length)];
      spaces.push({
        spaceType : 'Bed Spaces',
        owner_id,
        category: cat,
        details:  {
          title: titles[Math.floor(Math.random()*titles.length)] ,
          capacity: Math.floor(Math.random()*2),
          img: ['assets/img/deluxe.jpg','assets/img/small.jpg','assets/img/king.jpg'],
          state: stateAddress,
          city: stateAddress,
          address: stateAddress,
          description: `Beautifully furnished ${cat} spaces with smart room gadgets`,
          price: price[Math.floor(Math.random()*price.length)]
          },
          assets : {
            air_condition: assets[Math.floor(Math.random()*assets.length)],
            refrigerator: assets[Math.floor(Math.random()*assets.length)],
            projector: assets[Math.floor(Math.random()*assets.length)],
            sound_system: assets[Math.floor(Math.random()*assets.length)],
            tv: assets[Math.floor(Math.random()*assets.length)],
            whiteBoard:assets[Math.floor(Math.random()*assets.length)],
            gym:assets[Math.floor(Math.random()*assets.length)]
          },
          services,
        booking
      })
  }
  return spaces

})
const fun = ['Restaurant','Pub','Bar','Coffee shop','Library','Movies','Concerts','Boat ride','Book a club','Book a table at a club','Bonfire night',
'Barbecue party','Stargazing'].map(cat =>{
  let spaces = []
  for(var i=0; i<= 25; i++){
    var owner_id = owners[Math.floor(Math.random()*owners.length)];
    var stateAddress = state[Math.floor(Math.random()*state.length)];
      spaces.push({
        spaceType : 'Fun Spaces',
        owner_id,
        category: cat,
        details:  {
          title: titles[Math.floor(Math.random()*titles.length)] ,
          capacity: Math.floor(Math.random()*30),
          img: ['assets/img/deluxe.jpg','assets/img/small.jpg','assets/img/king.jpg'],
          state: stateAddress,
          city: stateAddress,
          address: stateAddress,
          description: `Beautifully furnished ${cat} spaces with smart room gadgets`,
          price: price[Math.floor(Math.random()*price.length)]
          },
          assets : {
            air_condition: assets[Math.floor(Math.random()*assets.length)],
            refrigerator: assets[Math.floor(Math.random()*assets.length)],
            projector: assets[Math.floor(Math.random()*assets.length)],
            sound_system: assets[Math.floor(Math.random()*assets.length)],
            tv: assets[Math.floor(Math.random()*assets.length)],
            whiteBoard:assets[Math.floor(Math.random()*assets.length)],
            gym:assets[Math.floor(Math.random()*assets.length)]
          },
          services,
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
