import hitgymlogo1 from '@/assets/hitgymlogo1.png'

const Footer = () => {
  return (
    <footer className='bg-primary-100 py-16'>
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img alt='logo' src={hitgymlogo1}/>
                <p className='my-5'> The best in town. Brilliant coaching staff for gaining and loosing weights... 
            Keep your nest journey with The Red Gym and Make your life full of Confidence and joy.
            Get your Dream Body Shape Now</p>
            <p>© Hitgym All Rights Reserved.</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'> Links </h4>
                <p className='my-5'> hello mister singh</p>
                <p className='my-5'> anoother link </p>
                <p>random text </p>

            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'> Contact Us </h4>
                <p className='my-5'> Random text again something u want to write.</p>
                <p>(333)345-6789</p>
               

            </div>

            <div>

            </div>

        </div>

    </footer>
  )
}

export default Footer;