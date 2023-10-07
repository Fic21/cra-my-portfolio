import React from "react";
import {Link} from "react-router-dom";
import HomeImg from '../img/Header/HOME.png';
import AboutImg from '../img/Header/USER.png';
import SkillImg from '../img/Header/SKILLS.png';
import WorkImg from '../img/Header/WORK.png';
import ContactImg from '../img/Header/EMAIL.png';

const Header = () => {

    return (
        <header className="flex justify-center">
            <div className="bg-[#ffffff] shadow-lg rounded-lg  fixed bottom-5 h-[50px] w-max px-[20px]">
            <div className="flex flex-row gap-x-4 h-full items-center">  
                <Link to='/'>
                    <img className="hp:w-[30px] laptop:w-[40px] rounded-lg hover:translate-y-[-2px]" src={HomeImg} alt="/blank"/>
                </Link>
                <Link to='/about'>
                    <img className="hp:w-[30px] laptop:w-[40px] rounded-lg hover:translate-y-[-2px]" src={AboutImg} alt="/blank"/>
                </Link>
                <Link to='/skills'>
                    <img className="hp:w-[30px] laptop:w-[40px] rounded-lg hover:translate-y-[-2px]" src={SkillImg} alt="/blank"/>
                </Link>
                <Link to='/work'>
                    <img className="hp:w-[30px] laptop:w-[40px] rounded-lg hover:translate-y-[-2px]" src={WorkImg} alt="/blank"/>
                </Link>
                <Link to='/contact'>
                    <img className="hp:w-[30px] laptop:w-[40px] rounded-lg hover:translate-y-[-2px]" src={ContactImg} alt="/blank"/>
                </Link>
            </div>
        </div>
        </header>
        
    );
};

export default Header;