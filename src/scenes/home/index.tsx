import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types"
import HomePageText from "@/assets/HomePageText.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value:SelectedPage)=>void;

};

const Home = ({setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
     <section
     id="home"
     className="gap-16 bg-gray-20 py-10 md:f-full md:pb-0"
     >
      {/* {image and main header} */}
      <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">

      {/* main header */}
        <motion.div 
           className="z-10 mt-32 md:basis-3/5"
           onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}
          
        >
           
         {/* heading */}
           <motion.div 
           className="md:-mt-20"
           initial="hidden"
           whileInView="visible"
           viewport={{once:true, amount:0.5}}
           transition={{delay:0.2, duration:1}}
           variants={{
            hidden: {opacity: 0, x:-50},
            visible: {opacity: 1, x:0},
           }}
           >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
              <img alt="home-page-text" src={HomePageText}></img>
              </div>
            </div>
           
           <p className="mt-8 text-sm">
            The best in town. Brilliant coaching staff for gaining and loosing weights... 
            Keep your nest journey with The Red Gym and Make your life full of Confidence and joy.
            Get your Dream Body Shape Now
           </p>
        </motion.div>

      {/* actions */}
      <div className="mt-8 flex items-center gap-8 md:justify-start">
        <ActionButton 
        setSelectedPage={setSelectedPage}>
          Join Now
        </ActionButton>
        <AnchorLink
         className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
         onClick={()=>setSelectedPage(SelectedPage.ContactUs)}
         href={`#${SelectedPage.ContactUs}`}
        >
         
         <p>Learn More</p>
        </AnchorLink>
      </div>
      </motion.div>

      {/* {image} */}
       <div className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end">
        <img alt="home-pageGraphic" src={HomePageGraphic}/>
       </div>
       </div>
       {/* sponsers */}
       {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img src={SponsorRedBull} alt="redbull-sponser" />
              <img src={SponsorForbes} alt="forbes-sponser" />
              <img src={SponsorFortune} alt="fortune-sponser" />
            </div>
          </div>
        </div>
       )}
     </section>
  )
}

export default Home;