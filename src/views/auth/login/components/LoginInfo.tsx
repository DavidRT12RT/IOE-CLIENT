import { useEffect, useState } from "react";
import { clearInterval } from "timers";

//Images
import img1 from  "../assets/imgs/1.png";
import img2 from "../assets/imgs/2.png";
import img3 from "../assets/imgs/3.png";

export default function LoginInfo(){
    const [ tabActive,setTabActive ] = useState<number>(0);
    const images = [img1,img2,img3];
    const handleChangeActiveTab = (tab:number) => setTabActive(tab);

    // useEffect(() => {

    //     const intervalId = setInterval(() => {
    //         setTabActive((tab) => {
    //             if(tab >= 2) return 0
    //             return tab + 1;
    //         })
    //     },10000);
       
    //     //Limpiar el intervalo al desmontar un componente
    //     return () => clearInterval(intervalId);

    // },[]);

    const tabsContent = [
        {
            title:"Disenado para individuales",
            content:"Descubre la eficiencia y personalización en nuestro sistema diseñado especialmente para individuos."
        },
        {
            title: "Sistema personalizado",
            content: "Explora la eficiencia de nuestro sistema personalizado, diseñado específicamente para individuos."
        },
        {
            title: "Funcionalidades del Sistema",
            content: "Explora las potentes funcionalidades de nuestro sistema interno diseñado para optimizar la eficiencia y facilitar la gestión."
        },
    ];

    return (
        <section className="loginMessage transition-opacity duration-500">

            <div className="loginImageContainer">
                <img src={images[tabActive]}/>
                <div className="blackScreen"/>
                <div className="loginImageContent text-white ">
                    {/* <h1 className="text-5xl font-bold">{tabsContent[tabActive].title}</h1> */}
                    <h1 className="text-6xl">Get <br/>Everything<br/> You Want</h1>
                    {/* <p className="text-white text-sm">{tabsContent[tabActive].content}</p> */}
                    <p className="text-white text-sm">You can get everything you want if you work hard.</p>
                    <p className="text-white text-sm">trust the process, and stick to the plan.</p>
                    <div className="carrouselButtons">
                        <button 
                            onClick={() => handleChangeActiveTab(0)} 
                            className={tabActive === 0 ? "active" : ""}
                            type="button" 
                        />
                        <button 
                            onClick={() => handleChangeActiveTab(1)} 
                            className={tabActive === 1 ? "active" : ""}
                            type="button" 
                        />
                        <button 
                            onClick={() => handleChangeActiveTab(2)} 
                            className={tabActive === 2 ? "active" : ""}
                            type="button" 
                        />
                    </div>
                </div>
            </div>


        </section>
    );
}