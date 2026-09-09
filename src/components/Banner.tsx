import bgShadow from '../assets/bg-shadow.png';
import BannerImg from '../assets/banner-main.png'

const Banner = () => {
    return (
        <div
            className="container max-w-7xl mx-auto bg-cover bg-center rounded-2xl mt-14 h-[500px]"
            style={{ backgroundImage: `url(${bgShadow})` }}
        >
            <div className='flex flex-col justify-center items-center space-y-4 p-6'>
                <img className='' src={BannerImg} alt="" />
                <h3 className='text-3xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h3>
                <p className='font-semibold text-slate-400'>Beyond Boundaries Beyond Limits</p>
                <button className="btn btn-active btn-warning text-xl font-semibold border-2 border-black">Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;
