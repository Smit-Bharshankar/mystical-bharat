const destinations = [
    // East India
    {
      price: 22000,
      duration: 6,
      id: '1',
      title: 'Darjeeling',
      state: 'West Bengal',
      category: 'Hill Station',
      direction: 'East India',
      img: '/Photos/Darjeeling, West Bengal.jpg',
      desc: 'Darjeeling, West Bengal, boasts stunning tea gardens, breathtaking views of the Himalayas, colonial architecture, and a vibrant blend of cultures.',
      features: ['Stunning tea gardens', 'Breathtaking views of the Himalayas', 'Colonial architecture', 'Vibrant blend of cultures']
  },
  {
      price: 15000,
      duration: 6,
      id: '2',
      title: 'Konark',
      state: 'Odisha',
      category: 'Heritage',
      direction: 'East India',
      img: '/Photos/Konark, Odisha.jpg',
      desc: 'Konark, Odisha, renowned for its Sun Temple, showcases exquisite stone carvings, rich history, and scenic beaches along the Bay of Bengal coast.',
      features: ['Exquisite stone carvings', 'Rich history', 'Scenic beaches along the Bay of Bengal coast']
  },
  {
      price: 30000,
      duration: 5,
      id: '3',
      title: 'Gaya',
      state: 'Bihar',
      category: 'Religious',
      direction: 'East India',
      img: '/Photos/Gaya, Bihar.jpg',
      desc: 'Gaya, Bihar, holds cultural significance as a pilgrimage site for Hindus and Buddhists, with attractions like Mahabodhi Temple and Vishnupad Temple.',
      features: ['Cultural significance as a pilgrimage site', 'Attractions like Mahabodhi Temple and Vishnupad Temple']
  },
  {
      price: 25000,
      duration: 7,
      id: '4',
      title: 'Jagannath Puri',
      state: 'Odisha',
      category: 'Religious',
      direction: 'East India',
      img: '/Photos/Jagannath puri, Odisha.jpg',
      desc: 'Jagannath Puri, Odisha, home to the famous Jagannath Temple, offers spiritual sanctity, vibrant festivals like Rath Yatra, and serene beaches along the Bay of Bengal.',
      features: ['Spiritual sanctity', 'Vibrant festivals like Rath Yatra', 'Serene beaches along the Bay of Bengal']
  },
  {
      price: 28000,
      duration: 4,
      id: '5',
      title: 'Deoghar',
      state: 'Jharkhand',
      category: 'Religious',
      direction: 'East India',
      img: '/Photos/Deoghar, Jharkhand.jpg',
      desc: 'Deoghar, Jharkhand, renowned for Baidyanath Temple, is a pilgrimage site with natural beauty, hot springs, and vibrant festivals, attracting tourists and devotees.',
      features: ['Pilgrimage site with natural beauty', 'Hot springs', 'Vibrant festivals']
  },
  {
      price: 35000,
      duration: 8,
      id: '6',
      title: 'Nalanda',
      state: 'Bihar',
      category: 'Heritage',
      direction: 'East India',
      img: '/Photos/Nalanda, Bihar.jpg',
      desc: 'Nalanda, Bihar, once a renowned ancient center of learning, is now a UNESCO World Heritage Site, housing impressive ruins of its ancient university',
      features: ['UNESCO World Heritage Site', 'Impressive ruins of its ancient university']
  } , 
  
    // West India
    {
      price: 28000,
      duration: 5,
      id: '7',
      title: 'Calangute Beach',
      state: 'Goa',
      category: 'Beach',
      direction: 'West India',
      img: '/Photos/Calangute Beach, Goa.jpg',
      desc: 'Calangute Beach, Goa, known as the "Queen of Beaches," is a bustling destination with golden sands, water sports, vibrant shacks, and lively nightlife.',
      features: ['Bustling destination with golden sands', 'Water sports', 'Vibrant shacks', 'Lively nightlife']
  },
  {
      price: 32000,
      duration: 4,
      id: '8',
      title: 'Rann Of Kutch',
      state: 'Gujarat',
      category: 'Nature',
      direction: 'West India',
      img: '/Photos/Rann Of Kutch, Gujarat.jpg',
      desc: 'Rann of Kutch, Gujarat, is a vast salt marsh, famous for its white desert landscape, cultural festivals like Rann Utsav, and unique wildlife experiences',
      features: ['Vast salt marsh', 'White desert landscape', 'Cultural festivals like Rann Utsav', 'Unique wildlife experiences']
  },
  {
      price: 25000,
      duration: 7,
      id: '9',
      title: 'Jaipur',
      state: 'Rajasthan',
      category: 'Heritage',
      direction: 'West India',
      img: '/Photos/Jaipur, Rajasthan.jpg',
      desc: "Jaipur, Rajasthan's Pink City, is a historic marvel with majestic palaces, vibrant bazaars, and cultural richness, epitomizing the royal charm of Rajasthan.",
      features: ['Historic marvel with majestic palaces', 'Vibrant bazaars', 'Cultural richness']
  },
  {
      price: 18000,
      duration: 6,
      id: '10',
      title: 'Mahabaleshwar',
      state: 'Maharashtra',
      category: 'Hill Station',
      direction: 'West India',
      img: '/Photos/Mahabaleshwar, Maharashtra.jpg',
      desc: 'Mahabaleshwar, Maharashtra, a scenic hill station, offers lush greenery, panoramic views, strawberry farms, and serene lakes, making it a popular getaway destination',
      features: ['Scenic hill station with lush greenery', 'Panoramic views', 'Strawberry farms', 'Serene lakes']
  },
  {
      price: 30000,
      duration: 5,
      id: '11',
      title: 'Dwaraka',
      state: 'Gujarat',
      category: 'Religious',
      direction: 'West India',
      img: '/Photos/Dwaraka, Gujarat.jpg',
      desc: 'Dwaraka, Gujarat, is an ancient city, steeped in mythology and spirituality, renowned for its temples, including the revered Dwarkadhish Temple.',
      features: ['Ancient city steeped in mythology and spirituality', 'Renowned temples including Dwarkadhish Temple']
  },
  {
      price: 22000,
      duration: 7,
      id: '12',
      title: 'Diu',
      state: 'Diu and Daman',
      category: 'Beach',
      direction: 'West India',
      img: '/Photos/Diu, Diu and Daman.jpg',
      desc: 'Diu, Daman, and Diu offer sandy beaches, Portuguese colonial architecture, and a relaxed coastal vibe, making them ideal destinations for a tranquil getaway.',
      features: ['Sandy beaches', 'Portuguese colonial architecture', 'Relaxed coastal vibe']
  } ,
    // North-east India
    {
      price: 30000,
      duration: 4,
      id: '13',
      title: 'Kaziranga National Park',
      state: 'Assam',
      category: 'Wildlife',
      direction: 'North-east India',
      img: '/Photos/Kaziranga-National-Park-Assam.jpg',
      desc: 'UNESCO World Heritage Site, renowned for its population of one-horned rhinos, diverse wildlife, wetlands, and conservation efforts against poaching and habitat loss.',
      features: ['Population of one-horned rhinos', 'Diverse wildlife', 'Wetlands', 'Conservation efforts against poaching and habitat loss']
  },
  {
      price: 25000,
      duration: 6,
      id: '14',
      title: 'Tawang Monastery',
      state: 'Arunachal Pradesh',
      category: 'Heritage',
      direction: 'North-east India',
      img: '/Photos/Tawang Monastery, Arunachal Pradesh.jpg',
      desc: 'Tawang Monastery, located in Arunachal Pradesh, is one of the largest Tibetan Buddhist monasteries in the world, renowned for its stunning architecture and spiritual significance',
      features: ['One of the largest Tibetan Buddhist monasteries in the world', 'Stunning architecture', 'Spiritual significance']
  },
  {
      price: 20000,
      duration: 3,
      id: '15',
      title: 'Nathu La Pass',
      state: 'Sikkim',
      category: 'Nature',
      direction: 'North-east India',
      img: '/Photos/Nathu La Pass, Sikkim.png',
      desc: 'Nathu La Pass, situated in Sikkim, is a mountain pass connecting India and China, known for its strategic significance and breathtaking Himalayan views.',
      features: ['Mountain pass connecting India and China', 'Strategic significance', 'Breathtaking Himalayan views']
  },
  {
      price: 35000,
      duration: 5,
      id: '16',
      title: 'Cherrapunji',
      state: 'Meghalaya',
      category: 'Nature',
      direction: 'North-east India',
      img: '/Photos/Cherrapunji, Meghalaya.jpg',
      desc: 'Cherrapunji, in Meghalaya, India, is famous for its exceptionally high rainfall and lush green landscapes, offering stunning waterfalls and natural beauty to visitors',
      features: ['Exceptionally high rainfall', 'Lush green landscapes', 'Stunning waterfalls']
  },
  {
      price: 28000,
      duration: 7,
      id: '17',
      title: 'Dampa Tiger Reserve',
      state: 'Mizoram',
      category: 'Wildlife',
      direction: 'North-east India',
      img: '/Photos/Dampa Tiger Reserves, Mizoram.jpg',
      desc: 'Dampa Tiger Reserve in Mizoram, India, is a biodiverse sanctuary home to various species, including the endangered Bengal tiger, offering unique wildlife experiences.',
      features: ['Biodiverse sanctuary', 'Endangered Bengal tiger', 'Unique wildlife experiences']
  },
  {
      price: 22000,
      duration: 5,
      id: '18',
      title: 'Dimapur',
      state: 'Nagaland',
      category: 'City',
      direction: 'North-east India',
      img: '/Photos/Dimapur, Nagaland.jpg',
      desc: "Dimapur, Nagaland's largest city, is a vibrant commercial hub with a rich cultural heritage, known for its markets, historical sites, and Naga cuisine.",
      features: ['Vibrant commercial hub', 'Rich cultural heritage', 'Markets', 'Historical sites', 'Naga cuisine']
  },
  {
      price: 18000,
      duration: 6,
      id: '19',
      title: 'Loktak Lake',
      state: 'Manipur',
      category: 'City',
      direction: 'North-east India',
      img: '/Photos/Loktak Lake, Manipur.jpg',
      desc: 'Loktak Lake in Manipur is the largest freshwater lake in Northeast India, famous for its phumdis (floating islands) and unique ecosystem supporting diverse flora and fauna.',
      features: ['Largest freshwater lake in Northeast India', 'Phumdis (floating islands)', 'Unique ecosystem supporting diverse flora and fauna']
  } ,
  
    // South India
    {
      price: 35000,
      duration: 4,
      id: '26',
      title: 'Horsley Hills',
      state: 'Andhra Pradesh',
      category: 'Hill Station',
      direction: 'South India',
      img: '/Photos/Horsley Hills, Andhra Pradesh.jpg',
      desc: 'Horsley Hills in Andhra Pradesh, India, is a scenic hill station known for its pleasant climate, lush greenery, and stunning panoramic views.',
      features: ['Pleasant climate', 'Lush greenery', 'Stunning panoramic views']
  },
  {
      price: 28000,
      duration: 6,
      id: '27',
      title: 'Poovar Island',
      state: 'Kerala',
      category: 'Beach',
      direction: 'South India',
      img: '/Photos/Poovar Island, Kerala.jpg',
      desc: "Poovar Island, Kerala, is a secluded gem with tranquil backwaters, golden beaches, and lush greenery, offering a serene escape into nature's embrace",
      features: ['Tranquil backwaters', 'Golden beaches', 'Lush greenery']
  },
  {
      price: 40000,
      duration: 5,
      id: '28',
      title: 'Bandipur National Park',
      state: 'Karnataka',
      category: 'Wildlife',
      direction: 'South India',
      img: '/Photos/Bandipur National Park, Karnataka.jpg',
      desc: 'Bandipur National Park in Karnataka, India, is a biodiverse sanctuary renowned for its tiger population, diverse flora, and fauna, attracting nature enthusiasts and wildlife lovers',
      features: ['Biodiverse sanctuary', 'Tiger population', 'Diverse flora and fauna']
  },
  {
      price: 22000,
      duration: 3,
      id: '29',
      title: 'Bijapur',
      state: 'Karnataka',
      category: 'Heritage',
      direction: 'South India',
      img: '/Photos/Bijapur, Karnataka.jpg',
      desc: 'Bijapur, Karnataka, known for its rich history and architecture, features iconic monuments like Gol Gumbaz, Ibrahim Rauza, and Jama Masjid.',
      features: ['Rich history and architecture', 'Iconic monuments']
  },
  {
      price: 30000,
      duration: 7,
      id: '30',
      title: 'Ooty',
      state: 'Tamil Nadu',
      category: 'Hill Station',
      direction: 'South India',
      img: '/Photos/Ooty, Tamilnadu.jpg',
      desc: 'Ooty, Tamil Nadu, a serene hill station, offers lush greenery, tea plantations, botanical gardens, and scenic lakes, making it a popular tourist destination.',
      features: ['Lush greenery', 'Tea plantations', 'Botanical gardens', 'Scenic lakes']
  },
  {
      price: 25000,
      duration: 4,
      id: '31',
      title: 'Hyderabad',
      state: 'Telangana',
      category: 'City',
      direction: 'South India',
      img: '/Photos/Hyderabad, Telangana.jpg',
      desc: 'Hyderabad, Telangana, blends old-world charm with modernity, boasting historic landmarks like Charminar and Golconda Fort alongside vibrant markets and tech hubs.',
      features: ['Historic landmarks', 'Vibrant markets', 'Tech hubs']
  } ,
  ];
  
  export default destinations;
  