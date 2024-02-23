

const Dostavka = () => {
	return (
		<section className="mb-16 py-8" id="dostavka">
			<div className='container mx-auto'>
				<div className='border-b-4 border-emerald-600 pb-4'>
					<h4 className='text-4xl text-emerald-700 '>
						Доставка
					</h4>
				</div>

				<div className='mt-10'>
					<h5 className='text-slate-700 font-semibold text-2xl'>
						Осуществлям доставку по все территори Беларуси.
					</h5>

					<h6 className='mt-3 text-lg'>
						Условия доставки:
					</h6>
					<ul className='mt-4 sd:pl-5 xz:pl-1'>
						<li className='mb-2'>
							• Стоимость доставки расчитывается индивидуально, примерно 30-50 руб.
						</li>
						<li className='mb-2'>
							• При заказе на сумму от 1000 руб. - доставка БЕСПЛАТНО
						</li>
					</ul>

					<div className='mt-7'>
						<p className='font-bold'>
							Производство:
						</p>
						<p className=''>
							Беларусь
						</p>
					</div>

				</div>
			</div>
		</section>
	)
}

export default Dostavka