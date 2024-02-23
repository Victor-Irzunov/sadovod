"use client"
import Catalog from "@/components/Catalog/Catalog";
import Dostavka from "@/components/dostavka/Dostavka";
import Modal from "@/components/modal/Modal";
import SliderComp from "@/components/sliderComp/SliderComp";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    document.getElementById("my_modal_3").showModal();
  };
  const closeModal = () => {
    document.getElementById("my_modal_3").close();
  };
  return (
    <main className="">
      <div className="hero min-h-screen"
        style={{ backgroundImage: 'url("/fon/fon.webp")' }}
        id="main"
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center">
          <div className="max-w-lg text-white">
            <h1 className="mb-7 sd:text-8xl xz:text-6xl font-bold uppercase">
              Саженцы <span className="">яблонь</span>
            </h1>
            <p className="mb-8 sd:text-2xl xz:text-xl">
              Доставка по всей Беларуси
            </p>
            <button
              className="btn btn-primary rounded-none btn-lg text-white"
              onClick={() => handleOrderClick('Получить консультацию')}
            >
              Получить консультацию
            </button>
          </div>
        </div>
      </div>
      <div className='container mx-auto'>
        <section className='bg-secondary rounded-tr-2xl rounded-sm flex sd:justify-between xz:justify-center sd:flex-row xz:flex-col sd:p-10 xz:p-5 mt-16'>
          <div className='sd:mb-0 xz:mb-7 mx-auto w-auto sd:hidden xz:block'>
            <Image src='/img.webp' alt='Продажа техники' width={320} height={320} className="rounded-tr-xl rounded-bl-xl" />
          </div>
          <div className=''>
            <p className="text-white sd:text-2xl xz:text-xl font-semibold">
              Вы сделали правильный выбор в пользу компании, которая сочетает качество саженцев, широкий ассортимент и удобную доставку. Мы гордимся предоставляемыми нами саженцами яблонь и стремимся обеспечить наших клиентов лучшими сортами, которые обеспечат обильный урожай и радость от выращивания собственных яблок.
            </p>
          </div>
          <div className='w-auto xz:hidden sd:block rounded-tr-xl rounded-bl-xl ml-4'>
            <Image src='/img.webp'
              alt='Продажа техники' width={1409} height={800}
              className="rounded-tr-xl rounded-bl-xl"
            />
          </div>
        </section>
        <SliderComp />
      </div >
      <div className='bg-gradient-to-l from-primary to-secondary py-10 relative'>
        <p className='text-center text-white uppercase text-4xl font-extrabold sd:w-[30%] xz:w-full mx-auto xz:px-5 sd:px-0 shadow-text'>
          Получите бесплатную доставку при заказе от 1000 рублей
        </p>
      </div>

      <Catalog handleOrderClick={handleOrderClick} />

      <Dostavka />
      <Modal
        selectedProduct={selectedProduct}
        closeModal={closeModal}
        isFormSubmitted={isFormSubmitted}
        setIsFormSubmitted={setIsFormSubmitted}
      />
    </main >
  );
}
