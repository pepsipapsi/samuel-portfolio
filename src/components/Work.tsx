import WorkItem from './WorkItem'
// import SamuelProfile from '../assets/SamuelProfile.jpg'
// import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import '../App.css';
const data = [
    {
        year: 2021,
        title: 'Vg3 Elektriker - Butikkmedarbeider',
        duration: '2021 - 2022',
        details: 'I 2020 var det svært vanskelig å finne praksisplass som elektriker. Heldigvis fikk jeg tilbud til å fullføre VG3 Elektriker i Åssiden VGS. Teoriprøven besto jeg ikke den første gangen, men besto den andre gangen 22 november 2022. Samtidig så begynte jeg å jobbe i Rema 1000 og følte at jeg var mer uavhengig. Jeg fikk kyssesyken som tok 2 måneder av skoletiden min. Det føltes ikke bra å være sengeliggende i 2 måneder og samtidig miste verdifull kunnskap.'
    },
    {
        year: 2022,
        title: 'Rema 1000 & FagprøveV1',
        duration: '2022 - 2023',
        details: 'Jeg fortsatte å jobbe i Rema med tanken av å spare for lappen og kjøpe inn alle måleinstrumentene og verktøy jeg trengte til å ta fagprøven. Dagen kom, og jeg var ikke klar i det hele tatt for å ta prøven. Jeg strøk, men ga ikke opp og bestemte meg for å gjøre det bedre og studerte og prøvde å finne utplasseringssplass.'
    },
    {
        year: 2023,
        title: 'FaprøveV2',
        duration: '2023 - 2024',
        details: 'Neste innkalling av fagprøve kom, og jeg følte meg mer klar men mangla fortsatt erfaring. Jeg prøvde mitt beste, og skrev en planleggingsdel som jeg kan si er veldig stolt over. Men i siste dag, 10 minutter før vurderingen startet, så fant jeg ut at jeg hadde 2 feil i Tilknytningsskapet og Sikringsskapet som ikke tilfredsstilte EL-Sikkerheten og visste da at jeg ikke kunne bestå. Så nå prøver jeg å bli hjelpearbeider for å da tilfredsstille erfaringen jeg trenger for å ikke gjøre småfeil som kan medføre store skader hvis jeg hadde fått fagprøven.'
    },
]

function Work() {
    return (
        <div id="work" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 pb-0'>
            <h1 className='text-4xl font-bold text-center text-[#162a18] pb-16'>Jobb Historikk</h1>
            <h1 className='text-left font-bold text-[#162a18]'>
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
            {/* Picture of me */}
            {/* <div className="flex pt-20 items-center justify-center w-full">
                <div className="text-center">
                    <div className="mb-20 h-auto">
                        <img src={SamuelProfile} style={{ width: "18em" }} alt="Samuel" className="mx-auto" />
                    </div>
                </div>
            </div> */}
            <div className="relative inline-flex items-center justify-center w-full">
                <hr className="w-80 h-px my-8 bg-stone-200 border-0 dark:bg-stone-200" />
                <span className="absolute flex justify-between items-center bg-white text-stone-400 font-extralight sans mb-1 p-2">
                    Samuel Ismael Gonzalez Ampuero
                </span>
            </div>
        </div >
    )
}

export default Work;