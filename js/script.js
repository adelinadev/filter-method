let clients = [
    {"iin": "jgy65gtr",  "user": "Popov", "debt": 5},
    {"iin": "lloi87hh",  "user": "TOV Transkor", "debt": 700},
    {"iin": "58loohgy",  "user": "Terpolovskiy", "debt": 0},
    {"iin": "kiohh85r",  "user": "OOO Trend-shop", "debt": 15},
    {"iin": "hghhgjjs",  "user": "KOko", "debt": 58},
    {"iin": "67hgtyv9",  "user": "Energozbut", "debt": 16}
  ]
  
  
  let debts = clients.filter(item => (item.debt >= 10)).sort((a, b)=> (b.debt-a.debt))
  
  console.log(debts);
  
  