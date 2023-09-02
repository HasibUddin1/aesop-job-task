import { FaArrowRight } from 'react-icons/fa';
import athenaeumImage from '../../assets/images/athenaeum-image.jpg'

const AthenaeumSection = () => {
    return (
        <div className='flex mb-20'>
            <div className='w-1/2'>
                <div className='w-5/6 mx-auto'>
                    <p>The Athenaeum</p>
                    <h2 className='text-2xl font-semibold mt-5'>The warm-up</h2>
                    <p className='mt-5'>In The Athenaeum, our digital reading room: a guide to ensuring a healthy complexion through the warmer months.</p>
                    <button className='flex items-center justify-between mt-5 border border-slate-800 hover:bg-slate-800 ease-in-out duration-200 hover:text-white w-1/3 px-6 py-4'>Read more <FaArrowRight className='text-sm'></FaArrowRight></button>
                </div>
            </div>
            <div className='w-1/2'>
                <img src={athenaeumImage} alt="" />
            </div>
        </div>
    );
};

export default AthenaeumSection;