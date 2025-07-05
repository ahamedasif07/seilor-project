"use client";
import newAraivleDpImgOne from "../../../public/images/project-sailor-home-page008.jpg";
import newAraivleDpImgTow from "../../../public/images/project-sailor-home-page010.jpg";
import newAraivleDpImgTheree from "../../../public/images/project-sailor-home-page011.jpg";
import summweDpimgOne from "../../../public/images/project-sailor-home-page005.jpg";
import summweDpimgTwo from "../../../public/images/project-sailor-home-page006.jpg";
import summweDpimgTheree from "../../../public/images/project-sailor-home-page007.jpg";
import menDpImgOne from "../../../public/images/project-sailor-home-page011.jpg";
import menDpImgTwo from "../../../public/images/project-sailor-home-page012.jpg";
import menDpImgTheree from "../../../public/images/project-sailor-home-page013.jpg";
import Image from "next/image";

const BottomNav = () => {
  return (
    <div className="hidden lg:block ">
      <div className=" py-2 ">
        <div className="flex items-center justify-center gap-6">
          {/* summer collectoion dropdowen start */}
          <div className="relative group">
            {/* Trigger */}
            <h3 className="text-[15px] font-semibold text-gray-700 cursor-pointer">
              SUMMER COLLECTION/25
            </h3>
            {/* Dropdown */}

            <div
              className={`absolute left-105 transform -translate-x-1/2 z-[1000] px-[10px]  w-[99vw] top-full py-2 rounded-sm mt-[7px] bg-white text-gray-400 shadow-lg
    duration-300 flex flex-col items-start 
    opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all`}
            >
              <div className="mx-auto w-full px-2 flex flex-col md:flex-row justify-between gap-6 items-start">
                {/* Left image */}
                <div className="w-full   md:w-1/4 shrink-0">
                  <div className="relative w-2/3 h-[300px] lg:h-[400px]">
                    <Image
                      src={summweDpimgOne}
                      alt="Left"
                      layout="fill"
                      objectFit="cover"
                      priority
                    />
                  </div>
                </div>

                {/* Grid content */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full md:w-2/4 text-[14px] text-gray-700">
                  <div>
                    <h4 className="font-semibold mb-2 text-left">
                      MEN SUMMER COMFORT
                    </h4>
                    {/* ... */}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-left">
                      WOMEN SUMMER COMFORT
                    </h4>
                    {/* ... */}
                  </div>
                </div>

                {/* Right images */}
                <div className="w-full md:w-1/4 flex gap-3 shrink-0">
                  <div className="relative w-1/2 h-[200px] lg:h-[300px]">
                    <Image
                      src={summweDpimgTwo}
                      alt="Right 1"
                      layout="fill"
                      objectFit="cover"
                      priority
                    />
                  </div>
                  <div className="relative w-1/2 h-[200px]  lg:h-[300px]">
                    <Image
                      src={summweDpimgTheree}
                      alt="Right 2"
                      layout="fill"
                      objectFit="cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* summer collection dropdowen end */}

          {/* new araivle   dropdowen start */}
          <div className="relative group   text-center cursor-pointer transition-all duration-200  border-orange-400 hover:border-[#91d36b]  text-white group">
            {/* Trigger */}
            <div className="relative group">
              {/* Trigger */}
              <h3 className="text-[15px] font-semibold text-gray-700 cursor-pointer">
                NEW ARRIVAL/25
              </h3>

              {/* Dropdown */}
              <div
                className={`absolute left-55  transform -translate-x-1/2 z-[1000] px-[10px] w-[99vw] top-full py-2  rounded-sm mt-[7px] bg-white text-gray-400 shadow-lg
    duration-300 flex flex-col items-start 
    opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all`}
              >
                <div className="mx-auto w-full px-2 flex flex-col md:flex-row justify-between gap-6 items-start">
                  {/* Left image */}
                  <div className="w-full   md:w-1/4 shrink-0">
                    <div className="relative w-2/3 h-[300px] lg:h-[400px]">
                      <Image
                        src={newAraivleDpImgOne}
                        alt="Left"
                        layout="fill"
                        objectFit="cover"
                        priority
                      />
                    </div>
                  </div>

                  {/* Grid content */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full md:w-2/4 text-[14px] text-gray-700">
                    <div>
                      <h4 className="font-semibold mb-2 text-left">MEN</h4>
                      {/* panjabi */}
                      <h4 className="font-semibold mb-2 text-left">PANJABI</h4>
                      <ul className="space-y-1">
                        <li className="text-left text-[12px]">CLASSIC</li>
                        <li className="text-left text-[12px]">FUSION</li>
                        <li className="text-left text-[12px]">KABLI SUIT</li>
                      </ul>
                      {/* shirts */}
                      <h4 className="font-semibold my-2 text-left">SHIRT</h4>
                      <ul className="space-y-1">
                        <li className="text-left text-[12px]">
                          BUSINESS FORMAL SHIRT
                        </li>
                        <li className="text-left text-[12px]">
                          EXECUTIVE FORMAL SHIRT
                        </li>
                        <li className="text-left text-[12px]">
                          FASHION EXPRESS SHIRT
                        </li>
                        <li className="text-left text-[12px]">
                          KNIT DRESS SHIRT
                        </li>
                        <li className="text-left text-[12px]">
                          SMART CASUAL SHIRT
                        </li>
                        <li className="text-left text-[12px]">CASUAL SHIRT</li>
                        <li className="text-left text-[12px]">
                          CASUAL SHIRT (H/S)
                        </li>
                        <li className="text-left text-[12px]">
                          KNIT CASUAL SHIRT (H/S)
                        </li>
                      </ul>
                      {/* polos */}
                      <h4 className="font-semibold mb-2 text-left">POLOS</h4>
                      <ul className="space-y-1">
                        <li className="text-left text-[12px]">
                          KNIT BASIC POLO
                        </li>
                        <li className="text-left text-[12px]">
                          KNIT FASHION POLO
                        </li>

                        <li className="text-left text-[12px]">KABLI SUIT</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-left">WOMEN</h4>
                      <ul className="space-y-1">
                        <li className="text-left text-[12px]">KURTI</li>
                        <li className="text-left text-[12px]">LONG KURTI</li>
                        <li className="text-left text-[12px]">SALWAR SUIT</li>
                        <li className="text-left text-[12px]">GOWN</li>
                        <li className="text-left text-[12px]">2 PCE</li>
                        <li className="text-left text-[12px]">LONG TOP</li>
                        <li className="text-left text-[12px]">SHORT TOP</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-left">FOOTWEAR</h4>
                      <ul className="space-y-1">
                        <li className="text-left text-[12px]">CASUAL SHOE</li>
                        <li className="text-left text-[12px]">
                          FASHION LOAFER
                        </li>
                        <li className="text-left text-[12px]">SANDAL</li>
                        <li className="text-left text-[12px]">
                          FASHION SNEAKER
                        </li>
                        <li className="text-left text-[12px]">FORMAL SHOE</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-left">KIDS</h4>
                      <ul className="space-y-1">
                        <li className="font-semibold mb-2 text-left">
                          NEWBORN
                        </li>
                        <li className="font-semibold mb-2 text-left">
                          BOY'S COLLECTION
                        </li>
                        <li className="font-semibold mb-2 text-left">
                          NEWBORN BOY'S COLLECTION
                        </li>
                        <li className="font-semibold mb-2 text-left">
                          GIRL'S COLLECTION
                        </li>
                        <li className="font-semibold mb-2 text-left">
                          NEWBORN GIRL'S COLLECTION
                        </li>
                        <li className="font-semibold mb-2 text-left">KID'S</li>
                      </ul>
                    </div>
                  </div>

                  {/* Right image */}
                  <div className="w-full md:w-1/4 flex gap-3 shrink-0">
                    <div className="relative w-1/2 h-[200px] lg:h-[300px]">
                      <Image
                        src={newAraivleDpImgTow}
                        alt="Right 1"
                        layout="fill"
                        objectFit="cover"
                        priority
                      />
                    </div>
                    <div className="relative w-1/2 h-[200px]  lg:h-[300px]">
                      <Image
                        src={newAraivleDpImgTheree}
                        alt="Right 2"
                        layout="fill"
                        objectFit="cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* new araivle   dropdowen end */}

          {/* mens start dropdowen start*/}
          <div className="relative group   text-center cursor-pointer transition-all duration-200  border-orange-400 hover:border-[#91d36b]  text-white group">
            {/* Trigger */}
            <div className="relative group">
              {/* Trigger */}
              <h3 className="text-[15px] font-semibold text-gray-700 cursor-pointer">
                MEN'S
              </h3>

              {/* Dropdown */}
              <div
                className={`absolute left-20  transform -translate-x-1/2 z-[1000] px-[10px] w-[99vw] top-full py-2  rounded-sm mt-[7px] bg-white text-gray-400 shadow-lg
    duration-300 flex flex-col items-start 
    opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all`}
              >
                <div className="mx-auto w-full px-2 flex flex-col md:flex-row justify-between gap-6 items-start">
                  {/* Left image */}
                  <div className="w-full   md:w-1/4 shrink-0">
                    <div className="relative w-2/3 h-[300px] lg:h-[400px]">
                      <Image
                        src={menDpImgOne}
                        alt="Left"
                        layout="fill"
                        objectFit="cover"
                        priority
                      />
                    </div>
                  </div>

                  {/* Grid content */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full md:w-2/4 text-[14px] text-gray-700">
                    <div>
                      <h4 className="font-semibold mb-2 text-left">
                        ACTIVE WEAR
                      </h4>
                      {/* shirts */}
                      <h4 className="font-semibold my-2 text-left">SHIRT</h4>
                      <ul className="space-y-1">
                        <li className="text-left text-[12px]">
                          BUSINESS FORMAL SHIRT
                        </li>
                        <li className="text-left text-[12px]">
                          EXECUTIVE FORMAL SHIRT
                        </li>
                        <li className="text-left text-[12px]">
                          FASHION EXPRESS SHIRT
                        </li>
                        <li className="text-left text-[12px]">
                          KNIT DRESS SHIRT
                        </li>
                        <li className="text-left text-[12px]">
                          SMART CASUAL SHIRT
                        </li>
                        <li className="text-left text-[12px]">CASUAL SHIRT</li>
                        <li className="text-left text-[12px]">
                          CASUAL SHIRT (H/S)
                        </li>
                        <li className="text-left text-[12px]">
                          KNIT CASUAL SHIRT (H/S)
                        </li>
                      </ul>
                      {/* panjabi */}
                      <h4 className="font-semibold my-2 text-left">PANJABI</h4>
                      <ul className="space-y-1">
                        <li className="text-left text-[12px]">CLASSIC</li>
                        <li className="text-left text-[12px]">FUSION</li>
                        <li className="text-left text-[12px]">KABLI SUIT</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-left">
                        FASTIVE SPORT LIGHT
                      </h4>
                      {/* polos */}
                      <h4 className="font-semibold mb-2 text-left">POLOS</h4>
                      <ul className="space-y-1">
                        <li className="text-left text-[12px]">
                          KNIT BASIC POLO
                        </li>
                        <li className="text-left text-[12px]">
                          KNIT FASHION POLO
                        </li>

                        <li className="text-left text-[12px]">KABLI SUIT</li>
                      </ul>
                      {/* t-SHIRTS */}
                      <h4 className="font-semibold my-2 text-left">T-SHIRTS</h4>
                      <ul className="space-y-1">
                        <li className="text-left text-[12px]">
                          SPORT T-SHIRTS
                        </li>
                        <li className="text-left text-[12px]">
                          REGLURE T-SHIRTS
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-left">BOOTOM</h4>
                      <ul className="space-y-1">
                        <li className="text-left text-[12px]">CHINO TROUSER</li>
                        <li className="text-left text-[12px]">DENIM TROUSER</li>
                        <li className="text-left text-[12px]">SANDAL</li>
                      </ul>
                    </div>
                  </div>

                  {/* Right image */}
                  <div className="w-full md:w-1/4 flex gap-3 shrink-0">
                    <div className="relative w-1/2 h-[200px] lg:h-[300px]">
                      <Image
                        src={menDpImgTwo}
                        alt="Right 1"
                        layout="fill"
                        objectFit="cover"
                        priority
                      />
                    </div>
                    <div className="relative w-1/2 h-[200px]  lg:h-[300px]">
                      <Image
                        src={menDpImgTheree}
                        alt="Right 2"
                        layout="fill"
                        objectFit="cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* mens dropdowen end */}

          {/* women start dropdowen start*/}
          <div className="relative group   text-center cursor-pointer transition-all duration-200  border-orange-400 hover:border-[#91d36b]  text-white group">
            {/* Trigger */}
            <div className="relative group">
              {/* Trigger */}
              <h3 className="text-[15px] font-semibold text-gray-700 cursor-pointer">
                WOMEN'S
              </h3>

              {/* Dropdown */}
              <div
                className={`absolute left-5  transform -translate-x-1/2 z-[1000] px-[10px] w-[99vw] top-full py-2  rounded-sm mt-[7px] bg-white text-gray-400 shadow-lg
    duration-300 flex flex-col items-start 
    opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all`}
              >
                <div className="mx-auto w-full px-2 flex flex-col md:flex-row justify-between gap-6 items-start">
                  {/* Left image */}
                  <div className="w-full   md:w-1/4 shrink-0">
                    <div className="relative w-2/3 h-[300px] lg:h-[400px]">
                      <Image
                        src={menDpImgOne}
                        alt="Left"
                        layout="fill"
                        objectFit="cover"
                        priority
                      />
                    </div>
                  </div>

                  {/* Grid content */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full md:w-2/4 text-[14px] text-gray-700">
                    <div>
                      <h4 className="font-semibold mb-2 text-left">TOP</h4>
                      {/* shirts */}
                      <h4 className="font-semibold my-2 text-left">SHIRT</h4>
                      <ul className="space-y-1">
                        <li className="text-left text-[12px]">CROP TOP</li>
                        <li className="text-left text-[12px]">SHORT TOP</li>
                        <li className="text-left text-[12px]">LONG TOP</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-left">KAFTAN</h4>
                      {/* polos */}
                      <h4 className="font-semibold mb-2 text-left">2 PEC</h4>
                      <h4 className="font-semibold mb-2 text-left">SHIRT</h4>
                      <h4 className="font-semibold mb-2 text-left">
                        SALOWER SUIT
                      </h4>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-left">BOOTOM</h4>
                      <ul className="space-y-1">
                        <li className="text-left text-[12px]">SKIRT</li>
                      </ul>
                    </div>
                  </div>

                  {/* Right image */}
                  <div className="w-full md:w-1/4 flex gap-3 shrink-0">
                    <div className="relative w-1/2 h-[200px] lg:h-[300px]">
                      <Image
                        src={menDpImgTwo}
                        alt="Right 1"
                        layout="fill"
                        objectFit="cover"
                        priority
                      />
                    </div>
                    <div className="relative w-1/2 h-[200px]  lg:h-[300px]">
                      <Image
                        src={menDpImgTheree}
                        alt="Right 2"
                        layout="fill"
                        objectFit="cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* women dropdowen end */}
          <h3 className="text-[15px] font-semibold text-gray-700">KID'S</h3>
          <h3 className="text-[15px] font-semibold text-gray-700">NEWBORN</h3>
          <h3 className="text-[15px] font-semibold text-gray-700">FOOTWEAR</h3>
          <h3 className="text-[15px] font-semibold text-gray-700">
            ACCESSORIES
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
