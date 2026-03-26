'use client'
import {
  About,
  Banner,
  Clients,
  Ourworks,
  Services,
  Faq,
  GetinTouch,
  Testimonials,
} from "./components";

export default function Home() {
  return (
    <>
      <Banner />
      <Clients />
      <About />
      <Ourworks />
      <Services />
      <Faq />
      <Testimonials />
      <GetinTouch />
    </>
  );
}
