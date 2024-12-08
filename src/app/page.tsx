import Image from "next/image";
import Card1 from "../app/public/card1.jpeg";
import Card2 from "../app/public/card2.jpeg";
import image7 from "../app/public/image7.png";
import image8 from "../app/public/image8.png"
import mark from "../app/public/mark.png"
import Switch from "../app/public/Switch.png";
import spesfication from "../app/public/spesfication.png"
import Like1 from "../app/public/Like1.png"
import Button from"../app/public/Button.png";
import Like2 from "../app/public/Like2.png";
import Car from "../app/public/Car.png";
import Car1 from "../app/public/Car1.png"
import Car2 from "../app/public/Car2.png";
import Car3 from "../app/public/Car3.png";
import Car4 from "../app/public/Car4.png";
import Car5 from "../app/public/Car5.png";
import Car6 from "../app/public/Car6.png";
import Car7 from "../app/public/Car7.png";
import spesfication2 from "../app/public/spesfication2.png";
import spesfication3 from "../app/public/spesfication3.png";
import spesfication4 from "../app/public/spesfication4.png";
import spesfication5 from "../app/public/spesfication5.png";
import spesfication6 from "../app/public/spesfication6.png";
import spesfication7 from "../app/public/spesfication7.png"


export default function Home() {
  return (
    <div>
      <div className="hero-section">
        <div className="" style={{background: "#F6F7F9"}}>
           <div className="flex">
            <div className="ml-[64px] mt-[32px] w-[640px] h-[360px]  rounded-[10px] ">
            <Image src={Card2} alt="hero1" width={640} height={360} className="bg-cover bg-center w-full h-full"/>
                 <div className=" mt-[80px] w-[284px] h-[224px] gap-y-[10px] absolute inset-24">
                   
                    <h1 className="font-semibold text-[32px]  tracking-percent leading-[150%] text-primary w-[272px] h-[96px] text-white">
                    The Best Platform for Car Rental
                    </h1>
                    <p className="text-[16px] w-[284px] h-[46px] mt-3  text-white">
                    Ease of doing a car rental safely and reliably. Of course at a low price.
                    </p>
                   <button className="text-[16px] w-[120px] h-[44px] bg-primary1 mt-3 text-white">Rental Car</button>
                 </div>
                 <Image src={image7} alt="car1"  className="absolute inset-44 mt-52 w-[406px] h-[116px]"></Image>
            </div>
            <div className="ml-[32px] mr-[64px] mt-[32px] w-[640px] h-[360px]  rounded-[10px] flex"  >
            <Image src={Card1} alt="hero1" width={640} height={360} className="bg-cover bg-center w-full h-full"/>
            <div>
            <div className="mt-5  w-[284px] h-[224px] gap-y-[10px] absolute inset-x-[680px]">
                   
                    <h1 className="font-semibold text-[32px] tracking-percent leading-[150%] text-white w-[272px] h-[96px]">
                    Easy way to rent a car at a low price
                    </h1>
                    <p className="text-[16px] w-[284px] h-[46px] mt-3 text-white">
                    Providing cheap car rental services and safe and comfortable facilities.
                    </p>
                   <button className="text-[16px] w-[120px] h-[44px] mt-3 text-white" style={{backgroundColor: "#54A6FF"}}>Rental Car</button>
                 </div>
                 <Image src={image8} alt="car1"  className="absolute inset-x-[790px] mt-56 w-[340px] h-[108px]"></Image>
            </div>
            </div>
            </div>
            <div className="flex">
            <div className="w-[500px] h-[132px] ml-[64px] mt-[32px] bg-white ">
              <div className="flex ml-[40px] ">
               <Image src={mark} alt="mark1" className=" w-[16px] h-[16px] mt-[24px] mr-[8px]"></Image>
              <h1 className="text-[16px] leading-[150%] tracking-percent1 font-semibold mt-[19px]">Pick - Up</h1>
            </div>
         
            <div className="w-[486px] h-[48px] ml-[40px] mt-[20px] flex">
              <div className="w-[140px] h-[48px] border-r-[1px]">
                <h1 className="font-bold text-[16px] leading-[150%] tracking-percent1">Locations</h1>   
              <select name="Select your city" id="0" className="text-[12px] w-[126px] h-[20px] mr-3">
                <option value="Select your city">Select your city</option>
                <option value="Karachi">Karachi</option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Peshawar">Peshawar</option>
              
              </select>
              </div>
              <div className="w-[486px] h-[48px] ml-[14px]  ">
              <div className="w-[140px] h-[48px] border-r-[1px]">
                <h1 className="font-bold text-[16px] leading-[150%] tracking-percent1">Date</h1>   
              <select name="Select your city" id="0" className="text-[12px] w-[126px] h-[20px]">
                <option value="Select your city">Select your date</option>
                <option value="8-12-2024">08-12-2024</option>
                <option value="9-12-2024">09-12-2024</option>
                <option value="10-12-2024">10-12-2024</option>
                <option value="12-12-2024">11-12-2024</option>
              
              </select>
              </div>
              
           
           
            
            </div>
            <div className="w-[486px] h-[48px]   ">
              <div className="w-[140px] h-[48px] ">
                <h1 className="font-bold text-[16px] leading-[150%] tracking-percent1">Time</h1>   
              <select name="Select your city" id="0" className="text-[12px] w-[126px] h-[20px] mr-[10px]">
                <option value="Select your city">Select your time</option>
                <option value="10:00 am">10:00 am</option>
                <option value="11:00 am">11:00 am</option>
                <option value="12:00 pm">12:00 pm</option>
                <option value="01:00 pm">01:00 pm</option>
              
              </select>
              </div>
              
           
           
            
            </div>
            </div>
            
           </div>
           <div>
            <Image src={Switch} alt="switch" className="w-30 h-30  mt-[60px]"></Image>
           </div>
           <div className="w-[500px] h-[132px] ml-[10px] mr-[64px] mt-[32px] bg-white ">
              <div className="flex ml-[40px] ">
               <Image src={mark} alt="mark1" className=" w-[16px] h-[16px] mt-[24px] mr-[8px]"></Image>
              <h1 className="text-[16px] leading-[150%] tracking-percent1 font-semibold mt-[19px]">Drop - Off</h1>
            </div>
         
            <div className="w-[486px] h-[48px] ml-[40px] mt-[20px] flex">
              <div className="w-[140px] h-[48px] border-r-[1px]">
                <h1 className="font-bold text-[16px] leading-[150%] tracking-percent1">Locations</h1>   
              <select name="Select your city" id="0" className="text-[12px] w-[126px] h-[20px] mr-3">
                <option value="Select your city">Select your city</option>
                <option value="Karachi">Karachi</option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Peshawar">Peshawar</option>
              
              </select>
              </div>
              <div className="w-[486px] h-[48px] ml-[14px]  ">
              <div className="w-[140px] h-[48px] border-r-[1px]">
                <h1 className="font-bold text-[16px] leading-[150%] tracking-percent1">Date</h1>   
              <select name="Select your city" id="0" className="text-[12px] w-[126px] h-[20px]">
                <option value="Select your city">Select your date</option>
                <option value="8-12-2024">08-12-2024</option>
                <option value="9-12-2024">09-12-2024</option>
                <option value="10-12-2024">10-12-2024</option>
                <option value="12-12-2024">11-12-2024</option>
              
              </select>
              </div>
              
           
           
            
            </div>
            <div className="w-[486px] h-[48px]   ">
              <div className="w-[140px] h-[48px] ">
                <h1 className="font-bold text-[16px] leading-[150%] tracking-percent1">Time</h1>   
              <select name="Select your city" id="0" className="text-[12px] w-[126px] h-[20px]">
                <option value="Select your city">Select your time</option>
                <option value="10:00 am">10:00 am</option>
                <option value="11:00 am">11:00 am</option>
                <option value="12:00 pm">12:00 pm</option>
                <option value="01:00 pm">01:00 pm</option>
              
              </select>
              </div>
              
           
           
            
            </div>
            </div>
           </div>
           </div>
           <div className="cards-section">
  <div className="pt-[24px] pl-[64px] pr-[64px]" style={{ backgroundColor: "#F6F7F9" }}>
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-[16px] font-semibold ml-[20px] mt-[18px] text-text1">
          Popular Car
        </h1>
      </div>
      <div className="w-[104px] h-[44px]">
        <h1 className="m-[20px] font-semibold text-[16px] text-primary1">View All</h1>
      </div>
    </div>

    <div className="flex gap-8 mt-[64px] justify-center sm:justify-start sm:gap-6 md:gap-6 flex-nowrap">
      <div className="w-[290px] h-[388px] bg-white rounded-[10px]">
        <div className="w-[128px] h-[48px] p-[20px] gap-x-[4px] flex">
          <div>
            <h1 className="text-[19px] font-bold leading-[150%] tracking-percent">Koenigsegg</h1>
            <h1 className="text-text1 text-[14px]">Sport</h1>
          </div>
          <Image src={Like1} alt="like1" className="w-[24px] h-[24px] ml-[108px] mt-[4px]" />
        </div>
        <Image src={image7} alt="car1" className="w-[232px] h-[72px] ml-[12px] mt-[130px]" />
        <Image src={spesfication} alt="detail" className="w-[234px] h-[20px] ml-[16px] mt-[48px]" />
        <div>
          <div className="flex">
            <div className="w-[116px] h-[44px] ml-[16px] mt-[20px] flex">
              <h1 className="text-text2 text-[18px] font-bold ">$99.00/</h1>
              <h1 className="text-[12px] font-bold text-text1 mt-2 ml-1">day</h1>
            </div>
            <Image src={Button} alt="button" className="w-[100px] h-[36px] ml-4 mt-[20px]" />
          </div>
        </div>
      </div>

      <div className="w-[290px] h-[388px] bg-white rounded-[10px]">
  <div className="flex w-full  h-[48px] p-[20px] gap-x-[4px]">
    <div className="flex-1">
      <h1 className="text-[18px] font-bold leading-[150%] tracking-percent">Nissan GT-R</h1>
      <h1 className="text-text1 text-[14px]">Sport</h1>
    </div>
    <Image src={Like2} alt="like1" className="w-[24px] h-[24px] mt-[4px]" />
  </div>
  <Image src={image8} alt="car1" className="w-[204px] h-[64px] ml-[28px] mt-[130px]" />
  <Image src={spesfication2} alt="detail" className="w-[234px] h-[20px] ml-[16px] mt-[48px]" />
  <div className="flex justify-between items-center mt-[20px] ml-[16px]">
    <div className="items-center">
      <div className="flex ">
      <h1 className="text-text2 text-[18px] font-bold">$80.00/</h1>
      <h1 className="text-[12px] font-bold text-text1 mt-2 ml-1">day</h1>
      </div>
      <h1 className="text-text1 text-[14px] font-bold">$100.00</h1>
    </div>
    <Image src={Button} alt="button" className="w-[100px] h-[36px] mr-[16px]" />
  </div>
</div>

      
<div className="w-[290px] h-[388px] bg-white rounded-[10px]">
  <div className="flex w-full  h-[48px] p-[20px] gap-x-[4px]">
    <div className="flex-1">
      <h1 className="text-[18px] font-bold leading-[150%] tracking-percent">Rolls - Royce</h1>
      <h1 className="text-text1 text-[14px]">Sport</h1>
    </div>
    <Image src={Like1} alt="like1" className="w-[24px] h-[24px] mt-[4px]" />
  </div>
  <Image src={Car} alt="car1" className="w-[210px] h-[68px] ml-[24px] mt-[130px]" />
  <Image src={spesfication3} alt="detail" className="w-[234px] h-[20px] ml-[16px] mt-[48px]" />
  <div className="flex justify-between items-center mt-[20px] ml-[16px]">
    <div className="flex items-center">
      <h1 className="text-text2 text-[18px] font-bold">$96.00/</h1>
      <h1 className="text-[12px] font-bold text-text1 mt-2 ml-1">day</h1>
    </div>
    <Image src={Button} alt="button" className="w-[100px] h-[36px]  mr-[16px]" />
  </div>
</div>


      
<div className="w-[290px] h-[388px] bg-white rounded-[10px]">
  <div className="flex w-full  h-[48px]  p-[20px] gap-x-[4px]">
    <div className="flex-1">
      <h1 className="text-[18px] font-bold leading-[150%] tracking-percent">Nissan GT-R</h1>
      <h1 className="text-text1 text-[14px]">Sport</h1>
    </div>
    <Image src={Like2} alt="like1" className="w-[24px] h-[24px] mt-[4px]" />
  </div>
  <Image src={image8} alt="car1" className="w-[204px] h-[64px] ml-[28px] mt-[130px]" />
  <Image src={spesfication2} alt="detail" className="w-[234px] h-[20px] ml-[16px] mt-[48px]" />
  <div className="flex justify-between items-center mt-[20px] ml-[16px]">
    <div className="items-center">
      <div className="flex ">
      <h1 className="text-text2 text-[18px] font-bold">$80.00/</h1>
      <h1 className="text-[12px] font-bold text-text1 mt-2 ml-1">day</h1>
      </div>
      <h1 className="text-text1 text-[14px] font-bold">$100.00</h1>
    </div>
    <Image src={Button} alt="button" className="w-[100px] h-[36px] mr-[16px]" />
  </div>
</div>

    </div>
  </div>
</div>

</div>
</div>



<div className="pt-[24px] pl-[64px] pr-[64px]" style={{ backgroundColor: "#F6F7F9" }}>
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-[16px] font-semibold ml-[20px] mt-[18px] text-text1">
          Recommendation Car
        </h1>
      </div>
   
    </div>

    <div className="flex gap-8 mt-[64px] justify-center sm:justify-start sm:gap-6 md:gap-6 flex-nowrap">
  <div className="w-[290px] h-[388px] bg-white rounded-[10px]">
    <div className="flex w-full p-[20px] gap-x-[4px]">
      <div className="flex-1">
        <h1 className="text-[19px] font-bold leading-[150%] tracking-percent">All New Rush</h1>
        <h1 className="text-text1 text-[14px]">SUV</h1>
      </div>
      <Image src={Like2} alt="like1" className="w-[24px] h-[24px] mt-[4px]" />
    </div>
    <Image src={Car1} alt="car1" className="w-[224px] h-[100px] ml-[18px] mt-[52px]" />
    <Image src={spesfication4} alt="detail" className="w-[234px] h-[20px] ml-[16px] mt-[50px]" />
   <div className="flex ml-[16px] mt-[18px]">
      <div className="items-center">
      <div className="flex ">
      <h1 className="text-text2 text-[18px] font-bold">$72.00/</h1>
      <h1 className="text-[12px] font-bold text-text1 mt-2 ml-1">day</h1>
      </div>
      <h1 className="text-text1 text-[14px] font-bold">$80.00</h1>
    </div>
        <Image src={Button} alt="button" className="w-[100px] h-[36px] ml-11 mt-[7px]" />
      </div>
      </div>



      <div className="w-[290px] h-[388px] bg-white rounded-[10px]">
  <div className="flex w-full  h-[48px] p-[20px] gap-x-[4px]">
    <div className="flex-1">
      <h1 className="text-[20px] font-bold leading-[150%] tracking-percent">CR - V</h1>
      <h1 className="text-text1 text-[14px]">SUV</h1>
    </div>
    <Image src={Like1} alt="like1" className="w-[24px] h-[24px] mt-[4px]" />
  </div>
  <Image src={Car2} alt="car1" className="w-[236px] h-[100px] ml-[14px] mt-[96px]" />
  <Image src={spesfication5} alt="detail" className="w-[234px] h-[20px] ml-[16px] mt-[48px]" />
  <div className="flex justify-between items-center mt-[24px] ml-[16px]">
    <div className="items-center">
      <div className="flex ">
      <h1 className="text-text2 text-[18px] font-bold">$80.00/</h1>
      <h1 className="text-[12px] font-bold text-text1 mt-2 ml-1">day</h1>
     </div>
     </div>
    <Image src={Button} alt="button" className="w-[100px] h-[36px] mr-[16px]" />
  </div>
</div>

      
<div className="w-[290px] h-[388px] bg-white rounded-[10px]">
  <div className="flex w-full  h-[48px] p-[20px] gap-x-[4px]">
    <div className="flex-1">
      <h1 className="text-[18px] font-bold leading-[150%] tracking-percent">All New Terios</h1>
      <h1 className="text-text1 text-[14px]">Sport</h1>
    </div>
    <Image src={Like2} alt="like1" className="w-[24px] h-[24px] mt-[4px]" />
  </div>
  <Image src={Car3} alt="car1" className="w-[224px] h-[100px] ml-[18px] mt-[96px]" />
  <Image src={spesfication3} alt="detail" className="w-[234px] h-[20px] ml-[14px] mt-[48px]" />
  <div className="flex justify-between items-center mt-[22px] ml-[16px]">
    <div className="flex items-center">
      <h1 className="text-text2 text-[18px] font-bold">$74.00/</h1>
      <h1 className="text-[12px] font-bold text-text1 mt-2 ml-1">day</h1>
    </div>
    <Image src={Button} alt="button" className="w-[100px] h-[36px]  mr-[16px]" />
  </div>
</div>


      
<div className="w-[290px] h-[388px] bg-white rounded-[10px]">
  <div className="flex w-full  h-[48px] p-[20px] gap-x-[4px]">
    <div className="flex-1">
      <h1 className="text-[20px] font-bold leading-[150%] tracking-percent">CR - V</h1>
      <h1 className="text-text1 text-[14px]">SUV</h1>
    </div>
    <Image src={Like1} alt="like1" className="w-[24px] h-[24px] mt-[4px]" />
  </div>
  <Image src={Car4} alt="car1" className="w-[236px] h-[100px] ml-[14px] mt-[96px]" />
  <Image src={spesfication5} alt="detail" className="w-[234px] h-[20px] ml-[16px] mt-[48px]" />
  <div className="flex justify-between items-center mt-[24px] ml-[16px]">
    <div className="items-center">
      <div className="flex ">
      <h1 className="text-text2 text-[18px] font-bold">$80.00/</h1>
      <h1 className="text-[12px] font-bold text-text1 mt-2 ml-1">day</h1>
     </div>
     </div>
    <Image src={Button} alt="button" className="w-[100px] h-[36px] mr-[16px]" />
  </div>
</div>
    </div>
  </div>

  <div className="pt-[32px] pl-[64px] pr-[64px]" style={{ backgroundColor: "#F6F7F9" }}>

    <div className="flex gap-8  justify-center sm:justify-start sm:gap-6 md:gap-6 flex-nowrap">
  <div className="w-[290px] h-[388px] bg-white rounded-[10px]">
    <div className="flex w-full p-[20px] gap-x-[4px]">
      <div className="flex-1">
        <h1 className="text-[19px] font-bold leading-[150%] tracking-percent">MG ZX Exclusice</h1>
        <h1 className="text-text1 text-[14px]">Hatchback</h1>
      </div>
      <Image src={Like1} alt="like1" className="w-[24px] h-[24px] mt-[4px]" />
    </div>
    <Image src={Car5} alt="car1" className="w-[264px] h-[108px] ml-[2px] mt-[44px]" />
    <Image src={spesfication6} alt="detail" className="w-[234px] h-[20px] ml-[16px] mt-[50px]" />
   <div className="flex ml-[16px] mt-[18px]">
      <div className="items-center">
      <div className="flex ">
      <h1 className="text-text2 text-[18px] font-bold">$76.00/</h1>
      <h1 className="text-[12px] font-bold text-text1 mt-2 ml-1">day</h1>
      </div>
      <h1 className="text-text1 text-[14px] font-bold">$80.00</h1>
    </div>
        <Image src={Button} alt="button" className="w-[100px] h-[36px] ml-11 mt-[7px]" />
      </div>
      </div>



      <div className="w-[290px] h-[388px] bg-white rounded-[10px]">
  <div className="flex w-full  h-[48px] p-[20px] gap-x-[4px]">
    <div className="flex-1">
      <h1 className="text-[20px] font-bold leading-[150%] tracking-percent">New MG ZS</h1>
      <h1 className="text-text1 text-[14px]">SUV</h1>
    </div>
    <Image src={Like2} alt="like1" className="w-[24px] h-[24px] mt-[4px]" />
  </div>
  <Image src={Car6} alt="car1" className="w-[236px] h-[100px] ml-[14px] mt-[96px]" />
  <Image src={spesfication5} alt="detail" className="w-[234px] h-[20px] ml-[16px] mt-[48px]" />
  <div className="flex justify-between items-center mt-[24px] ml-[16px]">
    <div className="items-center">
      <div className="flex ">
      <h1 className="text-text2 text-[18px] font-bold">$80.00/</h1>
      <h1 className="text-[12px] font-bold text-text1 mt-2 ml-1">day</h1>
     </div>
     </div>
    <Image src={Button} alt="button" className="w-[100px] h-[36px] mr-[16px]" />
  </div>
</div>

      
<div className="w-[290px] h-[388px] bg-white rounded-[10px]">
    <div className="flex w-full p-[20px] gap-x-[4px]">
      <div className="flex-1">
        <h1 className="text-[19px] font-bold leading-[150%] tracking-percent">MG ZX Exclusice</h1>
        <h1 className="text-text1 text-[14px]">Hatchback</h1>
      </div>
      <Image src={Like1} alt="like1" className="w-[24px] h-[24px] mt-[4px]" />
    </div>
    <Image src={Car5} alt="car1" className="w-[264px] h-[108px] ml-[2px] mt-[44px]" />
    <Image src={spesfication7} alt="detail" className="w-[234px] h-[20px] ml-[16px] mt-[50px]" />
   <div className="flex ml-[16px] mt-[26px]">
      <div className="items-center">
      <div className="flex ">
      <h1 className="text-text2 text-[18px] font-bold">$74.00/</h1>
      <h1 className="text-[12px] font-bold text-text1 mt-2 ml-1">day</h1>
      </div>
    </div>
        <Image src={Button} alt="button" className="w-[100px] h-[36px] ml-11" />
      </div>
      </div>


      
<div className="w-[290px] h-[388px] bg-white rounded-[10px]">
  <div className="flex w-full  h-[48px] p-[20px] gap-x-[4px]">
    <div className="flex-1">
      <h1 className="text-[20px] font-bold leading-[150%] tracking-percent">New MG ZS</h1>
      <h1 className="text-text1 text-[14px]">SUV</h1>
    </div>
    <Image src={Like2} alt="like1" className="w-[24px] h-[24px] mt-[4px]" />
  </div>
  <Image src={Car7} alt="car1" className="w-[236px] h-[100px] ml-[14px] mt-[96px]" />
  <Image src={spesfication5} alt="detail" className="w-[234px] h-[20px] ml-[16px] mt-[48px]" />
  <div className="flex justify-between items-center mt-[24px] ml-[16px]">
    <div className="items-center">
      <div className="flex ">
      <h1 className="text-text2 text-[18px] font-bold">$80.00/</h1>
      <h1 className="text-[12px] font-bold text-text1 mt-2 ml-1">day</h1>
     </div>
     </div>
    <Image src={Button} alt="button" className="w-[100px] h-[36px] mr-[16px]" />
  </div>
</div>
    </div>
  </div>
  <div className="flex" style={{backgroundColor: "#F6F7F9"}}>
    
  <button className="ml-[550px] mt-[60px] mb-[20px] w-[156px] h-[44px] bg-primary1 text-[16px] font-semibold text-white">Show more car</button>
  <h1 className="ml-[430px] mt-[64px] text-text1 text-[14px] font-medium leading-[150%] tracking-percent1">120 Car</h1>
  </div>
  </div>
      
 
  );
}
