import { data } from "@/constans/dataCatalog";
import Image from "next/image";

const Catalog = ({ handleOrderClick }) => {
	return (
		<section className='bg-slate-200 sd:py-16 xz:py-8' id="catalog">
			<div className='container mx-auto'>
				<h2 className='sd:text-6xl xz:text-4xl font-semibold text-center'>
					Ассортимент
				</h2>
				<h3 className='uppercase text-center mt-3'>
					каталог саженцев яблонь
				</h3>
				<div className='sd:mt-14 xz:mt-6 grid sd:grid-cols-3 gap-8 xz:grid-cols-1'>
					{data.map(item => (
						<div key={item.id} className="flex flex-col bg-white rounded-lg shadow-xl sd:p-6 xz:p-3 relative">
							<div className="relative h-52">
								<Image src={item.img} alt={item.alt} layout="fill" objectFit="cover" className="rounded-t-lg" />
							</div>
							<h4 className="text-lg font-semibold mt-4">{item.title}</h4>
							<div className="pb-2 pt-1 font-light text-sm text-gray-400">Артикль: 100{item.id}</div>
							<div className="flex items-center gap-3">
								<strong className="text-2xl font-medium text-gray-800">{item.price} BYN</strong>
								<span className="font-medium text-gray-500 line-through">{(item.price / 100 * item.discount) + item.price} BYN</span>
								<span className="text-green-500 text-sm font-semibold">-{item.discount}%</span>
							</div>
							<div className="flex items-center gap-2 mt-2">
								<div className="rating rating-sm disabled">
									{[1, 2, 3, 4, 5].map((rating) => (
										<input
											key={rating}
											type="radio"
											className={`mask mask-star-2 ${Math.floor(rating) >= rating ? "bg-orange-500" : "bg-gray-300"
												}`}
										/>
									))}
								</div>
								<span className="text-green-500 ml-2 sd:text-base xz:text-xs">Быстрая доставка</span>
							</div>
							<div className="badge badge-lg bg-emerald-600 text-white gap-2 pl-1.5 mt-3">
								<Image src='/svg/check.svg' alt='Рекомендуем' width={25} height={25} /> Рекомендуем
							</div>
							<p className="text-xs text-gray-600 mt-3 flex-grow mb-2">{item.info}</p>
							<div className='mt-auto flex justify-end'>
								<button
									className="btn text-white text-xl btn-secondary"
									onClick={() => handleOrderClick(item.title)}
								>
									Купить
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Catalog;
