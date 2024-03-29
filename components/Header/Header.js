"use client"
import Image from 'next/image';
import Link from 'next/link';
import RunningText from '../RunningText/RunningText';
import { Link as LinkScroll } from 'react-scroll'


export default function Header() {

	return (
		<header className='bg-base-100 
		
		z-50'>
			<RunningText />
			<div className='container mx-auto'>
				<div className="navbar px-0">
					<div className="navbar-start">
						<div className="dropdown">
							<label tabIndex={0} className="btn btn-circle lg:hidden mr-1">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
							</label>
							<ul
								tabIndex={0}
								className="dropdown-content overflow-y-scroll menu-lg mt-1 w-72 z-50 text-xl menu py-5 px-2 bg-base-200 shadow rounded-box"
							>
								<li>
									<LinkScroll to='main'
										smooth={true}
										offset={-100}
										duration={800}
										className="cursor-pointer"
										rel="nofollow"
										href='#/'
									>
										Главная
									</LinkScroll>
								</li>
								<li>
									<LinkScroll to='catalog'
										smooth={true}
										offset={-100}
										duration={800}
										className="cursor-pointer"
										rel="nofollow"
										href='#/'
									>
										Каталог
									</LinkScroll>
								</li>
								<li>
									<LinkScroll to='dostavka'
										smooth={true}
										offset={-100}
										duration={800}
										className="cursor-pointer"
										rel="nofollow"
										href='#/'
									>
										Доставка
									</LinkScroll>
								</li>
								<li>
									<LinkScroll to='contacts'
										smooth={true}
										offset={-100}
										duration={800}
										className="cursor-pointer"
										rel="nofollow"
										href='#/'
									>
										Контакты
									</LinkScroll>
								</li>
							</ul>
						</div>
						<Link
							className="cursor-pointer"
							href={`${process.env.NEXT_PUBLIC_BASE_URL}/`}
						>
							<Image src='/logo/logo.webp' alt='логотип компании по продаже саженцов яблонь' width={130} height={100} />
						</Link>
					</div>

					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal p-0 font-light text-lg">
							<li>
								<LinkScroll to='main'
									smooth={true}
									offset={-100}
									duration={800}
									className="cursor-pointer"
									rel="nofollow"
									href='#/'
								>
									Главная
								</LinkScroll>
							</li>
							<li>
								<LinkScroll to='product'
									smooth={true}
									offset={-100}
									duration={800}
									className="cursor-pointer"
									rel="nofollow"
									href='#/'
								>
									Каталог
								</LinkScroll>
							</li>

							<li>
								<LinkScroll to='dostavka'
									smooth={true}
									offset={-100}
									duration={800}
									className="cursor-pointer"
									rel="nofollow"
									href='#/'
								>
									Доставка
								</LinkScroll>
							</li>
							<li>
								<LinkScroll to='contacts'
									smooth={true}
									offset={-100}
									duration={800}
									className="cursor-pointer"
									rel="nofollow"
									href='#/'
								>
									Контакты
								</LinkScroll>
							</li>
						</ul>
					</div>
					<div className="navbar-end">
						<div className='text-xs mr-10 xz:hidden sd:block'>
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

						<div className='flex flex-col'>
							<a href='tel:80339026046'
								className='link link-hover flex'
							// onClick={() => gtag_report_conversion('/')}
							>
								+375 33 902-60-46
								<Image src='/svg/mts.svg' alt='Телефон оператора МТС' width={40} height={40} className='ml-1.5 sd:block xz:hidden' />
							</a>
							<a href='tel:80336177776'
								className='link link-hover flex pl-1'
							// onClick={() => gtag_report_conversion('/')}
							>
								+375 33 617-77-76
								<Image src='/svg/mts.svg' alt='Телефон оператора МТС' width={40} height={40} className='ml-2 sd:block xz:hidden' />
							</a>
						</div>

					</div>
				</div>
			</div>
		</header >
	)
}