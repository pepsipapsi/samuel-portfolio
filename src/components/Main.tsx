import '../App.css'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import ProfileButton from './ProfileButton';

function Main() {
  return (
    <div id="main" className='bg-main'>
      <img
        className="w-full h-screen object-cover object-left opacity-50"
        src="https://i.pinimg.com/originals/14/74/17/14741719ee55741e8dd45eb0256ab52c.jpg"
        alt=""
      />
      <div className='w-full h-screen absolute top-0 left-0'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center'>
          <h1 className=" sm:text-5xl text-4xl font-bold text-gray-200">Samuel</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-200 ">
            I'm a
            <TypeAnimation
              sequence={[
                'Developer',
                2000,
                'Musician',
                2000,
                'Gamer',
                2000,
                () => {
                  console.log();
                },
              ]}
              wrapper='div'
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: '1em', paddingLeft: '0.3em',
              }}
            />
          </h2>

          <div className="flex justify-between pt-6 max-w-[250px] w-full">
            <a href="https://www.linkedin.com/in/samuel-gonzalez-ampuero-455936213/">
              <FaLinkedin className="cursor-pointer text-white" size={40} />
            </a>
            {/* <button  className='flex flex-col justify-center items-center'>
              <FaUser className="cursor-pointer text-white mb-2" size={40} />
              <p className='text-white p-1 font-medium font-sans '>Profil</p>
            </button> */}
            <ProfileButton />
            <a href="https://github.com/SpookTheProgrammer">
              <FaGithub className="cursor-pointer text-white" size={40} />
            </a>




          </div>
        </div>
      </div>
    </div>
  )
}

export default Main