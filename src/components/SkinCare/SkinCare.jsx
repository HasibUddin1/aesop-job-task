import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Navigation } from 'swiper/modules';

import lucentFacialConcentrate from '../../assets/images/lucent-facial-concentrate.png'
import purifyingFacialCreamCleanser from '../../assets/images/purifying-facial-cream-cleanser.jpg'
import camelliaNutFacialHydratingCream from '../../assets/images/camellia-nut-facial-hydrating-cream.jpg'
import parsleySeedAntiOxidentEyeCream from '../../assets/images/parsley-seed-anti-oxidant-eye-cream.jpg'
import bTrippleCFacialBalancingGel from '../../assets/images/b-triple-c-facial-balancing-gel.jpg'
import mandaringFacialHydratingCream from '../../assets/images/mandarin-facial-hydrating-cream.jpg'
import parsleySeedAntiOxidantIntenseSerum from '../../assets/images/parsley-seed-anti-oxidant-intense-serum.jpg'
import parsleySeedFacialCleanser from '../../assets/images/parsley-seed-facial-cleanser.jpg'

// swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import { FaArrowRight } from 'react-icons/fa';



const SkinCare = () => {
    return (
        <div className='w-11/12 mx-auto mb-20'>
            <Swiper
                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='flex'>
                    <div className='w-1/4'>
                        <p>For the skin</p>
                        <h2 className='text-2xl font-semibold mt-5'>Attention for all types</h2>
                        <p className='mt-5'>The well-being of your skin is the product of hydration, nourishment, and protection through discerning rituals. Explore requisite skin care for all skin types.</p>
                        <button className='flex items-center mt-5'>See all Skin Care <FaArrowRight></FaArrowRight></button>
                    </div>
                    <div className='flex flex-col items-center w-1/4'>
                        <img className='h-[400px]' src={lucentFacialConcentrate} alt="" />
                        <p className='font-semibold'>Lucent Facial Concentrate</p>
                        <p>A Vitamin C-rich layering serum</p>
                    </div>
                    <div className='flex flex-col items-center w-1/4'>
                        <img className='h-[400px]' src={purifyingFacialCreamCleanser} alt="" />
                        <p className='font-semibold'>Purifying Facial Cream Cleanser</p>
                        <p>A daily cream cleanser for dry skin</p>
                    </div>
                    <div className='flex flex-col items-center w-1/4'>
                        <img className='h-[400px]' src={camelliaNutFacialHydratingCream} alt="" />
                        <p className='font-semibold'>Camelia Nut Facial Hydrating Cream</p>
                        <p>For normal, dry or sensitive skin</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex'>
                    <div className='flex flex-col items-center w-1/4'>
                        <img className='h-[400px]' src={parsleySeedAntiOxidentEyeCream} alt="" />
                        <p className='font-semibold'>Parsley Seed Anti Oxidant Eye Cream</p>
                        <p>Nourishes delicate skin around eyes</p>
                    </div>
                    <div className='flex flex-col items-center w-1/4'>
                        <img className='h-[400px]' src={bTrippleCFacialBalancingGel} alt="" />
                        <p className='font-semibold'>B Triple C Facial Balancing Gel</p>
                        <p>Anti-oxidant gel infused with Vitamin B and C</p>
                    </div>
                    <div className='flex flex-col items-center w-1/4'>
                        <img className='h-[400px]' src={mandaringFacialHydratingCream} alt="" />
                        <p className='font-semibold'>Mandarin Facial Hydrating Cream</p>
                        <p>Rapidly absorbed, lightly hydrating</p>
                    </div>
                    <div className='flex flex-col items-center w-1/4'>
                        <img className='h-[400px]' src={parsleySeedAntiOxidantIntenseSerum} alt="" />
                        <p className='font-semibold'>Parsley Seed Anti-oxidant Intense Serum</p>
                        <p>A hydrating serum to bolster skin</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center w-1/4'>
                        <img className='h-[400px]' src={parsleySeedFacialCleanser} alt="" />
                        <p className='font-semibold'>Parsley Seed Facial Cleanser</p>
                        <p>For those in polluted urban environments</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SkinCare;