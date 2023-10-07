import React from "react";
import GithubImg from '../img/Sosial/github.png'
import DiscordImg from '../img/Sosial/discord.png'
import FacebookImg from '../img/Sosial/facebook.png'
import InstagramImg from '../img/Sosial/instagram.png'


const Sosials = () => {
  return (
    <div className=" bg-[#f5f5f5] fixed bottom-40 left-0 h-max w-max px-2 py-2 rounded-r-lg shadow-xl">
      <div className="flex flex-row">
        <ul className="flex flex-col gap-2">
          <li>
            <a href="http://www.facebook.com" target="_blank">
              <img className="hp:w-5 tablet:w-10 laptop:w-15  hover:translate-x-1" src={GithubImg} alt="Github"/>
            </a>
          </li>
          <li>
            <a href="http://www.facebook.com" target="_blank">
              <img className="hp:w-5 tablet:w-10 laptop:w-15 hover:translate-x-1" src={DiscordImg} alt="Discord"/>
            </a>
          </li>
          <li>
            <a href="http://www.facebook.com" target="_blank">
              <img className="hp:w-5 tablet:w-10 laptop:w-15 hover:translate-x-1" src={FacebookImg} alt="Discord"/>
            </a>
          </li>
          <li>
            <a href="http://www.facebook.com" target="_blank">
              <img className="hp:w-5 tablet:w-10 laptop:w-15 hover:translate-x-1" src={InstagramImg} alt="Instagram"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sosials;
