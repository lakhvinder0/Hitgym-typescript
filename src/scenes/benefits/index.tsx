import HText from "@/shared/HText";
import { SelectedPage,BenefitType } from "@/shared/types"
import { HomeModernIcon,UserGroupIcon,AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType>= [
  {
    icon: <HomeModernIcon className="h-6 w-6"/>,
    title: "State of the Art Facilities",
    description: "hi how are you uighkuhaskud bjkbkjwe bjgbjkcbas vjhgvjhdvmdb bjuqwgdj bkjgjudb"
  },
  {
    icon: <UserGroupIcon className="h-6 w-6"/>,
    title: "100's of Diverse Classes",
    description: "hi how are you uighkuhaskud bjkbkjwe bjgbjkcbas vjhgvjhdvmdb bjuqwgdj bkjgjudb"
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6"/>,
    title: "Expert and Approve Trainers",
    description: "hi how are you uighkuhaskud bjkbkjwe bjgbjkcbas vjhgvjhdvmdb bjuqwgdj bkjgjudb"
  }
];

const container = {
  hidden: {},
  visible: {
    transition: { straggerChildren: 0.3 }
  }
}

type Props = {
    setSelectedPage:(value:SelectedPage)=>void;
}

const Benefits = ({setSelectedPage}: Props) => {

  
  return (
    <section
      id="benefits"
      className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
         onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}>
       
           {/* header section */}

           <motion.div className="md:my-5 md:w-3/5"
           initial="hidden"
           whileInView="visible"
           viewport={{once:true, amount:0.5}}
           transition={{duration:1}}
           variants={{
            hidden: {opacity: 0, x:-50},
            visible: {opacity: 1, x:0},
           }}
           >
            
            <HText>MORE THAN JUST GYM.</HText>
              <p className="my-5 text-sm">
               We provide world class fitness equipment, trainers and classes to get you
               to your ultimate fitness goals with ease. We provide true care into 
               each and every member.
              </p>
           </motion.div>

           {/* {benefits section} */}
           <motion.div className="md:flex items-center justify-between gap-8 mt-5"
           initial="hidden"
           whileInView="visible"
           viewport={{ once:true , amount: 0.5 }}
           variants={container}>
                {
                  benefits.map((benefit: BenefitType)=>
                  (
                    <Benefit
                    key= {benefit.title}
                    icon= {benefit.icon}
                    title= {benefit.title}
                    description= {benefit.description}
                    setSelectedPage= {setSelectedPage}
                    />
                  ))
                }
           </motion.div>
         </motion.div>

         {/* graphics and description */}
         <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* graphics */}
          <img className="mx-auto"
          alt="benefits-page-graphic"
          src={BenefitsPageGraphic}/>

          {/* description */}
          <div>
            {/* title */}
            <motion.div className="relative"
             
             initial="hidden"
             whileInView="visible"
             viewport={{once:true, amount:0.5}}
             transition={{duration:1}}
             variants={{
              hidden: {opacity: 0, x:-50},
              visible: {opacity: 1, x:0},
             }}>
              <div className="before:absolute before:-top-20  before:-left-20 before:z-[1] before:content-abstractwaves">
                <div>
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">
                      FIT
                    </span>
                  </HText>
                </div>

              </div>

            </motion.div>

            {/* description */}
            <motion.div
            
             initial="hidden"
             whileInView="visible"
             viewport={{once:true, amount:0.5}}
             transition={{ delay: 0.2 , duration:1}}
             variants={{
              hidden: {opacity: 0, x:-50},
              visible: {opacity: 1, x:0},
             }}>
              <p className="my-5">bcjbciu cbjbciubcj cbhbh c cjh cjh chjbcujhwe cjcqwbhcbjh jh cjh cjh cjh 
                cuyhbchjebch c ejhc ejh cjhwe cjh chjwe cjhwe bccbeu
                cneenc cbej  c cje cj jeeeeeeeeeeeeeee c jjjjjjjjjjjjj  ejc ej nnjeeeeeeeeeeeee cuyhbchjebch 
                bde bhebc  eh ch eh che c  ceh he j cej  cc  hcjeeeeeeeee c  cje je j jebjbeb bebfbefb
                 ejh jhe cj cje  cejh cjhe jhe je cje kjd kewkwe kjewckj kc 
              </p>
              <p className="mb-5">
              bcjbciu cbjbciubcj cbhbh c cjh cjh chjbcujhwe cjcqwbhcbjh jh cjh cjh cjh 
                cuyhbchjebch c ejhc ejh cjhwe cjh chjwe cjhwe bccbeu
                cneenc cbej  c cje cj jeeeeeeeeeeeeeee c jjjjjjjjjjjjj  ejc ej nnjeeeeeeeeeeeee cuyhbchjebch 
                bde bhebc  eh ch eh che c  ceh he j cej  cc  hcjeeeeeeeee c  cje je j jebjbeb bebfbefb
                 ejh jhe cj cje  cejh cjhe jhe je cje kjd kewkwe kjewckj kc 
              </p>
            </motion.div>

            {/* button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                   Join Now
                </ActionButton>

              </div>

            </div>
          </div>
         </div>

    </section>
  )
}

export default Benefits