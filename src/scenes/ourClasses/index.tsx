import { ClassType, SelectedPage } from '@/shared/types';
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import Class from './Class';

const classes: Array<ClassType> = [
    {
        name:"Weight Training Classes",
        description: "hdiueqw biuhiuwebc bjubc webcujw hhe dc jh hjd hjwq djh djhqw djh djd jhq dq dhjqw jh jqw jhq d jhqw dhjqvjqvbhjd qnbd qjhvdqhjw nbqw d  djhqw djhqw djhqw dqwjhjqw dhjjhweq chjwejh  cjh hj hjd dd jhd dwe dqwjhd qwhjd qwdq djh  qwjhdhjqw",
        image: image1,
    },
    {
        name:"Weight Training Classes",
        description: "hdiueqw biuhiuwebc bjubc webcujw hhe dc jh hjd hjwq djh djhqw djh djd jhq dq dhjqw jh jqw jhq d jhqw dhjqvjqvbhjd qnbd qjhvdqhjw nbqw d  djhqw djhqw djhqw dqwjhjqw dhjjhweq chjwejh  cjh hj hjd dd jhd dwe dqwjhd qwhjd qwdq djh  qwjhdhjqw",
        image: image2,
    },
    {
        name:"Weight Training Classes",
        description: "hdiueqw biuhiuwebc bjubc webcujw hhe dc jh hjd hjwq djh djhqw djh djd jhq dq dhjqw jh jqw jhq d jhqw dhjqvjqvbhjd qnbd qjhvdqhjw nbqw d  djhqw djhqw djhqw dqwjhjqw dhjjhweq chjwejh  cjh hj hjd dd jhd dwe dqwjhd qwhjd qwdq djh  qwjhdhjqw",
        image: image3,
    },
    {
        name:"Weight Training Classes",
        description: "hdiueqw biuhiuwebc bjubc webcujw hhe dc jh hjd hjwq djh djhqw djh djd jhq dq dhjqw jh jqw jhq d jhqw dhjqvjqvbhjd qnbd qjhvdqhjw nbqw d  djhqw djhqw djhqw dqwjhjqw dhjjhweq chjwejh  cjh hj hjd dd jhd dwe dqwjhd qwhjd qwdq djh  qwjhdhjqw",
        image: image4,
    },
    {
        name:"Weight Training Classes",
        description: "hdiueqw biuhiuwebc bjubc webcujw hhe dc jh hjd hjwq djh djhqw djh djd jhq dq dhjqw jh jqw jhq d jhqw dhjqvjqvbhjd qnbd qjhvdqhjw nbqw d  djhqw djhqw djhqw dqwjhjqw dhjjhweq chjwejh  cjh hj hjd dd jhd dwe dqwjhd qwhjd qwdq djh  qwjhdhjqw",
        image: image5,
    },
    {
        name:"Weight Training Classes",
        description: "hdiueqw biuhiuwebc bjubc webcujw hhe dc jh hjd hjwq djh djhqw djh djd jhq dq dhjqw jh jqw jhq d jhqw dhjqvjqvbhjd qnbd qjhvdqhjw nbqw d  djhqw djhqw djhqw dqwjhjqw dhjjhweq chjwejh  cjh hj hjd dd jhd dwe dqwjhd qwhjd qwdq djh  qwjhdhjqw",
        image: image6,
    },
   
]
type Props = {
    setSelectedPage: (value:SelectedPage)=>void
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
     <section id="ourclasses" className='w-full bg-primary-100 py-40'>
       <motion.div
       onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}
       >
        <motion.div className='mx-auto w-5/6'
         initial="hidden"
         whileInView="visible"
         viewport={{once:true, amount:0.5}}
         transition={{delay:0.2, duration:1}}
         variants={{
          hidden: {opacity: 0, x:-50},
          visible: {opacity: 1, x:0},
         }}
        >
            <div className='md:w-3/5'>
                <HText>
                    OUR CLASSES
                </HText>
                <p className='py-5'>
                    hdiueqw biuhiuwebc bjubc webcujw hhe dc jh hjd hjwq djh djhqw djh djd jhq d 
                    dq dhjqw jh jqw jhq d jhqw dhjqvjqvbhjd qnbd qjhvdqhjw nbqw d  djhqw djhqw djhqw 
                    dqwjhjqw dhjjhweq chjwejh  cjh hj hjd dd jhd dwe dqwjhd qwhjd qwdq djh  qwjhdhjqw 
                    djkqb cjk ejh c ce cjhwe c ewjh cje cjew cje ce ce c e e  chc wehj chjnwe hjewh
                    cjnhe cehj cjhweejhew e.
                </p>
            </div>

        </motion.div>
          <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
            <ul className='w-[2800px] whitespace-nowrap'>
                {classes.map((item: ClassType, index) => (
                  <Class
                  key = {`${item.name}-${index}`}
                  name = {item.name}
                  description = {item.description}
                  image = {item.image}
                  />
                ))}
            </ul>

          </div>
       </motion.div>
     </section>
  )
}

export default OurClasses