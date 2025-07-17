import { CardLayout } from './card-layout';

const ServiceSection = () => {
	return (
		<section className="flex gap-2 w-full max-w-[1200px] mx-auto justify-center p-3 md:p-0" id='service-section'>
			<div className="container">
				<h2 className="text-3xl font-bold mb-4">Web Development Services</h2>
				<p className="mb-6">
					We provide comprehensive web development solutions tailored to your
					business needs.
				</p>

				<CardLayout />
			</div>
		</section>
	);
};

export default ServiceSection;
