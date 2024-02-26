let realEstate1 = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
let realEstate2 = "https://plus.unsplash.com/premium_photo-1675324517011-24d2c741c22f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
let realEstate3 = "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
let realEstate4 = "https://images.unsplash.com/photo-1565402170291-8491f14678db?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
let realEstate5 = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
let realEstate6 = "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D"
let realEstate7 = "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D"
let realEstate8 = "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D"
let realEstate9 = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D"
let realEstate10 = "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D"

import icon1 from '../Assets/amenities/amenities.png'
import icon2 from '../Assets/amenities/amenities1.png'
import icon3 from '../Assets/amenities/amenities2.png'
import icon4 from '../Assets/amenities/amenities3.png'
import icon5 from '../Assets/amenities/amenities4.png'
import icon6 from '../Assets/amenities/amenities5.png'
import icon7 from '../Assets/amenities/amenities6.png'
import icon8 from '../Assets/amenities/amenities7.png'


export const realEstateData = [
  {
    "image_url": realEstate1,
    "name": "Luxury Villa",
    "location": "123 Oak Avenue, Somewhereville, USA",
    "price": 350000,
    "type": "Real Estate",
    "action": "Buy",
    "amenities": "This property features a swimming pool, gym, spa, and garden.",
    "facilities": "Additionally, it offers parking, security, concierge service, and Wi-Fi.",
    "amenitiesIcon": [icon2, icon3, icon4, icon1],
    "facilitiesIcon": [icon5, icon7, icon6, icon8]
  },
  {
    "image_url": realEstate2,
    "name": "Modern Apartment",
    "location": "456 Elm Street, Anytown, USA",
    "price": 150000,
    "type": "Real Estate",
    "action": "Buy",
    "amenities": "This property offers a gym and garden.",
    "facilities": "It includes parking and Wi-Fi.",
    "amenitiesIcon": [icon3, icon1, icon2, icon4],
    "facilitiesIcon": [icon6, icon5, icon8, icon7]
  },
  {
    "image_url": realEstate3,
    "name": "Seaside Cottage",
    "location": "101 Pine Street, Beach City, USA",
    "price": 280000,
    "type": "Real Estate",
    "action": "Buy",
    "amenities": "Enjoy the beachfront view and the cozy atmosphere of this cottage.",
    "facilities": "Parking is available.",
    "amenitiesIcon": [icon1, icon4, icon3, icon2],
    "facilitiesIcon": [icon8, icon5, icon7, icon6]
  },
  {
    "image_url": realEstate4,
    "name": "Mountain Chalet",
    "location": "222 Maple Avenue, Mountain Town, USA",
    "price": 420000,
    "type": "Real Estate",
    "action": "Buy",
    "amenities": "Experience the beauty of the mountains with this chalet.",
    "facilities": "Parking is provided for convenience.",
    "amenitiesIcon": [icon4, icon1, icon3, icon2],
    "facilitiesIcon": [icon7, icon5, icon8, icon6]
  },
  {
    "image_url": realEstate5,
    "name": "Urban Loft",
    "location": "777 Cedar Lane, City Center, USA",
    "price": 290000,
    "type": "Real Estate",
    "action": "Buy",
    "amenities": "This loft offers a contemporary urban living experience.",
    "facilities": "Parking is available for residents.",
    "amenitiesIcon": [icon3, icon4, icon2, icon1],
    "facilitiesIcon": [icon8, icon7, icon5, icon6]
  },
  {
    "image_url": realEstate6,
    "name": "Riverside Home",
    "location": "888 Walnut Drive, Riverside, USA",
    "price": 480000,
    "type": "Real Estate",
    "action": "Buy",
    "amenities": "Enjoy the serene riverside setting of this home.",
    "facilities": "Parking and Wi-Fi are included.",
    "amenitiesIcon": [icon2, icon4, icon1, icon3],
    "facilitiesIcon": [icon6, icon8, icon5, icon7]
  },
  {
    "image_url": realEstate7,
    "name": "Suburban Residence",
    "location": "321 Birch Street, Suburbia, USA",
    "price": 370000,
    "type": "Real Estate",
    "action": "Buy",
    "amenities": "Experience the comfort and tranquility of suburban living.",
    "facilities": "Parking is provided.",
    "amenitiesIcon": [icon1, icon4, icon3, icon2],
    "facilitiesIcon": [icon7, icon8, icon6, icon5]
  },
  {
    "image_url": realEstate8,
    "name": "Country Farmhouse",
    "location": "555 Pinecone Boulevard, Countryside, USA",
    "price": 200000,
    "type": "Real Estate",
    "action": "Buy",
    "amenities": "Experience rustic charm with this farmhouse.",
    "facilities": "Parking is available.",
    "amenitiesIcon": [icon3, icon2, icon4, icon1],
    "facilitiesIcon": [icon6, icon8, icon7, icon5]
  },
  {
    "image_url": realEstate9,
    "name": "Lakefront Property",
    "location": "999 Oakwood Avenue, Lakeside, USA",
    "price": 430000,
    "type": "Real Estate",
    "action": "Buy",
    "amenities": "Enjoy breathtaking views of the lake from this property.",
    "facilities": "Parking is provided.",
    "amenitiesIcon": [icon4, icon2, icon3, icon1],
    "facilitiesIcon": [icon7, icon8, icon5, icon6]
  },
  {
    "image_url": realEstate10,
    "name": "Harbor House",
    "location": "444 Chestnut Lane, Harbor City, USA",
    "price": 320000,
    "type": "Real Estate",
    "action": "Buy",
    "amenities": "This property offers a cozy harbor-side retreat.",
    "facilities": "Parking is available for residents.",
    "amenitiesIcon": [icon1, icon2, icon4, icon3],
    "facilitiesIcon": [icon5, icon8, icon6, icon7]
  },
  {
    "image_url": realEstate1,
    "name": "Mountain Retreat",
    "location": "777 Spruce Street, Mountainside, USA",
    "price": 250000,
    "type": "Real Estate",
    "action": "Buy",
    "amenities": "Enjoy the tranquility of the mountains with this retreat.",
    "facilities": "Parking is provided.",
    "amenitiesIcon": [icon3, icon1, icon4, icon2],
    "facilitiesIcon": [icon6, icon8, icon7, icon5]
  },
  {
    "image_url": realEstate2,
    "name": "Coastal Bungalow",
    "location": "666 Willow Drive, Coastal Town, USA",
    "price": 170000,
    "type": "Real Estate",
    "action": "Buy",
    "amenities": "Experience coastal living in this cozy bungalow.",
    "facilities": "Parking is available.",
    "amenitiesIcon": [icon1, icon4, icon2, icon3],
    "facilitiesIcon": [icon6, icon8, icon7, icon5]
  },
  {
    "image_url": realEstate3,
    "name": "Riverfront Mansion",
    "location": "888 Elmwood Avenue, Riverside, USA",
    "price": 390000,
    "type": "Real Estate",
    "action": "Buy",
    "amenities": "Enjoy luxurious living with a riverfront view from this mansion.",
    "facilities": "Parking and Wi-Fi are included.",
    "amenitiesIcon": [icon2, icon3, icon1, icon4],
    "facilitiesIcon": [icon7, icon6, icon8, icon5]
  },
  {
    "image_url": realEstate4,
    "name": "Bay View House",
    "location": "111 Cedar Avenue, Bay City, USA",
    "price": 450000,
    "type": "Real Estate",
    "action": "Buy",
    "amenities": "This property offers stunning views of the bay.",
    "facilities": "Parking is available.",
    "amenitiesIcon": [icon4, icon3, icon1, icon2],
    "facilitiesIcon": [icon6, icon8, icon7, icon5]
  },
  {
    "image_url": realEstate5,
    "name": "Lake House",
    "location": "222 Oak Lane, Lakeside, USA",
    "price": 260000,
    "type": "Real Estate",
    "action": "Buy",
    "amenities": "Enjoy lakefront living in this cozy house.",
    "facilities": "Parking is provided.",
    "amenitiesIcon": [icon1, icon4, icon2, icon3],
    "facilitiesIcon": [icon7, icon8, icon6, icon5]
  },
  {
    "image_url": realEstate6,
    "name": "Suburban Home",
    "location": "333 Maple Street, Suburbia, USA",
    "price": 370000,
    "type": "Real Estate",
    "action": "Buy",
    "amenities": "Experience comfortable suburban living in this home.",
    "facilities": "Parking is provided.",
    "amenitiesIcon": [icon1, icon2, icon4, icon3],
    "facilitiesIcon": [icon7, icon8, icon6, icon5]
  },
  {
    "image_url": realEstate7,
    "name": "Downtown Condo",
    "location": "777 Birch Lane, Downtown, USA",
    "price": 320000,
    "type": "Real Estate",
    "action": "Buy",
    "amenities": "Enjoy urban living in this downtown condo.",
    "facilities": "Parking is available.",
    "amenitiesIcon": [icon1, icon3, icon4, icon2],
    "facilitiesIcon": [icon7, icon6, icon8, icon5]
  },
  {
    "image_url": realEstate8,
    "name": "Coastal Retreat",
    "location": "444 Pine Street, Coastal Town, USA",
    "price": 280000,
    "type": "Real Estate",
    "action": "Buy",
    "amenities": "This property offers a relaxing coastal retreat.",
    "facilities": "Parking is provided.",
    "amenitiesIcon": [icon4, icon1, icon2, icon3],
    "facilitiesIcon": [icon6, icon5, icon7, icon8]
  },
  {
    "image_url": realEstate9,
    "name": "Harbor View Home",
    "location": "999 Walnut Avenue, Harbor City, USA",
    "price": 220000,
    "type": "Real Estate",
    "action": "Buy",
    "amenities": "Enjoy scenic harbor views from this home.",
    "facilities": "Parking is available.",
    "amenitiesIcon": [icon2, icon4, icon1, icon3],
    "facilitiesIcon": [icon5, icon8, icon7, icon6]
  },
  {
    "image_url": realEstate10,
    "name": "Mountain Chalet",
    "location": "666 Elm Lane, Mountainside, USA",
    "price": 400000,
    "type": "Real Estate",
    "action": "Buy",
    "amenities": "Experience mountain living in this cozy chalet.",
    "facilities": "Parking is provided.",
    "amenitiesIcon": [icon4, icon3, icon1, icon2],
    "facilitiesIcon": [icon8, icon6, icon5, icon7]
  }
]