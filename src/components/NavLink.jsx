import { Link as ScrollLink } from 'react-scroll';
import { useState } from 'react';

const NavLink = ({ href, title }) => {
    const [isActive, setIsActive] = useState(false);

    const handleSetActive = () => {
        setIsActive(true);
    };

    const handleSetInactive = () => {
        setIsActive(false);
    };

    return (
        <ScrollLink
            activeClass="active"
            to={href.substring(1)}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`block py-2 pl-3 pr-4 ${
                isActive ? 'text-transparent bg-clip-text bg-gradient-to-br from-[#D16BA5] via-[#86A8E7] to-[#5FFBF1]' : 'text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br from-[#D16BA5] via-[#86A8E7] to-[#5FFBF1]'
            }`}
            onSetActive={handleSetActive}
            onSetInactive={handleSetInactive}
        >
            {title}
        </ScrollLink>
    );
};

export default NavLink;
