import ProjectItem0 from './ProjectItem0'
import ProjectItem1 from './ProjectItem1'
// import ProjectItem2 from './ProjectItem2'
// import ProjectItem3 from './ProjectItem3'
// import NoImage from '../assets/No_Image_Available.jpg'
import nobimu from '../assets/NordiskBibelMuseumLogo2.png'
import SpotifyArtistProfile from '../assets/SpotifyArtistProfile.jpeg'

function Projects() {
    return (
        <div id="projects" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#162a18] pb-16'>Prosjekter jeg har jobbet med</h1>
            {/* <p className='text-center py-8'>I delen av nettsiden, er målet å vise mine ferdigheter og hvor allsidig jeg er.</p> */}
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem0 img={nobimu} title='Nordisk Bibelmusem'/>
                <ProjectItem1 img={SpotifyArtistProfile} title='Musikk'/>
                {/* <ProjectItem2 img={NoImage} title='No Title'/>
                <ProjectItem3 img={NoImage} title='No Title'/> */}
            </div>
        </div>
    )
}

export default Projects