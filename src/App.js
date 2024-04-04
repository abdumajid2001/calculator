import './App.css';
import {useEffect, useState} from "react";
import Input from "./ui/input";
import Select from "./ui/select";
import i18next from "i18next";
import {getLanguage, setLanguage} from "./helper/persistance-storege";

function App() {
    const lang = getLanguage('lang')
    const [value, setValue] = useState(1000)
    const [valueH, setValueH] = useState(0)
    const [valueP, setValueP] = useState(0)
    const [valueN, setValueN] = useState(0)
    const [unitWater, setUnitWater] = useState(1)
    const [unitHydroxide, setUnitHydroxide] = useState(1)
    const [unitPhosphate, setUnitPhosphate] = useState(1)
    const [unitNitrite, setUnitNitrite] = useState(1)

    useEffect(() => {
        setValueH(value * unitWater * 0.00015 / unitHydroxide)
        setValueP(value * unitWater * 0.00025 / unitPhosphate)
        setValueN(value * unitWater * 0.003 / unitNitrite)
    }, [value, unitWater, unitHydroxide, unitPhosphate, unitNitrite]);

    const changeLanguage = (e) => {
        setLanguage(e.target.value)
        window.location.reload();
    };

    return (
        <div className="content">
            <div className="lang-box">
                <select onChange={changeLanguage} value={lang} className={"form-select"}>
                    <option value="en">En</option>
                    <option value="ru">Ru</option>
                    <option value="uz">Uz</option>
                </select>
            </div>
            <h1 className={"mb-5"}>{i18next.t("header")}</h1>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-6 col-11">
                        <div className="box">
                            <Input label={i18next.t("water")} state={value} setState={setValue} type={'number'}/>
                            <Select select={unitWater} setSelect={setUnitWater}/>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-3 col-md-6 col-11">
                        <div className="box">
                            <Input label={i18next.t("hydroxide")} state={valueH} setState={setValueH} type={'number'}
                                   disabled={true}/>
                            <Select select={unitHydroxide} setSelect={setUnitHydroxide}/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-11">
                        <div className="box">
                            <Input label={i18next.t("phosphate")} state={valueP} setState={setValueP} type={'number'}
                                   disabled={true}/>
                            <Select select={unitPhosphate} setSelect={setUnitPhosphate}/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-11">
                        <div className="box">
                            <Input label={i18next.t("nitrite")} state={valueN} setState={setValueN} type={'number'}
                                   disabled={true}/>
                            <Select select={unitNitrite} setSelect={setUnitNitrite}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
