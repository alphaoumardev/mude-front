import Hero from "../main/Hero.jsx";
import Carousel from "../main/Carousel.jsx";
import Cta from "../main/Cta.jsx";
import Futured from "../main/Futured.jsx";
import MainCategory from "../main/MainCategory.jsx";
import ShopByCategory from "../main/ShopByCategory.jsx";
import Trendings from "../main/Trendings.jsx";

const Mude = ()=>
{
    return (
        <div>
            <Carousel/>
            <Hero/>

            <MainCategory/>
            <ShopByCategory/>
            <Futured/>
            {/*//TODO: Look up*/}
            <Trendings/>
            <Cta/>
        </div>

    )
}
export default Mude
