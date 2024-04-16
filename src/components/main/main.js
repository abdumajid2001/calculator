import React, {useEffect, useState} from 'react';
import './main.css';
import Input from "../../ui/input";
import Select from "../../ui/select";
import i18next from "i18next";

const Main = () => {
    const [value, setValue] = useState(1000)
    const [valueH1, setValueH1] = useState(0)
    const [valueH2, setValueH2] = useState(0)
    const [valueP1, setValueP1] = useState(0)
    const [valueP2, setValueP2] = useState(0)
    const [valueN1, setValueN1] = useState(0)
    const [valueN2, setValueN2] = useState(0)
    const [unitWater, setUnitWater] = useState(1)
    const [unitHydroxide, setUnitHydroxide] = useState(1)
    const [unitPhosphate, setUnitPhosphate] = useState(1)
    const [unitNitrite, setUnitNitrite] = useState(1)

    useEffect(() => {
        setValueH1(value * unitWater * 0.00015 / unitHydroxide)
        setValueH2(value * unitWater * 0.0001 / unitHydroxide)
        setValueP1(value * unitWater * 0.00025 / unitPhosphate)
        setValueP2(value * unitWater * 0.0002 / unitPhosphate)
        setValueN1(value * unitWater * 0.003 / unitNitrite)
        setValueN2(value * unitWater * 0.0025 / unitNitrite)
    }, [value, unitWater, unitHydroxide, unitPhosphate, unitNitrite]);

    return (
        <div className="main">
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
                            <div className="input-box">
                                <div className="input">
                                    <Input label={i18next.t("hydroxide")}
                                           state={valueH2}
                                           type={'number'}
                                           disabled={true}/>
                                    <span>{i18next.t("from")}</span>
                                </div>
                                <div className="input">
                                    <Input
                                        label={i18next.t("hydroxide")}
                                        state={valueH1}
                                        type={'number'}
                                        disabled={true}/>
                                    <span>{i18next.t("to")}</span>
                                </div>
                            </div>
                            <Select select={unitHydroxide} setSelect={setUnitHydroxide}/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-11">
                        <div className="box">
                            <div className="input-box">
                                <div className="input">
                                    <Input
                                        label={i18next.t("phosphate")}
                                        state={valueP2}
                                        type={'number'}
                                        disabled={true}/>
                                    <span>{i18next.t("from")}</span>

                                </div>
                                <div className="input">
                                    <Input
                                        label={i18next.t("phosphate")}
                                        state={valueP1}
                                        type={'number'}
                                        disabled={true}/>
                                    <span>{i18next.t("to")}</span>
                                </div>
                            </div>
                            <Select select={unitPhosphate} setSelect={setUnitPhosphate}/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-11">
                        <div className="box">
                            <div className="input-box">
                                <div className="input">
                                    <Input label={i18next.t("nitrite")}
                                           state={valueN2}
                                           type={'number'}
                                           disabled={true}/>
                                    <span>{i18next.t("from")}</span>
                                </div>
                                <div className="input">
                                    <Input label={i18next.t("nitrite")}
                                           state={valueN1}
                                           type={'number'}
                                           disabled={true}/>
                                    <span>{i18next.t("to")}</span>
                                </div>
                            </div>
                            <Select select={unitNitrite} setSelect={setUnitNitrite}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;