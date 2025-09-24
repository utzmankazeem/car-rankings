export interface SearchResult {
  id: string;
  type: 'car' | 'ranking' | 'guide' | 'deal';
  title: string;
  subtitle?: string;
  url: string;
  image?: string;
  score?: number;
}

export const mockSearchData: SearchResult[] = [
  {
    id: '1',
    type: 'car',
    title: '2025 Honda Pilot',
    subtitle: 'Midsize SUV',
    url: '/cars/honda/pilot',
    score: 8.5
  },
  {
    id: '2',
    type: 'car',
    title: '2025 Toyota Highlander',
    subtitle: 'Midsize SUV',
    url: '/cars/toyota/highlander',
    score: 8.2
  },
  {
    id: '3',
    type: 'car',
    title: '2025 Mazda CX-9',
    subtitle: 'Midsize SUV',
    url: '/cars/mazda/cx-9',
    score: 8.0
  },
  {
    id: '4',
    type: 'ranking',
    title: 'Best Family SUVs',
    subtitle: 'Top-rated family vehicles',
    url: '/rankings/best-family-suvs'
  },
  {
    id: '5',
    type: 'ranking',
    title: 'Most Reliable Cars',
    subtitle: 'Long-term dependability',
    url: '/rankings/most-reliable-cars'
  },
  {
    id: '6',
    type: 'guide',
    title: 'SUV Buying Guide',
    subtitle: 'Complete purchase guide',
    url: '/guides/suv-buying-guide'
  }
];

export const searchCars = (query: string): SearchResult[] => {
  if (!query.trim()) return [];
  
  const lowerQuery = query.toLowerCase();
  return mockSearchData.filter(item => 
    item.title.toLowerCase().includes(lowerQuery) ||
    item.subtitle?.toLowerCase().includes(lowerQuery)
  ).slice(0, 8);
};

export const getPopularSearches = (): string[] => [
  'Honda Pilot',
  'Toyota Highlander',
  'Best Family SUVs',
  'Electric vehicles',
  'Hybrid cars',
  'Pickup trucks'
];