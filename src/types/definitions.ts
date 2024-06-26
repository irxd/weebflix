interface Image {
  jpg: {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
  };
  webp: {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
  };
}

interface Trailer {
  youtube_id: string;
  url: string;
  embed_url: string;
}

export interface AnimeList {
  mal_id: number;
  title: string;
  images: Image;
  score: number;
}

export interface AnimeDetail {
  mal_id: number;
  title: string;
  images: Image;
  score: number;
  trailer?: Trailer;
  year: number;
  synopsis: string;
}

export interface PaginationProps {
  totalPage: number;
  currentPage: number;
}

export interface RecommendationList {
  entry: {
    mal_id: number;
    title: string;
    images: Image;
  };
}

export interface CardsProps {
  mal_id: number;
  image_url: string;
  title: string;
  score?: number;
}

export interface OverviewProps {
  data: {
    data: AnimeDetail;
    error: string;
  };
  error: any;
  isLoading: boolean;
}

export interface RecommendationProps {
  data: {
    data: RecommendationList[];
    error: string;
  };
  error: any;
  isLoading: boolean;
}
