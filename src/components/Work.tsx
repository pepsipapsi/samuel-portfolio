import WorkItem from './WorkItem'

const data = [
    {
        year: 2021,
        title: 'Drift Tekniker',
        duration: '2021 - 2021 (1 måned sommerjobb)',
        details: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid'
    },
    {
        year: 2021,
        title: '3D modellering og Musikkprodusent',
        duration: '2021 - 2022',
        details: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid'
    },
    {
        year: 2022,
        title: 'Butikkmedarbeider',
        duration: '2022 - 2023',
        details: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid'
    },
]

function Work() {
    return (
        <div id="work" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-left font-bold text-[#001b5e]'>
                {data.map((item, index) => (
                    <WorkItem
                        key={index}
                        year={item.year}
                        title={item.title}
                        duration={item.duration}
                        details={item.details}
                    />
                ))}
            </h1>
        </div>
    )
}

export default Work