"use client"
import { Link as LinkScroll } from 'react-scroll';

export default function Footer() {
	return (
		<footer className="footer footer-center sd:p-10 xz:p-5 bg-secondary text-base-content rounded" id='contacts'>
			<nav className="grid grid-flow-col gap-4">

				<LinkScroll
					to="main"
					smooth={true}
					offset={-100}
					duration={800}
					className="cursor-pointer link link-hover"
					rel="nofollow"
					href='#/'
				>
					Главная
				</LinkScroll>

				<LinkScroll
					to="catalog"
					smooth={true}
					offset={-100}
					duration={800}
					className="cursor-pointer link link-hover"
					rel="nofollow"
					href='#/'
				>
					Каталог
				</LinkScroll>

				<LinkScroll
					to="dostavka"
					smooth={true}
					offset={-100}
					duration={800}
					className="cursor-pointer link link-hover"
					rel="nofollow"
					href='#/'
				>
					Доставка
				</LinkScroll>

			</nav>
			<nav>
				<h6 className='mb-1 w-[60vw] font-semibold uppercase text-xl'>
					Контакты
				</h6>


				<div className='mt-2'>
					<a href='tel:80339026046' className='xz:text-xl sd:text-2xl font-bold'>
						+375 33 902-60-46
					</a>
				</div>
				<div className='mt-2'>
					<a href='tel:80336177776' className='xz:text-xl sd:text-2xl font-bold'>
						+375 33 617-77-76
					</a>
				</div>
			</nav>

			<div className=''>
				<p className='font-semibold'>
					Режим работы:
				</p>
				<p className=''>
					9:00-21:00
				</p>
				<p className=''>
					{/* Выходной: <span className='text-red-500'>ВС</span> */}
					Без выходных
				</p>
			</div>

			<aside className=''>

				<p className=''>
					Крестьянское (фермерское) фозяйство "Адамян Г.С."
				</p>
				<p className=''>
					РБ, Гродненский район, д. Чащевляны
				</p>
				<p className=''>
					УНП 590155155
				</p>
				<p className=''>
					в ЗАО "БТА Банк" р/с BY66AEBK 3012 0045 9122 0000 0000
				</p>
			</aside>

			<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A43cde0f2b648911c1ac2e16340c5524e2fcbb551a9f54c23e987fb69172419e4&amp;source=constructor" width="100%" height="400" frameBorder="0"></iframe>

			<aside className="border-t pt-2">
				<p className='text-gray-800 xs:text-xs xz:text-[10px] font-light' >
					Copyright © 2024 | Разработка и Продвижение
					<a href='https://vi-tech.by' target='_blank' rel="noreferrer" className='text-sky-500 underline'> VI:TECH</a>.
					{' '}Информация на сайте не является публичной офертой и предоставляется исключительно в информационных целях.
				</p>
			</aside>
		</footer >
	)
}