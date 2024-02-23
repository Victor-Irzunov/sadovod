import Image from "next/image"


const PrizyvDejstviyu = () => {
  return (
    <section className='mt-10'>

      <div className='bg-gradient-to-l from-orange-600 to-orange-400 py-10 relative'>
        <p className='text-center text-white uppercase text-4xl font-extrabold sd:w-[30%] xz:w-full mx-auto xz:px-5 sd:px-0 shadow-text'>
          При долгосрочной аренде скидка до 30%
        </p>

        <Image src='/percentage.webp'
          alt='Скидка до 30%' width={130} height={130}
          className="absolute top-1/2 left-16 -translate-y-1/2 sd:block xz:hidden"
        />
        <Image src='/percentage2.webp'
          alt='Скидка до 30%' width={130} height={130}
          className="absolute -top-16 right-16  sd:block xz:hidden"
        />
      </div>

    </section>
  )
}

export default PrizyvDejstviyu