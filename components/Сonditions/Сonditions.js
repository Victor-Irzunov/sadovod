import { conditionsData } from "@/constans/dataConditions";
import Image from "next/image";

const Conditions = () => {
	return (
		<section className='py-20' id="usloviya">
			<div className='container mx-auto text-center'>
				<h5 className='sd:text-4xl xz:text-3xl font-semibold'>
					Условия проката
				</h5>
				<div className='mt-10 grid gap-6 xz:grid-cols-1 sd:grid-cols-3'>
					{conditionsData.map(condition => (
						<div key={condition.id} className='bg-gray-100 p-4 rounded-lg'>
							<Image src={condition.img} width={90} height={90} alt={condition.alt} className='mb-4 mx-auto' />
							<h6 className='text-lg font-semibold mb-2'>{condition.title}</h6>
							<p className='text-sm text-gray-600'>{condition.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Conditions;
