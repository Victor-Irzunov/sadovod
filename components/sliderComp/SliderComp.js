"use client"
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 2
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 2
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1
	}
};

const SliderComp = () => {
	return (
		<section className='py-10 mx-7'>
			<div className='container mx-auto'>

				<Carousel
					responsive={responsive}
					infinite={true}
					autoPlay={false}
					className="w-full"
				>

					<div className="carousel-item sd:p-5 xz:p-0 sd:mx-10 xz:mx-0">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/1.webp' alt='Отзыв клиента купившего у нас технику' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Деркач Настя
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Я в восторге от саженца яблони сорта Алеся, который я приобрел у вас! Растение пришло здоровым и крепким, а плоды были просто великолепными. Спасибо за качественную продукцию!
								</p>
							</div>
						</div>
					</div>

					<div className="carousel-item p-5 sd:mx-10 xz:mx-0">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/2.webp' alt='Отзыв клиента купившего у нас технику' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Крюков Матвей
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Саженец яблони сорта 'Глостер' превзошел все мои ожидания! Плоды имеют отличный вкус, а дерево обильно плодоносит. Очень доволен своей покупкой!
								</p>
							</div>
						</div>
					</div>

					<div className="carousel-item p-5 sd:mx-10 xz:mx-0">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/3.webp' alt='Отзыв клиента купившего у нас технику' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Люторевич Анатолий
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Благодарю вас за саженец яблони сорта 'Зорка'! Он прижился отлично и уже на следующий год дал первые плоды. Вкус яблок просто потрясающий! Спасибо за такое качество!
								</p>
							</div>
						</div>
					</div>

					<div className="carousel-item p-5 sd:mx-10 xz:mx-0">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/4.webp' alt='Отзыв клиента купившего у нас технику' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Ломачов Виталий
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Моя семья очень довольна саженцем яблони сорта 'Сябрына', который мы у вас приобрели. Плоды крупные и сочные, а само дерево выглядит здоровым и сильным. Спасибо за вашу продукцию!
								</p>
							</div>
						</div>
					</div>

					<div className="carousel-item p-5 sd:mx-10 xz:mx-0">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/5.webp' alt='Отзыв клиента купившего у нас технику' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Сацук Валентина
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Хочу выразить благодарность за качественные саженцы яблонь, которые я у вас приобрела. Деревья отлично прижились и уже через несколько лет начали радовать нас вкусными яблоками. Очень доволена результатом, спасибо вашей компании!
								</p>
							</div>
						</div>
					</div>
				</Carousel>
			</div>
		</section>
	)
}

export default SliderComp