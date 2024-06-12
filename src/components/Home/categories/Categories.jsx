import HeaderBlock from 'components/HeadersBlock/HeaderBlock'
import BlueButtonText from 'components/ui/buttons/BlueButtonText';
import Physics from './icon/PhysicsIcon';
import MarketingIcon from './icon/MarketingIcon';
import DevelopmentIcon from './icon/DevelopmentIcon';
import Astrology from './icon/AstrologyIcon';


const data = [
    {
        title:"Astrology",
        iconComponent:<Astrology/>,
        text:"11 Courses"
    },
    {
        title:"Development",
        iconComponent:<DevelopmentIcon/>,
        text:"12 Courses"
    },
    {
        title:"Marketing",
        iconComponent:<MarketingIcon/>,
        text:"12 Courses"
    },
    {
        title:"Physics",
        iconComponent:<Physics/>,
        text:"14 Courses"
    }
]




const Categories = () => {
    return (
        <div>
            <HeaderBlock title={"Top Categories"}>
                <BlueButtonText text={"See All"}/>
            </HeaderBlock>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-9">
                {
                    data.map((item) => {
                        return (
                            <Categoryitem key={item.iconComponent} {...item}>
                                {item.iconComponent}
                            </Categoryitem>
                        )
                    })
                }
            </div>
        </div>
    )
}

const Categoryitem = ({title, text, children}) => {
    return (
        <div className="p-6 bg-white flex flex-col rounded-2xl gap-2.5 justify-center items-center border border-solid border-grey-border ">
            <div className="w-[70px]  sm:w-[100px] h-[70px] sm:h-[100px] flex justify-center items-center  rounded-full bg-primary-100">
                {children}
            </div>
            <h3 className='font-semibold leading-normal text-base sm:text-xl '>{title}</h3>
            <p className='text-sm sm:text-base leading-relaxed text-grey-700 font-normal'>{text}</p>
        </div>
    )
}

export default Categories