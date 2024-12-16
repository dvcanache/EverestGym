declare module "react-slick" {
  import { Component } from "react";

  export interface SliderSettings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    arrows?: boolean;
    [key: string]: any;
  }

  export default class Slider extends Component<SliderSettings> {}
}
