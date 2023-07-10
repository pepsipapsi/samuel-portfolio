import ProjectItem from './ProjectItem'
import NoImage from '../assets/No_Image_Available.jpg'

function Projects() {
    return (
        <div id="projects" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem culpa blanditiis assumenda! Magnam quod unde soluta vitae. Iure aspernatur maiores hic architecto repellendus. Delectus dicta porro eveniet voluptatum voluptate nam.</p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={NoImage} title='No Title'/>
                <ProjectItem img={NoImage} title='No Title'/>
                <ProjectItem img={NoImage} title='No Title'/>
                <ProjectItem img={NoImage} title='No Title'/>
            </div>
        </div>
    )
}

export default Projects