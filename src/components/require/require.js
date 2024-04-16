import React from 'react';
import './require.css'
import i18next from "i18next";

const Require = () => {
    return (
        <div className={"container"}>
            <h2 className={"text-center text-white p2 bg-dark bg-gradient text-uppercase"}>{i18next.t("14")}</h2>

            <div className={"container mt-5"}>
                <table
                    className={"table table-responsive table-bordered border-dark table-hover text-center"}>
                    <thead>
                    <tr className={"table-dark table-active text-uppercase text-white"}>
                        <th>{i18next.t("15")}</th>
                        <th>{i18next.t("16")}</th>
                        <th>{i18next.t("17")}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{i18next.t("18")}</td>
                        <td>0.2</td>
                        <td>0.2</td>
                    </tr>
                    <tr>
                        <td>{i18next.t("19")}</td>
                        <td>30</td>
                        <td>30</td>
                    </tr>
                    <tr>
                        <td>{i18next.t("20")}</td>
                        <td>1,5-2,5 <br/>
                            10,8-11,2
                        </td>
                        <td>{i18next.t("25")} <br/>
                            7-8
                        </td>
                    </tr>
                    <tr>
                        <td>{i18next.t("21")}, P<sub>2</sub>O<sub>5</sub>, {i18next.t("22")}</td>
                        <td>15-25</td>
                        <td>15-25</td>
                    </tr>
                    <tr>
                        <td>{i18next.t("23")}, CrO<sub>3</sub>, {i18next.t("22")}</td>
                        <td>{i18next.t("25")}</td>
                        <td>800-1000</td>
                    </tr>
                    <tr>
                        <td>{i18next.t("24")}, NaNO<sub>2</sub>, {i18next.t("22")}</td>
                        <td>2500-3000</td>
                        <td>{i18next.t("25")}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Require;