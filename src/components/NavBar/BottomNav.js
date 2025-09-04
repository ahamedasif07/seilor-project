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
import womenDpImgOne from "../../../public/images/project-sailor-home-page014.jpg";
import womenDpImgTwo from "../../../public/images/project-sailor-home-page015.jpg";
import womenDpImgTheree from "../../../public/images/project-sailor-home-page016.jpg";
import kisDpImgOne from "../../../public/images/project-sailor-home-page017.jpg";
import kidDpImgTwo from "../../../public/images/project-sailor-home-page018.jpg";
import kidDpImgTheree from "../../../public/images/project-sailor-home-page019.jpg";
import newbronDpImgOne from "../../../public/images/project-sailor-home-page020.jpg";
import newbronDpImgTwo from "../../../public/images/project-sailor-home-page021.jpg";
import newbronDpImgTheree from "../../../public/images/project-sailor-home-page022.jpg";
import footwareDpImgOne from "../../../public/images/project-sailor-home-page023.jpg";
import footwareDpImgTwo from "../../../public/images/project-sailor-home-page024.jpg";
import footwareDpImgTheree from "../../../public/images/project-sailor-home-page025.jpg";
import accDpImgOne from "../../../public/images/project-sailor-home-page026.jpg";
import accDpImgTow from "../../../public/images/project-sailor-home-page027.jpg";
import accDpImgTheree from "../../../public/images/project-sailor-home-page028.jpg";

import Image from "next/image";
import Link from "next/link";

const BottomNav = () => {
  return (
    <div className="hidden lg:block ">
      <div className=" py-2 ">
        <div className="flex items-center justify-center gap-6">
          {/* summer collectoion dropdowen start */}
          {/* summer collectoion dropdowen start */}
          <div className="relative group">
            {/* Trigger */}
            <Link href="/summer-collection">
              <h3 className="text-[15px] font-semibold text-gray-700 cursor-pointer uppercase">
                Summer Collection/25
              </h3>
            </Link>

            {/* Dropdown */}
            <div
              className={`absolute left-108 transform -translate-x-1/2 z-[1000] px-[10px] w-[99vw] top-full py-2 rounded-sm mt-[7px] bg-white text-gray-400 shadow-lg
        duration-300 flex flex-col items-start 
        opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all`}
            >
              <div className="mx-auto w-full px-2 flex flex-col md:flex-row justify-between gap-6 items-start">
                {/* Left image */}
                <div className="w-full md:w-1/4 shrink-0">
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
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full md:w-2/4 text-[14px] text-gray-700">
                  <div>
                    <Link href="/summer-collection/men-summer-comfort">
                      <li
                        className=" list-none font-semibold mb-2 text-left cursor-pointer uppercase 
                     hover:text-red-600 hover:translate-x-1 transition-transform duration-200"
                      >
                        Men Summer Comfort
                      </li>
                    </Link>
                  </div>
                  <div>
                    <Link href="/summer-collection/women-summer-comfort">
                      <li
                        className=" list-none mb-2 font-semibold text-left cursor-pointer uppercase 
                     hover:text-red-600 hover:translate-x-1 transition-transform duration-200"
                      >
                        Women Summer Comfort
                      </li>
                    </Link>
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
                  <div className="relative w-1/2 h-[200px] lg:h-[300px]">
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
          <div className="relative group text-center cursor-pointer transition-all duration-200 border-orange-400 hover:border-[#91d36b] text-white">
            {/* Trigger */}
            <div className="relative group">
              <Link href="/new-arrivle">
                <h3 className="text-[15px] font-semibold text-gray-700 cursor-pointer">
                  NEW ARRIVAL/25
                </h3>
              </Link>

              {/* Dropdown */}
              <div
                className={`absolute left-58 transform -translate-x-1/2 z-[1000] px-[10px] w-[99vw] top-full py-2 rounded-sm mt-[7px] bg-white text-gray-400 shadow-lg
          duration-300 flex flex-col items-start 
          opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all`}
              >
                <div className="mx-auto w-full px-2 flex flex-col md:flex-row justify-between gap-6 items-start">
                  {/* Left image */}
                  <div className="w-full md:w-1/4 shrink-0">
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
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full md:w-2/4 text-gray-700">
                    <div>
                      <h4 className="mb-2 font-semibold text-left">MEN</h4>
                      <h4 className="mb-2 font-semibold text-left">
                        <Link href="/new-arrivle/panjabi">PANJABI</Link>
                      </h4>
                      <ul className="space-y-1">
                        <li className="list-none mb-2 text-left cursor-pointer uppercase text-[12px] font-semibold hover:text-red-600 hover:translate-x-1 transition-transform duration-200">
                          <Link href="/new-arrivle/panjabi/classic">
                            CLASSIC
                          </Link>
                        </li>
                        <li className="list-none mb-2 text-left cursor-pointer uppercase text-[12px] font-semibold hover:text-red-600 hover:translate-x-1 transition-transform duration-200">
                          <Link href="/new-arrivle/panjabi/fusion">FUSION</Link>
                        </li>
                        <li className="list-none mb-2 text-left cursor-pointer uppercase text-[12px] font-semibold hover:text-red-600 hover:translate-x-1 transition-transform duration-200">
                          <Link href="/new-arrivle/panjabi/kabli-suit">
                            KABLI SUIT
                          </Link>
                        </li>
                      </ul>

                      <h4 className="my-2 font-semibold text-left">SHIRT</h4>
                      <ul className="space-y-1">
                        <li className="list-none mb-2 text-left cursor-pointer uppercase text-[12px] font-semibold hover:text-red-600 hover:translate-x-1 transition-transform duration-200">
                          <Link href="/new-arrivle/shirt/business-formal-shirt">
                            BUSINESS FORMAL SHIRT
                          </Link>
                        </li>
                        <li className="list-none mb-2 text-left cursor-pointer uppercase text-[12px] font-semibold hover:text-red-600 hover:translate-x-1 transition-transform duration-200">
                          <Link href="/men/shirt/executive-formal-shirt">
                            EXECUTIVE FORMAL SHIRT
                          </Link>
                        </li>
                        <li className="list-none mb-2 text-left cursor-pointer uppercase text-[12px] font-semibold hover:text-red-600 hover:translate-x-1 transition-transform duration-200">
                          <Link href="/men/shirt/fashion-express-shirt">
                            FASHION EXPRESS SHIRT
                          </Link>
                        </li>
                        <li className="list-none mb-2 text-left cursor-pointer uppercase text-[12px] font-semibold hover:text-red-600 hover:translate-x-1 transition-transform duration-200">
                          <Link href="/men/shirt/knit-dress-shirt">
                            KNIT DRESS SHIRT
                          </Link>
                        </li>
                        <li className="list-none mb-2 text-left cursor-pointer uppercase text-[12px] font-semibold hover:text-red-600 hover:translate-x-1 transition-transform duration-200">
                          <Link href="/men/shirt/smart-casual-shirt">
                            SMART CASUAL SHIRT
                          </Link>
                        </li>
                        <li className="list-none mb-2 text-left cursor-pointer uppercase text-[12px] font-semibold hover:text-red-600 hover:translate-x-1 transition-transform duration-200">
                          <Link href="/men/shirt/casual-shirt">
                            CASUAL SHIRT
                          </Link>
                        </li>
                        <li className="list-none mb-2 text-left cursor-pointer uppercase text-[12px] font-semibold hover:text-red-600 hover:translate-x-1 transition-transform duration-200">
                          <Link href="/men/shirt/casual-shirt-hs">
                            CASUAL SHIRT (H/S)
                          </Link>
                        </li>
                        <li className="list-none mb-2 text-left cursor-pointer uppercase text-[12px] font-semibold hover:text-red-600 hover:translate-x-1 transition-transform duration-200">
                          <Link href="/men/shirt/knit-casual-shirt-hs">
                            KNIT CASUAL SHIRT (H/S)
                          </Link>
                        </li>
                      </ul>

                      <h4 className="mb-2 font-semibold text-left">POLOS</h4>
                      <ul className="space-y-1">
                        <li className="list-none mb-2 text-left cursor-pointer uppercase text-[12px] font-semibold hover:text-red-600 hover:translate-x-1 transition-transform duration-200">
                          <Link href="/men/polos/knit-basic-polo">
                            KNIT BASIC POLO
                          </Link>
                        </li>
                        <li className="list-none mb-2 text-left cursor-pointer uppercase text-[12px] font-semibold hover:text-red-600 hover:translate-x-1 transition-transform duration-200">
                          <Link href="/men/polos/knit-fashion-polo">
                            KNIT FASHION POLO
                          </Link>
                        </li>
                        <li className="list-none mb-2 text-left cursor-pointer uppercase text-[12px] font-semibold hover:text-red-600 hover:translate-x-1 transition-transform duration-200">
                          <Link href="/men/polos/kabli-suit">KABLI SUIT</Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-2 font-semibold text-left">WOMEN</h4>
                      <ul className="space-y-1">
                        <li className="list-none mb-2 text-left cursor-pointer uppercase text-[12px] font-semibold hover:text-red-600 hover:translate-x-1 transition-transform duration-200">
                          <Link href="/women/kurti">KURTI</Link>
                        </li>
                        <li className="list-none mb-2 text-left cursor-pointer uppercase text-[12px] font-semibold hover:text-red-600 hover:translate-x-1 transition-transform duration-200">
                          <Link href="/women/long-kurti">LONG KURTI</Link>
                        </li>
                        <li className="list-none mb-2 text-left cursor-pointer uppercase text-[12px] font-semibold hover:text-red-600 hover:translate-x-1 transition-transform duration-200">
                          <Link href="/women/salwar-suit">SALWAR SUIT</Link>
                        </li>
                        <li className="list-none mb-2 text-left cursor-pointer uppercase text-[12px] font-semibold hover:text-red-600 hover:translate-x-1 transition-transform duration-200">
                          <Link href="/women/gown">GOWN</Link>
                        </li>
                        <li className="list-none mb-2 text-left cursor-pointer uppercase text-[12px] font-semibold hover:text-red-600 hover:translate-x-1 transition-transform duration-200">
                          <Link href="/women/2-pce">2 PCE</Link>
                        </li>
                        <li className="list-none mb-2 text-left cursor-pointer uppercase text-[12px] font-semibold hover:text-red-600 hover:translate-x-1 transition-transform duration-200">
                          <Link href="/women/long-top">LONG TOP</Link>
                        </li>
                        <li className="list-none mb-2 text-left cursor-pointer uppercase text-[12px] font-semibold hover:text-red-600 hover:translate-x-1 transition-transform duration-200">
                          <Link href="/women/short-top">SHORT TOP</Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-2 font-semibold text-left">FOOTWEAR</h4>
                      <ul className="space-y-1">
                        <li className="list-none mb-2 text-left cursor-pointer uppercase text-[12px] font-semibold hover:text-red-600 hover:translate-x-1 transition-transform duration-200">
                          <Link href="/footwear/casual-shoe">CASUAL SHOE</Link>
                        </li>
                        <li className="list-none mb-2 text-left cursor-pointer uppercase text-[12px] font-semibold hover:text-red-600 hover:translate-x-1 transition-transform duration-200">
                          <Link href="/footwear/fashion-loafer">
                            FASHION LOAFER
                          </Link>
                        </li>
                        <li className="list-none mb-2 text-left cursor-pointer uppercase text-[12px] font-semibold hover:text-red-600 hover:translate-x-1 transition-transform duration-200">
                          <Link href="/footwear/sandal">SANDAL</Link>
                        </li>
                        <li className="list-none mb-2 text-left cursor-pointer uppercase text-[12px] font-semibold hover:text-red-600 hover:translate-x-1 transition-transform duration-200">
                          <Link href="/footwear/fashion-sneaker">
                            FASHION SNEAKER
                          </Link>
                        </li>
                        <li className="list-none mb-2 text-left cursor-pointer uppercase text-[12px] font-semibold hover:text-red-600 hover:translate-x-1 transition-transform duration-200">
                          <Link href="/footwear/formal-shoe">FORMAL SHOE</Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-2 font-semibold text-left">KIDS</h4>
                      <ul className="space-y-1">
                        <li className="list-none mb-2 text-left cursor-pointer uppercase text-[12px] font-semibold hover:text-red-600 hover:translate-x-1 transition-transform duration-200">
                          <Link href="/kids/newborn">NEWBORN</Link>
                        </li>
                        <li className="list-none mb-2 text-left cursor-pointer uppercase text-[12px] font-semibold hover:text-red-600 hover:translate-x-1 transition-transform duration-200">
                          <Link href="/kids/boys-collection">
                            BOY'S COLLECTION
                          </Link>
                        </li>
                        <li className="list-none mb-2 text-left cursor-pointer uppercase text-[12px] font-semibold hover:text-red-600 hover:translate-x-1 transition-transform duration-200">
                          <Link href="/kids/newborn-boys-collection">
                            NEWBORN BOY'S COLLECTION
                          </Link>
                        </li>
                        <li className="list-none mb-2 text-left cursor-pointer uppercase text-[12px] font-semibold hover:text-red-600 hover:translate-x-1 transition-transform duration-200">
                          <Link href="/kids/girls-collection">
                            GIRL'S COLLECTION
                          </Link>
                        </li>
                        <li className="list-none mb-2 text-left cursor-pointer uppercase text-[12px] font-semibold hover:text-red-600 hover:translate-x-1 transition-transform duration-200">
                          <Link href="/kids/newborn-girls-collection">
                            NEWBORN GIRL'S COLLECTION
                          </Link>
                        </li>
                        <li className="list-none mb-2 text-left cursor-pointer uppercase text-[12px] font-semibold hover:text-red-600 hover:translate-x-1 transition-transform duration-200">
                          <Link href="/kids/kids">KID'S</Link>
                        </li>
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
                    <div className="relative w-1/2 h-[200px] lg:h-[300px]">
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
                className={`absolute left-22  transform -translate-x-1/2 z-[1000] px-[10px] w-[99vw] top-full py-2  rounded-sm mt-[7px] bg-white text-gray-400 shadow-lg
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
                      <h4 className=" mb-2 text-left">ACTIVE WEAR</h4>
                      {/* shirts */}
                      <h4 className=" my-2 text-left">SHIRT</h4>
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
                      <h4 className=" my-2 text-left">PANJABI</h4>
                      <ul className="space-y-1">
                        <li className="text-left text-[12px]">CLASSIC</li>
                        <li className="text-left text-[12px]">FUSION</li>
                        <li className="text-left text-[12px]">KABLI SUIT</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className=" mb-2 text-left">FASTIVE SPORT LIGHT</h4>
                      {/* polos */}
                      <h4 className=" mb-2 text-left">POLOS</h4>
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
                      <h4 className=" my-2 text-left">T-SHIRTS</h4>
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
                      <h4 className=" mb-2 text-left">BOOTOM</h4>
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
                        src={womenDpImgOne}
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
                      <h4 className=" mb-2 text-left">TOP</h4>
                      {/* shirts */}
                      <h4 className=" my-2 text-left">SHIRT</h4>
                      <ul className="space-y-1">
                        <li className="text-left text-[12px]">CROP TOP</li>
                        <li className="text-left text-[12px]">SHORT TOP</li>
                        <li className="text-left text-[12px]">LONG TOP</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className=" mb-2 text-left">KAFTAN</h4>
                      {/* polos */}
                      <h4 className=" mb-2 text-left">2 PEC</h4>
                      <h4 className=" mb-2 text-left">SHIRT</h4>
                      <h4 className=" mb-2 text-left">SALOWER SUIT</h4>
                    </div>
                    <div>
                      <h4 className=" mb-2 text-left">BOOTOM</h4>
                      <ul className="space-y-1">
                        <li className="text-left text-[12px]">SKIRT</li>
                      </ul>
                    </div>
                  </div>

                  {/* Right image */}
                  <div className="w-full md:w-1/4 flex gap-3 shrink-0">
                    <div className="relative w-1/2 h-[200px] lg:h-[300px]">
                      <Image
                        src={womenDpImgTwo}
                        alt="Right 1"
                        layout="fill"
                        objectFit="cover"
                        priority
                      />
                    </div>
                    <div className="relative w-1/2 h-[200px]  lg:h-[300px]">
                      <Image
                        src={womenDpImgTheree}
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

          {/* kids start dropdowen start*/}
          <div className="relative group   text-center cursor-pointer transition-all duration-200  border-orange-400 hover:border-[#91d36b]  text-white group">
            {/* Trigger */}
            <div className="relative group">
              {/* Trigger */}
              <h3 className="text-[15px] font-semibold text-gray-700 cursor-pointer">
                KID'S
              </h3>

              {/* Dropdown */}
              <div
                className={`absolute -left-19  transform -translate-x-1/2 z-[1000] px-[10px] w-[99vw] top-full py-2  rounded-sm mt-[7px] bg-white text-gray-400 shadow-lg
    duration-300 flex flex-col items-start 
    opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all`}
              >
                <div className="mx-auto w-full px-2 flex flex-col md:flex-row justify-between gap-6 items-start">
                  {/* Left image */}
                  <div className="w-full   md:w-1/4 shrink-0">
                    <div className="relative w-2/3 h-[300px] lg:h-[400px]">
                      <Image
                        src={kisDpImgOne}
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
                      <h4 className=" mb-2 text-left">BOY'S SET</h4>
                      {/* BOY'S set */}

                      <ul className="space-y-1">
                        <li className="text-left text-[12px]">
                          BOY'S PREMIUM PANJABI SET
                        </li>
                        <li className="text-left text-[12px]">
                          BOY'S KABLI SUIT
                        </li>
                      </ul>
                      <h4 className=" mb-2 text-left">BOY'S TOP</h4>
                      {/* BOY'S TOP */}
                      <ul className="space-y-1">
                        <li className="text-left text-[12px]">BOY'S PANJABI</li>
                        <li className="text-left text-[12px]">
                          BOY'S TWIN TOP
                        </li>
                        <li className="text-left text-[12px]">
                          BOY'S CASUAL SHIRT
                        </li>
                        <li className="text-left text-[12px]">BOY'S T-SHIRT</li>
                        <li className="text-left text-[12px]">BOY'S HENLEY</li>
                        <li className="text-left text-[12px]">BOY'S POLO</li>
                      </ul>
                    </div>
                    <div></div>
                    <div>
                      {/* girls sets */}
                      <h4 className=" mb-2 text-left">GIRL'S SET</h4>
                      <ul className="space-y-1">
                        <li className="text-left text-[12px]">
                          GIRL'S TOP WITH SKIRT
                        </li>
                        <li className="text-left text-[12px]">
                          GIRL'S TOP BOTTOM
                        </li>
                        <li className="text-left text-[12px]">
                          GIRL'S SALWAR SUIT
                        </li>
                        <li className="text-left text-[12px]">GIRL'S 2 PCS</li>
                      </ul>
                      {/* girls tops */}
                      <h4 className=" mb-2 text-left">GIRL'S SET</h4>
                      <ul className="space-y-1">
                        <li className="text-left text-[12px]">
                          GIRL'S T-SHIRT
                        </li>
                        <li className="text-left text-[12px]">
                          GIRL'S PARTY DRESS
                        </li>
                        <li className="text-left text-[12px]">GIRL'S KURTI</li>
                        <li className="text-left text-[12px]">GIRL'S TOPS</li>
                        <li className="text-left text-[12px]">GIRL'S FROCK</li>
                      </ul>
                    </div>
                  </div>

                  {/* Right image */}
                  <div className="w-full md:w-1/4 flex gap-3 shrink-0">
                    <div className="relative w-1/2 h-[200px] lg:h-[300px]">
                      <Image
                        src={kidDpImgTwo}
                        alt="Right 1"
                        layout="fill"
                        objectFit="cover"
                        priority
                      />
                    </div>
                    <div className="relative w-1/2 h-[200px]  lg:h-[300px]">
                      <Image
                        src={kidDpImgTheree}
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
          {/* kids dropdowen end */}

          {/* newborn dropwen start */}
          <div className="relative group   text-center cursor-pointer transition-all duration-200  border-orange-400 hover:border-[#91d36b]  text-white group">
            {/* Trigger */}
            <div className="relative group">
              {/* Trigger */}
              <h3 className="text-[15px] font-semibold text-gray-700 cursor-pointer">
                NEWBRON
              </h3>

              {/* Dropdown */}
              <div
                className={`absolute -left-35  transform -translate-x-1/2 z-[1000] px-[10px] w-[99vw] top-full py-2  rounded-sm mt-[7px] bg-white text-gray-400 shadow-lg
    duration-300 flex flex-col items-start 
    opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all`}
              >
                <div className="mx-auto w-full px-2 flex flex-col md:flex-row justify-between gap-6 items-start">
                  {/* Left image */}
                  <div className="w-full md:w-1/4 shrink-0">
                    <div className="relative w-2/3 h-[300px] lg:h-[400px]">
                      <Image
                        src={newbronDpImgOne}
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
                      <h4 className=" mb-2 text-left">NEWBORN BOY'S TOP</h4>
                      {/* NEWBORN BOY'S TOP */}
                      <ul className="space-y-1">
                        <li className="text-left text-[12px]">
                          NB BOY'S CASUAL SHIRT
                        </li>
                        <li className="text-left text-[12px]">NB BOY'S NIMA</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className=" mb-2 text-left">NEWBORN BOY'S BOTTOM</h4>
                      <ul className="space-y-1">
                        <li className="text-left text-[12px]">
                          NB BOY'S SHORT PANT
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className=" mb-2 text-left">NEWBORN GIRL'S SET</h4>
                      {/* NEWBORN GIRL'S SET */}
                      <ul className="space-y-1">
                        <li className="text-left text-[12px]">
                          NB GIRLS SALWAR SUIT
                        </li>
                        <li className="text-left text-[12px]">
                          NB GIRLS TOP BOTTOM
                        </li>
                      </ul>
                      <h4 className=" mb-2 text-left">NEWBORN GIRL'S TOP</h4>
                      {/* NEWBORN GIRL'S TOP */}
                      <ul className="space-y-1">
                        <li className="text-left text-[12px]">
                          NB GIRLS FROCK
                        </li>
                        <li className="text-left text-[12px]">
                          NB GIRLS PARTY DRESS
                        </li>
                        <li className="text-left text-[12px]">NB GIRLS NIMA</li>
                        <li className="text-left text-[12px]">
                          NB GIRLS T-SHIRT
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className=" mb-2 text-left">NEWBORN GIRL'S BOTTOM</h4>
                    </div>
                  </div>

                  {/* Right image */}
                  <div className="w-full md:w-1/4 flex gap-3 shrink-0">
                    <div className="relative w-1/2 h-[200px] lg:h-[300px]">
                      <Image
                        src={newbronDpImgTwo}
                        alt="Right 1"
                        layout="fill"
                        objectFit="cover"
                        priority
                      />
                    </div>
                    <div className="relative w-1/2 h-[200px] lg:h-[300px]">
                      <Image
                        src={newbronDpImgTheree}
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
          {/* newborn dropwen end */}

          {/* footware start */}
          <div className="relative group   text-center cursor-pointer transition-all duration-200  border-orange-400 hover:border-[#91d36b]  text-white group">
            {/* Trigger */}
            <div className="relative group">
              {/* Trigger */}
              <h3 className="text-[15px] font-semibold  text-gray-700 cursor-pointer">
                FOOTWEAR
              </h3>

              {/* Dropdown */}
              <div
                className={`absolute -left-59 transform -translate-x-1/2 z-[1000] px-[10px] w-[99vw] top-full py-2 rounded-sm mt-[7px] bg-white text-gray-400 shadow-lg
    duration-300 flex flex-col items-start 
    opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all`}
              >
                <div className="mx-auto w-full px-2 flex flex-col md:flex-row justify-between gap-6 items-start">
                  {/* Left image */}
                  <div className="w-full md:w-1/4 shrink-0">
                    <div className="relative w-2/3 h-[300px] lg:h-[400px]">
                      <Image
                        src={footwareDpImgOne}
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
                      <h4 className=" mb-2 text-left">MEN'S FOOTWEAR</h4>
                      <ul className="space-y-1">
                        <li className="text-left text-[12px]">
                          MEN'S HIGH ANKLE BOOT
                        </li>
                        <li className="text-left text-[12px]">
                          MEN'S HIGH ANKLE SNEAKER
                        </li>
                        <li className="text-left text-[12px]">
                          MEN'S CASUAL SHOE
                        </li>
                        <li className="text-left text-[12px]">MEN'S SNEAKER</li>
                        <li className="text-left text-[12px]">MEN'S SANDAL</li>
                        <li className="text-left text-[12px]">
                          MEN'S FORMAL SHOE
                        </li>
                        <li className="text-left text-[12px]">MEN'S LOAFER</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className=" mb-2 text-left">WOMEN'S FOOTWEAR</h4>
                      <ul className="space-y-1">
                        <li className="text-left text-[12px]">
                          BLOCK HEEL SLIDE SANDAL
                        </li>
                        <li className="text-left text-[12px]">
                          BALLERINA SHOE
                        </li>
                        <li className="text-left text-[12px]">WOMENS SHOE</li>
                        <li className="text-left text-[12px]">
                          WOMEN'S SANDAL
                        </li>
                        <li className="text-left text-[12px]">
                          WOMEN'S SNEAKER
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className=" mb-2 text-left">BOY'S FOOTWEAR</h4>
                      <ul className="space-y-1">
                        <li className="text-left text-[12px]">BOY'S SNEAKER</li>
                      </ul>
                      <h4 className=" mb-2 text-left">GIRL'S FOOTWEAR</h4>
                      <ul className="space-y-1">
                        <li className="text-left text-[12px]">
                          GIRL'S SNEAKER
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className=" mb-2 text-left">NEWBORN GIRL'S BOTTOM</h4>
                    </div>
                  </div>

                  {/* Right image */}
                  <div className="w-full md:w-1/4 flex gap-3 shrink-0">
                    <div className="relative w-1/2 h-[200px] lg:h-[300px]">
                      <Image
                        src={footwareDpImgTwo}
                        alt="Right 1"
                        layout="fill"
                        objectFit="cover"
                        priority
                      />
                    </div>
                    <div className="relative w-1/2 h-[200px] lg:h-[300px]">
                      <Image
                        src={footwareDpImgTheree}
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
          {/* footware start */}

          {/* ACCESSORIES start */}
          <div className="relative group">
            {/* Trigger */}
            <h3 className="text-[15px] font-semibold  text-gray-700 cursor-pointer">
              ACCESSORIES
            </h3>
            {/* Dropdown */}

            <div
              className={`absolute -left-85 transform -translate-x-1/2 z-[1000] px-[10px]  w-[99vw] top-full py-2 rounded-sm mt-[7px] bg-white text-gray-400 shadow-lg
    duration-300 flex flex-col items-start 
    opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all`}
            >
              <div className="mx-auto w-full px-2 flex flex-col md:flex-row justify-between gap-6 items-start">
                {/* Left image */}
                <div className="w-full md:w-1/4 shrink-0">
                  <div className="relative w-2/3 h-[300px] lg:h-[400px]">
                    <Image
                      src={accDpImgOne}
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
                    <h4 className=" mb-2 text-left">MEN'sS BAG</h4>
                    <ul className="space-y-1">
                      <li className="text-left text-[12px]">POUCH BAG</li>
                      <li className="text-left text-[12px]">
                        MEN'S LEPTOP BAG
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className=" mb-2 text-left">WOMEN'S BAG</h4>
                    <ul className="space-y-1">
                      <li className="text-left text-[12px]">PARTY BAG</li>
                      <li className="text-left text-[12px]">SHOLDER BAG</li>
                      <li className="text-left text-[12px]">HAND BAG</li>
                    </ul>
                  </div>
                </div>

                {/* Right images */}
                <div className="w-full md:w-1/4 flex gap-3 shrink-0">
                  <div className="relative w-1/2 h-[200px] lg:h-[300px]">
                    <Image
                      src={accDpImgTow}
                      alt="Right 1"
                      layout="fill"
                      objectFit="cover"
                      priority
                    />
                  </div>
                  <div className="relative w-1/2 h-[200px] lg:h-[300px]">
                    <Image
                      src={accDpImgTheree}
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
          {/*ACCESSORIES end */}
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
