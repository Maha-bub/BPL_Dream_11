import { HiCurrencyDollar } from 'react-icons/hi';
import Logo from '../assets/logo.png'
const Header = () => {
    return (
        <>
            <nav className='bg-fuchsia-300'>
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                    <img src={Logo} alt="Logo" />
                    <ul className="flex gap-4 text-black items-center">
                        <li><a href="/">Home</a></li>
                        <li><a href="/players">Players</a></li>
                        <li><a href="/fixtures">Fixtures</a></li>
                        <li><a href="/schedule">Schedule</a></li>
                        <div className='flex text-xl ml-4 items-center-safe justify-center'>
                            <HiCurrencyDollar className="tex-slate-300" />
                            <strong className='bold text-black ml-2'>500</strong>
                        </div>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Header;