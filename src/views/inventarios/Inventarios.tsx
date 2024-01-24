//Components
import { InvtFinder } from "./components/InvtFinder";
import { InvtResults } from "./components/InvtResults";
import { InvtInfo } from "./components/InvtInfo";

//Style CSS
import "./assets/style.css";

const Inventarios = () => {
    // Responsabilidad unica o encapsulamiento
    return (
        <section className="Inventarios w-full h-full p-4">
            <div className="LeftColumn">
                <InvtFinder/>
                <InvtResults/>
            </div>
            <InvtInfo/>
        </section>
    );

}

export default Inventarios
