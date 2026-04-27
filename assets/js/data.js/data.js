// ChatSphere — Member Data
var MEMBERS = {
  USA: {
    women: [
      { name: 'Emma Johnson',    age: 62, emoji: '👩',     color: '#0ea5e9', status: 'Online', bio: 'Retired teacher, loves gardening' },
      { name: 'Patricia Williams',age: 68, emoji: '👵',     color: '#6366f1', status: 'Online', bio: 'Grandma of 5, loves baking' },
      { name: 'Dorothy Davis',   age: 71, emoji: '👩‍🦳', color: '#14b8a6', status: 'Away',   bio: 'Book club member, avid reader' },
      { name: 'Linda Martinez',  age: 65, emoji: '👩',     color: '#f59e0b', status: 'Online', bio: 'Yoga instructor, nature lover' },
      { name: 'Barbara Wilson',  age: 69, emoji: '👵',     color: '#ec4899', status: 'Online', bio: 'Watercolour artist, dog lover' }
    ],
    men: [
      { name: 'Robert Brown',    age: 67, emoji: '👨',     color: '#0ea5e9', status: 'Online', bio: 'Retired engineer, woodworker' },
      { name: 'James Wilson',    age: 70, emoji: '👴',     color: '#6366f1', status: 'Online', bio: 'Golf enthusiast, dog owner' },
      { name: 'Michael Moore',   age: 63, emoji: '👨‍🦳', color: '#14b8a6', status: 'Away',   bio: 'Ex-soldier, history buff' },
      { name: 'William Taylor',  age: 66, emoji: '👨',     color: '#f59e0b', status: 'Online', bio: 'Fisherman, jazz fan' },
      { name: 'Charles Anderson',age: 72, emoji: '👴',     color: '#ec4899', status: 'Online', bio: 'Retired doctor, chess player' }
    ]
  },
  UK: {
    women: [
      { name: 'Margaret Smith',  age: 69, emoji: '👩',     color: '#0ea5e9', status: 'Online', bio: 'Tea enthusiast, loves crosswords' },
      { name: 'Elizabeth Jones', age: 64, emoji: '👵',     color: '#6366f1', status: 'Online', bio: 'Retired nurse, loves knitting' },
      { name: 'Susan Hughes',    age: 72, emoji: '👩‍🦳', color: '#14b8a6', status: 'Away',   bio: 'Avid gardener, volunteer' },
      { name: 'Barbara Evans',   age: 66, emoji: '👩',     color: '#f59e0b', status: 'Online', bio: 'Art lover, museum regular' },
      { name: 'Dorothy Clarke',  age: 70, emoji: '👵',     color: '#ec4899', status: 'Online', bio: 'Retired librarian, cat person' }
    ],
    men: [
      { name: 'David Williams',  age: 68, emoji: '👨',     color: '#0ea5e9', status: 'Online', bio: 'Cricket fan, pub quiz champion' },
      { name: 'Peter Clarke',    age: 71, emoji: '👴',     color: '#6366f1', status: 'Online', bio: 'Retired solicitor, history buff' },
      { name: 'George Walker',   age: 65, emoji: '👨‍🦳', color: '#14b8a6', status: 'Away',   bio: 'Train spotter, model builder' },
      { name: 'Thomas Harris',   age: 67, emoji: '👨',     color: '#f59e0b', status: 'Online', bio: 'Former teacher, avid cyclist' },
      { name: 'Edward Robinson', age: 73, emoji: '👴',     color: '#ec4899', status: 'Online', bio: 'WWII historian, gardener' }
    ]
  },
  France: {
    women: [
      { name: 'Marie Dubois',    age: 63, emoji: '👩',     color: '#0ea5e9', status: 'Online', bio: 'Chef, loves Paris markets' },
      { name: 'Isabelle Martin', age: 67, emoji: '👵',     color: '#6366f1', status: 'Online', bio: 'Art historian, wine expert' },
      { name: 'Françoise Bernard',age:70, emoji: '👩‍🦳', color: '#14b8a6', status: 'Away',   bio: 'Retired teacher, book lover' },
      { name: 'Monique Leroy',   age: 65, emoji: '👩',     color: '#f59e0b', status: 'Online', bio: 'Fashion enthusiast, gardener' },
      { name: 'Sylvie Moreau',   age: 68, emoji: '👵',     color: '#ec4899', status: 'Online', bio: 'Ballet dancer, cat lover' }
    ],
    men: [
      { name: 'Jean-Pierre Thomas',age:69, emoji: '👨',   color: '#0ea5e9', status: 'Online', bio: 'Retired chef, football fan' },
      { name: 'Michel Moreau',   age: 72, emoji: '👴',     color: '#6366f1', status: 'Online', bio: 'Philosophy lover, cyclist' },
      { name: 'Claude Richard',  age: 65, emoji: '👨‍🦳', color: '#14b8a6', status: 'Away',   bio: 'Wine connoisseur, hiker' },
      { name: 'François Petit',  age: 68, emoji: '👨',     color: '#f59e0b', status: 'Online', bio: 'Jazz musician, cat owner' },
      { name: 'Alain Dupont',    age: 71, emoji: '👴',     color: '#ec4899', status: 'Online', bio: 'Retired policeman, boules player' }
    ]
  },
  Spain: {
    women: [
      { name: 'María García',    age: 64, emoji: '👩',     color: '#0ea5e9', status: 'Online', bio: 'Flamenco dancer, cook' },
      { name: 'Carmen Rodríguez',age: 68, emoji: '👵',     color: '#6366f1', status: 'Online', bio: 'Retired doctor, traveller' },
      { name: 'Isabel López',    age: 71, emoji: '👩‍🦳', color: '#14b8a6', status: 'Away',   bio: 'Art lover, beach walker' },
      { name: 'Pilar Martínez',  age: 66, emoji: '👩',     color: '#f59e0b', status: 'Online', bio: 'Chef, fiesta organiser' },
      { name: 'Concepción Ruiz', age: 70, emoji: '👵',     color: '#ec4899', status: 'Online', bio: 'Retired teacher, poetry lover' }
    ],
    men: [
      { name: 'José Sánchez',    age: 67, emoji: '👨',     color: '#0ea5e9', status: 'Online', bio: 'Football fan, tapas chef' },
      { name: 'Antonio Fernández',age:70, emoji: '👴',     color: '#6366f1', status: 'Online', bio: 'Retired teacher, painter' },
      { name: 'Manuel González', age: 64, emoji: '👨‍🦳', color: '#14b8a6', status: 'Away',   bio: 'Olive farmer, guitar player' },
      { name: 'Francisco Torres',age: 69, emoji: '👨',     color: '#f59e0b', status: 'Online', bio: 'Bullfighting fan, historian' },
      { name: 'Alejandro Vega',  age: 72, emoji: '👴',     color: '#ec4899', status: 'Online', bio: 'Retired sailor, chess master' }
    ]
  },
  Germany: {
    women: [
      { name: 'Helga Müller',    age: 65, emoji: '👩',     color: '#0ea5e9', status: 'Online', bio: 'Retired engineer, hiker' },
      { name: 'Ingrid Schmidt',  age: 69, emoji: '👵',     color: '#6366f1', status: 'Online', bio: 'Classical music lover' },
      { name: 'Ursula Fischer',  age: 72, emoji: '👩‍🦳', color: '#14b8a6', status: 'Away',   bio: 'Master baker, gardener' },
      { name: 'Brigitte Weber',  age: 66, emoji: '👩',     color: '#f59e0b', status: 'Online', bio: 'Football fan, cyclist' },
      { name: 'Hildegard Meyer', age: 70, emoji: '👵',     color: '#ec4899', status: 'Online', bio: 'Retired pharmacist, knitter' }
    ],
    men: [
      { name: 'Hans Wagner',     age: 68, emoji: '👨',     color: '#0ea5e9', status: 'Online', bio: 'Retired mechanic, beer brewer' },
      { name: 'Karl Becker',     age: 71, emoji: '👴',     color: '#6366f1', status: 'Online', bio: 'Philosopher, chess player' },
      { name: 'Friedrich Hoffmann',age:65, emoji: '👨‍🦳',color: '#14b8a6', status: 'Away',   bio: 'BMW enthusiast, hiker' },
      { name: 'Otto Schulz',     age: 67, emoji: '👨',     color: '#f59e0b', status: 'Online', bio: 'Retired professor, traveller' },
      { name: 'Werner Braun',    age: 73, emoji: '👴',     color: '#ec4899', status: 'Online', bio: 'Astronomer, model train collector' }
    ]
  }
};

var REPLIES = [
  "That sounds wonderful! Tell me more 😊",
  "Oh really? I love hearing about that!",
  "Haha, yes indeed! I feel the same way.",
  "Interesting! What do you think about it?",
  "I'm so glad we're chatting on ChatSphere!",
  "That reminds me of something from my own life...",
  "You seem like such a lovely person!",
  "I agree completely! Great minds think alike 😄"
];
