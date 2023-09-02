import { FaArrowRight } from "react-icons/fa";
import nurtureSoap from '../../assets/images/nurture-bar-soap.jpg'
import polishSoap from '../../assets/images/polish-bar-soap.jpg'
import refreshSoap from '../../assets/images/refresh-bar-soap.jpg'


const ExpressionSection = () => {
    return (
        <div className="w-11/12 mx-auto mt-20 mb-20">
            <div className="w-1/3">
                <p>For the body</p>
                <h2 className="text-2xl font-semibold mt-3">An expression of care</h2>
                <p className="mt-3">Aesop formulations offer the body deserving care, to cleanse, replenish, and nourish skin. Each product is a sensory pleasure to use with its own delightful aroma.</p>
                <button className="text-lg flex items-center gap-1 mt-3">See all Body Care <FaArrowRight className="text-base"></FaArrowRight> </button>
            </div>
            <div className="flex w-2/3 ms-[33.33%]">
                <div className="flex flex-col items-center">
                    <img src={nurtureSoap} alt="" />
                    <p className="font-bold">Nurture Bar Soap</p>
                    <p>Offers a mild yet effective cleanse</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={polishSoap} alt="" />
                    <p className="font-bold">Polish Bar Soap</p>
                    <p>Thoroughly cleanses and exfoliates skin</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={refreshSoap} alt="" />
                    <p className="font-bold">Refresh Bar Soap</p>
                    <p>Offers a thorough and enlivening cleanse</p>
                </div>
            </div>
        </div>
    );
};

export default ExpressionSection;