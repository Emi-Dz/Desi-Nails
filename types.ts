
export interface Client {
  id: string;
  name: string;
  notes: string;
  serviceHistory: Appointment[];
}

export interface NailDesign {
  id: string;
  name: string;
  description: string;
  technique: string;
  finish: string;
  length: string;
  shape: string;
  imageUrl: string | null;
}

export interface Appointment {
  id: string;
  clientId: string;
  date: string;
  service: string;
  designId?: string;
  notes: string;
  cost: number;
  imageUrl: string | null;
}

export interface InspirationHistoryItem {
  id: string;
  keywords: string;
  idea: string;
  imageUrl: string | null;
}
