import { FaArrowRight } from 'react-icons/fa';
import bannerImage from '../../assets/images/banner-image.jpg'

const Banner = () => {
    return (
        <div className='h-[700px] flex items-center bg-cover px-10' style={{ backgroundImage: `url(${bannerImage})` }}>
            <div className='text-white flex gap-32'>
                <div>
                    <button className='text-3xl font-semibold'>Aesop</button>
                </div>
                <div className='w-6/12'>
                    <p className='font-semibold'>Bar Soaps</p>
                    <h2 className='text-3xl mt-3'>A body care classic, reimagined</h2>
                    <p className='mt-3'>Breathing new life into the humble bar soap are Nurture, Polish and Refresh—three additions to the range, each imparting a unique constellation of benefits.</p>
                    <div className='mt-5'>
                        <button className='px-5 py-4 border-2 border-white flex items-center gap-20 hover:bg-white ease-in-out duration-200 hover:text-black'>Discover Bar Soaps <FaArrowRight></FaArrowRight></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;