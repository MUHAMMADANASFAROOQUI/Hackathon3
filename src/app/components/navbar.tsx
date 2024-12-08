import Image from "next/image";
import search from "../public/search.png";
import filter from "../public/filter.jpg";
import Like from "../public/Like.png";
import Notification from"../public/Notification.png";
import Settings from "../public/Settings.png";
import Profil from "../public/Profil.png"


export default function Header() {
    return(
        <div >
        <div className="Navbar-top">
            <div className="   lg:h-[124px] md:h-[124px] sm:h-[288px] sm:w-[375px] md:flex border-b-[1px]  ">
            <h1 className="md:w-[148px] sm:w-[108px] sm:h-[28px] h-[44px] md:h-[36px] lg:text-[32px] sm:text-[24px] md:text-[28px]    md:ml-[60px] md:mt-[32px] lg:mt-[40px] font-bold text-primary1 leading-[-150%] tracking-percent ">
            MORENT
            </h1>
            <div className="ml-[60px] md:ml-[56px] sm:ml-[25px] sm:mt-[10px]  md:mt-[32px] lg:mt-[40px] md:w-[500px] sm:w-[263px] sm:h-[48px] md:h-[40px] h-[44px] md:flex border-[1px] rounded-3xl">
               <div className="flex">
                <Image src={search} alt="search icon" className="w-[20px] h-[20px] ml-[18px] mt-[10px]">

                </Image>
                <h1  className="w-[160px]  h-[16px] text-[14px] font-medium font-[PlusJakartaSans] tracking-percent1 ml-[18px] mt-[12px]  ">Search something here</h1>
                </div>
                <Image src={filter} alt="filter icon" className="w-[20px] h-[20px] ml-[235px] mt-[10px] mr-[20px]">

                </Image>
                </div>
            
            <div className="w-[236px] h-[44px] gap-x-[20px] ml-[304px] md:ml-[260px]  flex md:mt-[32px]  lg:mt-[40px] mr-[32px]">
                <Image src={Like} alt="like-icon" className="w-[40px] h-[40px]">

                </Image>
                <Image src={Notification} alt="Notification-icon" className="w-[44px] h-[44px]">

                </Image>
                <Image src={Settings} alt="Settings-icon" className="w-[44px] h-[44px]">

                </Image>
                <Image src={Profil} alt="Profil-icon" className="w-[44px] h-[44px]">

                </Image>

</div>
            </div>
        </div>
        </div>
    )
}