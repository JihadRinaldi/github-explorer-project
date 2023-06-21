export interface IRepository {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
}

export interface IUser {
  total_count: number;
  incomplete_results: boolean;
  items: IUserItem[];
}

export interface IUserItem {
  avatar_url: string;
  login: string;
  type: string;
  url: string;
  repository?: IRepository[];
}

