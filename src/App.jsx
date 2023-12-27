import './App.css'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import nftResim from "./assets/images/nft.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



function App() {

  return (
    <>
      

<nav className="bg-white border-gray-200 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://i.seadn.io/gae/XDQkXcoDpou8oi0vHkTfdAdz_M8iYAxlH_oqtbv2G6UQbyDRvnZ1CgK4nFL1WDSmuIgJ3JF5Kb_-z1MJpcNk5jfu-nXDdZhwL7eHJJI?auto=format&dpr=1&w=256" className="h-10" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">Kenan NFT Project</span>
    </a>
   
  </div>



  <ul className="flex justify-center mt-5 space-x-5">


  <li>
        <a target='#blank' href="https://www.instagram.com/knn54nft/" className="text-gray-500 hover:text-gray-900 ">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"></path>
            </svg>
        </a>
    </li>

    <li>
        <a target='#blank' href="https://twitter.com/knn54nft" className="text-gray-500 hover:text-gray-900 ">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                </path>
            </svg>
        </a>
    </li>

    </ul>



</nav>

<Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
       <a target='#blank' href="https://www.instagram.com/p/Cc71jCgNaXP/?img_index=1">
       <img className='w-full h-[700px] object-contain ' src="https://pbs.twimg.com/media/FRiYyc5WQAAwy_P?format=jpg&name=large" alt="" />
       </a>
      </SwiperSlide>
      <SwiperSlide>
        <a target='#blank' href="https://www.instagram.com/stories/highlights/18006945298410859/">
        <img className='w-full h-[700px] object-contain ' src={nftResim} alt="" />
        </a>
      </SwiperSlide>
    </Swiper>

<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  <a target='#blank' href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/92311728661594135536461639290201554454963101593960875419654439864932916789249">
  <div>
        <img className="h-auto max-w-full rounded-lg" src="https://i.seadn.io/gae/tG-JHFg_8S_yvvzsNPVlHuX-grPjJO2hMnSNE33HQ8OYj7wMBN3OzPVVcNs0z4OXmGIL1f_9ru7exxzZhW20nydnfTOSDJTTGEPx6g?auto=format&dpr=1&w=1000" alt="" />
        <h1 className='text-center text-2xl bg-black text-white'>Kenan Sofuoglu Fan Art #1</h1>
    </div>
  </a>

  <a target='#blank' href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/92311728661594135536461639290201554454963101593960875419654439862733893533697">
  <div>
        <img className="h-auto max-w-full rounded-lg" src="https://i.seadn.io/gae/5_TRVf3vnI3IGVqsIU29_FCxMIphx1rydyptfgQ3iGTYdPT2zPsy_Xz-QUBzhRGmNQ40D4h4N0mheL7dIk_DMH5zmhfMRCNfE0eO?auto=format&dpr=1&w=1000" alt="" />
        <h1 className='text-center text-2xl bg-black text-white'>Kenan Sofuoglu Fan Art #2</h1>
    </div>
  </a>

  <a target='#blank' href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/92311728661594135536461639290201554454963101593960875419654439863833405161473">
  <div>
        <img className="h-auto max-w-full rounded-lg" src="https://i.seadn.io/gae/gPsov7Td0N0OiwaktPVt_MuONHDP9-DQ-QQMomaBalDfAdEKq4tMUstIc8OKLUqwVUj09D5HCFN8k1TvUbPTo-oRToEXUQOD5vufr6Q?auto=format&dpr=1&w=1000" alt="" />
        <h1 className='text-center text-2xl bg-black text-white'>Kenan Sofuoglu Fan Art #3</h1>
    </div>
  </a>

  <a target='#blank' href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/92311728661594135536461639290201554454963101593960875419654439864932916789249">
  <div>
        <img className="h-auto max-w-full rounded-lg" src="https://i.seadn.io/gae/kqIgtnnRSvId-sJAVpEnmgjVnthagjZCQ6emo_296xfFvWLRIrIYhBRPwf_RyGDLyWIbtahYQcesreCZdcEHtuVhUDbo77UzmwICVg?auto=format&dpr=1&w=1000" alt="" />
        <h1 className='text-center text-2xl bg-black text-white'>Kenan Sofuoglu Fan Art #4</h1>
    </div>
  </a>
  
  <a target='#blank' href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/92311728661594135536461639290201554454963101593960875419654439866032428417025">
  <div>
        <img className="h-auto max-w-full rounded-lg" src="https://i.seadn.io/gae/ADT1XRfaDl06tZQHe9F8g4BRwsfI3rUaxy1SZU2YCwF3eIhzlAzWJVm7ESoLwBiPyiA5ZJmXGGFm28r7aPaVhqxMzhmEwfOPy1px?auto=format&dpr=1&w=1000" alt="" />
        <h1 className='text-center text-2xl bg-black text-white'>Kenan Sofuoglu Fan Art #5</h1>
    </div>
  </a>

  <a target='#blank' href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/92311728661594135536461639290201554454963101593960875419654439867131940044801">
  <div>
        <img className="h-auto max-w-full rounded-lg" src="https://i.seadn.io/gae/by1-jcRT1LuEuSftFnf_EkMEdb4lIHfa5SprVePo2CYPIewfxf67nhh8WG96anc7Twoh92VADuA7GhulN_j9eI-N3UhpQDNZcU-tww?auto=format&dpr=1&w=1000" alt="" />
        <h1 className='text-center text-2xl bg-black text-white'>Kenan Sofuoglu Fan Art #6</h1>
    </div>
  </a>
  
  <a target='#blank' href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/92311728661594135536461639290201554454963101593960875419654439868231451672577">
  <div>
        <img className="h-auto max-w-full rounded-lg" src="https://i.seadn.io/gae/V2kPH8uVK5J8GNm2ZWpnUPJYSnSX3dEWwrPuEZBcvMVdfH30KehLHrW1tWArLh-xmboOs_eDnqXjfvrEjU-x2hOBNgsBwlWqFbvBvw?auto=format&dpr=1&w=1000" alt="" />
        <h1 className='text-center text-2xl bg-black text-white'>Kenan Sofuoglu Fan Art #7</h1>
    </div>
  </a>

  <a target='#blank' href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/92311728661594135536461639290201554454963101593960875419654439869330963300353">
  <div>
        <img className="h-auto max-w-full rounded-lg" src="https://i.seadn.io/gae/v4S8u9RC5KLRdTgQJE0yXw-HJbDNrxHRTnt3W06TLhD21cYGeUcCWLOSwvOXLSWbLDHCkj2ar71DO0fJVRPRVv2qYejfBa90j6hMfA?auto=format&dpr=1&w=1000" alt="" />
        <h1 className='text-center text-2xl bg-black text-white'>Kenan Sofuoglu Fan Art #8</h1>
    </div>
  </a>

  <a target='#blank' href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/92311728661594135536461639290201554454963101593960875419654439870430474928129">
  <div>
        <img className="h-auto max-w-full rounded-lg" src="https://i.seadn.io/gae/-fDbkwso0LOoLfWnp33KKlzmVxIImCYXfCaP98UbHnPN-sL4DrZcJMI_QdNQonqlfRD6RW_47O-Wwab28Gk7jvET8ZlfgVIal9FV?auto=format&dpr=1&w=1000" alt="" />
        <h1 className='text-center text-2xl bg-black text-white'>Kenan Sofuoglu Fan Art #9</h1>
    </div>
  </a>

  <a target='#blank' href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/92311728661594135536461639290201554454963101593960875419654439871529986555905">
  <div>
        <img className="h-auto max-w-full rounded-lg" src="https://i.seadn.io/gae/5qY0Mnd9iFadqhKZmIEreIqHS-vyhn3Z-pfstxAtjixw2E_ZzogSrqTcHkJUl-aDZbNE2RaOyqMMZpYnB08lNY_PLHgAfcqQF0uoZA?auto=format&dpr=1&w=1000" alt="" />
        <h1 className='text-center text-2xl bg-black text-white'>Kenan Sofuoglu Fan Art #10</h1>
    </div>
  </a>

  <a target='#blank' href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/92311728661594135536461639290201554454963101593960875419654439873729009811457">
  <div>
        <img className="h-auto max-w-full rounded-lg" src="https://i.seadn.io/gae/DyP9tHyWD_NHKdc5xgEO6HExAkW6p9eY2_iyCxckWhG4btzDlP1J7ZlBpZEQDv4JnEUNeyOm96DyWQJt8I4yoe-VOPpuUnH_uPgjvQ?auto=format&dpr=1&w=1000" alt="" />
        <h1 className='text-center text-2xl bg-black text-white'>Kenan Sofuoglu Fan Art #11</h1>
    </div>
  </a>


  <a target='#blank' href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/92311728661594135536461639290201554454963101593960875419654439861634381905921">
  <div>
        <img className="h-auto max-w-full rounded-lg" src="https://i.seadn.io/gae/QA1dsmgU0-ibKnce8Vd5qqvDwS1dxJO4sljCM4J6b0C-GvsLAzidrkrJ_XO-mUwHkPOmghBi8Lp0jLuv-nNxTua0OYwo0S1lkOKu8A?auto=format&dpr=1&w=1000" alt="" />
        <h1 className='text-center text-2xl bg-black text-white'>Kenan Sofuoglu</h1>
    </div>
  </a>






  
</div>



    </>
  )
}

export default App
