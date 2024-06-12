import Categories from "components/Home/categories/Categories"
import MainSlider from "./MainSlider/MainSlider"


const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-5 sm:px-8">
            <MainSlider/>
            <Categories/>
        </div>
    )
}

export default Home