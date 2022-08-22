export interface IProduct {
  title: string;
  id: string;
  amount: number;
  price: number;
  description: string;
}

export interface IProductCard {
  id: string;
  title: string;
  price: number;
  default_img: string;
  discount: number;
}
export interface DonateSubmitForm {
  firstName: string;
  lastName: string;
  user_email: string;
  home_address: string;
  birthDate: Date;
  nif: number;
  amount: number;
  anonymous: boolean;
  message?: string;
  certificate: boolean;
  terms: boolean;
  text: string;
}

export interface IDonation {
  id: string;
  text: string;
  anonymous: boolean;
  amount: number;
  createdAt: string;
  User: {
    firstName: string;
    lastName: string;
  };
}

export interface IProject {
  id: string;
  title: string;
  donated: number;
  amount: number;
  description: string;
  imageURL: string;
}
export interface IProjects {
  imageURL: string;
  id: string;
  title: string;
}
export interface IAppState {
  ongConfig: TOngConfig | Record<string, never> | undefined;
  ongId: string | undefined;
}

export interface IMember {
  id: string;
  name: string;
  position: string;
  linkedin: string;
  img_url: string;
}
export interface ErrorInputProps {
  msg?: string;
  mt?: number;
  align?: TAlignSelf;
}
export interface ITicket {
  amount: number;
  id: string;
  price: number;
  type: string;
}
export interface IEventDetails {
  EventTickets: ITicket[];
  price: number;
}

export interface IImage {
  id: string;
  img_url: string;
}

export interface ICourse {
  title: string;
  description: string;
  location: string;
  imageURL: string;
  start_time: string;
  end_time: string;
  id: string;
  course: boolean;
}
export interface IEvent {
  course: boolean;
  id: string;
  title: string;
  description: string;
  imageURL: string;
  start_time: string;
  location: string;
  end_time: string;
  stock: number;
}
