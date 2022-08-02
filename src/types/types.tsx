export type TModal = boolean | undefined
export type TImages = {
    id: string;
    img_url: string;
  }[];
export type TProducts = {
  id: string;
  title: string;
  price: number;
  default_img: string;
  discount: number;
}[]
export type TEvents = {
    course: boolean;
    id: string;
    title: string;
    description: string;
    imageURL: string;
    start_time: string;
    end_time: string;
    location: string;
    stock: number;
  }[];
