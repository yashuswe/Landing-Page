import Image from "next/image";
import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import styles from "./components/carousel.module.scss"
import { VerticalDiv } from "./components/VerticalDiv";
import Gallery from "./components/Gallery";
import { Containerc } from "./components/Container";

export default function Home() {
  return (

<div>
  <Hero/>
  {/* <VerticalDiv/>
  <Gallery/> */}
  <Containerc/>
</div>
  );
}
