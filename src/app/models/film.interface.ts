export interface IFilm {
  genre_ids: number[];
  id: number;
  overview: string;
  poster_path: string;
  title: string;
}

export interface IFilmPagination {
  page: number;
  pageSize: number;
  totalSize: number;
}

export interface IFilmsWithPagination {
  list: IFilm[];
  pagination?: IFilmPagination;
}

export interface IFilmParams {
  page: number;
  query: string;
}

export interface IFilmHttp {
  results: IFilm[];
  page: number;
  total_pages: number;
  total_results: number;
}
