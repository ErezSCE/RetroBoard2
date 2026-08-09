export interface Vote {
  participantId: string;
  voteCount: number;
}

export interface Card {
  id: string;
  content: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
  votes: Vote[];
}

export interface Column {
  id: string;
  title: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
  cards: Card[];
}

export interface Cluster {
  id: string;
  title: string;
  cardIds: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ActionItem {
  id: string;
  title: string;
  description?: string;
  relatedCardId?: string;
  status: 'open' | 'in_progress' | 'done';
  createdAt: Date;
  updatedAt: Date;
}

export interface Session {
  id: string;
  sessionCode: string;
  title: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  columns: Column[];
  clusters: Cluster[];
  actionItems: ActionItem[];
}
