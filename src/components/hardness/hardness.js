import React from 'react';
import i18next from "i18next";

const Hardness = () => {
    return (
        <div className={"container"}>
            <h2 className={"text-center text-white p2 bg-dark bg-gradient text-uppercase"}>{i18next.t("13")}</h2>
            <div className={"container mt-5"}>
                <table
                    className={"table table-responsive table-bordered border-dark table-hover text-center"}>
                    <thead>
                    <tr className={"table-dark table-active text-white"}>
                        <th>№</th>
                        <th>{i18next.t("12")}</th>
                        <th>{i18next.t("11")}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>{i18next.t("1")}</td>
                        <td>11,2-23,5</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>{i18next.t("2")}</td>
                        <td>11,5-35,7</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>{i18next.t("3")}</td>
                        <td>9,0-18,0</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>{i18next.t("4")}</td>
                        <td>9,5-13,2</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>{i18next.t("5")}</td>
                        <td>8,4-10,5</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>{i18next.t("6")}</td>
                        <td>15,3-21,0</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>{i18next.t("7")}</td>
                        <td>10,8-17,5</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>{i18next.t("8")}</td>
                        <td>12,6-15,0</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>{i18next.t("9")}</td>
                        <td>11,0-13,0</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>{i18next.t("10")}</td>
                        <td>12,0-20,0</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Hardness;