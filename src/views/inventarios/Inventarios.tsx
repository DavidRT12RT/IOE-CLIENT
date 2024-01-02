//Components
import { Finder } from "./Finder";
import { InvtResults } from "./InvtResults";
import { InvtInfo } from "./InvtInfo";

//Style CSS
import "../../assets/css/inventarios.css";

const Inventarios = () => {

    return (
        <section className="Inventarios w-full h-full p-4 font-roboto">
            <div className="LeftColumn">
                <Finder/>
                <InvtResults/>
            </div>
            <InvtInfo/>
        </section>
    );

}

export default Inventarios
