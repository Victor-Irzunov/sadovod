import Image from "next/image";

const dataOtzyvy = [
	{
		 id: 1,
		 name: 'Сергей Сацук',
		 imgSrc: '/otzyvy/2.webp',
		 alt: 'Отзыв клиента взявшего у нас в аренду инструмент',
		 rating: 5,
		 text: 'Очень приятно удивлен качеством оборудования и сервисом вашей компании! Взял в прокат плиткорез для ремонта кухни, и результат превзошел мои ожидания. Благодаря вашей помощи, мой проект прошел гладко и без лишних хлопот. Очень рекомендую!'
	},
	{
		 id: 2,
		 name: 'Иван Сидоров',
		 imgSrc: '/otzyvy/1.webp',
		 alt: 'Отзыв клиента взявшего у нас в аренду инструмент',
		 rating: 5,
		 text: 'Отличное оборудование и прекрасный сервис! Взял пылесос для уборки строительной пыли, и он справился с задачей на отлично. Ваша компания - находка для всех, кто ценит качество и профессионализм. Спасибо за отличный опыт!'
	},
	{
		 id: 3,
		 name: 'Алексей Иванов',
		 imgSrc: '/otzyvy/3.webp',
		 alt: 'Отзыв клиента взявшего у нас в аренду инструмент',
		 rating: 5,
		 text: 'Ваша компания - настоящее спасение для всех, кто нуждается в надежном оборудовании! Сварочный аппарат, который я взял напрокат, позволил мне выполнить сварочные работы без проблем. Очень благодарен за ваше внимание к клиентам и качественный сервис.'
	},
	{
		 id: 4,
		 name: 'Евгений Козлов',
		 imgSrc: '/otzyvy/4.webp',
		 alt: 'Отзыв клиента взявшего у нас в аренду инструмент',
		 rating: 5,
		 text: 'Спасибо вашей компании за высококачественное оборудование и заботу о клиентах! Генератор, который я взял напрокат, прекрасно справился с задачей и обеспечил электропитанием мой строительный объект. Очень доволен результатом и вашим сервисом!'
	},
	{
		 id: 5,
		 name: 'Михаил Николаев',
		 imgSrc: '/otzyvy/5.webp',
		 alt: 'Отзыв клиента взявшего у нас в аренду инструмент',
		 rating: 5,
		 text: 'Бетоносмеситель, который я взял у вас в прокат, был именно тем, что мне нужно! Прост в использовании и надежен в работе. Ваша компания предоставляет отличные условия проката и высококачественное оборудование. Большое спасибо за помощь в реализации моего проекта!'
	}
];


const Otzyvy = () => {
	return (
		<section className='py-10 mx-7' id="otzyvy">
			<div className='container mx-auto'>
				<h6 className='text-center sd:text-4xl xz:text-3xl mb-8'>
					Отзывы наших клиентов
				</h6>

				<div className="carousel max-w-full h-auto">
					{dataOtzyvy.map((otzyv) => (
						<div key={otzyv.id} className="carousel-item flex sd:w-1/2 xz:w-full">
							<div className="avatar">
								<div className="w-16 h-16 rounded-full">
									<Image src={otzyv.imgSrc} alt={otzyv.alt} width={50} height={50} />
								</div>
							</div>
							<div className='w-2/3 ml-3 text-lg'>
								<p className='mb-2 font-semibold'>
									{otzyv.name}
								</p>
								<div className="rating mb-3">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" />
								</div>
								<p className='text-sm text-gray-600'>
									{otzyv.text}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Otzyvy;
