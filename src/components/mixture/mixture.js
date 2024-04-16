import React from 'react';
import "./mixture.css"
import {getLanguage} from "../../helper/persistance-storege";

const Mixture = () => {
    const lang = getLanguage();

    return (
        <div className="container mixture">
            <div className="card">
                <div className="card-body">
                    {lang == 'ru' &&
                        <p className="card-text">Наиболее эффективным ингибитором для охлаждающих систем тепловозов
                            является смесь тринатрийфосфата (Na<sub>3</sub>PO<sub>4</sub>, 12H<sub>2</sub>O), нитрита
                            натрия (NaNO<sub>2</sub>) и каустической соды (NaOH).
                            <br/> Роль перечисленных реагентов заключается в следующем.
                            <br/>Каустическая сода (NaOH) создаёт щелочную среду и обеспечивает защиту металла от
                            кислородной коррозии.
                            <br/>Тринатрийфосфат (Na<sub>3</sub>PO<sub>4</sub>, 12H<sub>2</sub>O) образует на стали
                            малорастворимые плёнки метафосфата кальция, магния и железа. С накипеобразователями
                            тринатрийфосфат образует трудно растворимый мелкодисперсный шлам, который долго находится во
                            взвешенном состоянии.
                            <br/>Нитрит натрия NaNO<sub>2</sub> является замедлителем (ингибитором) коррозии. Защитные
                            свойства этот реагент проявляет при концентрации NaNO<sub>2</sub> выше 300 мг/л и значении
                            рН около 10. При рН ниже 6 нитрит натрия, наоборот, ускоряет коррозию стали.
                        </p>}
                    {lang == 'en' &&
                        <p className="card-text">The most effective inhibitor for diesel locomotive cooling systems is a
                            mixture of trisodium phosphate (Na<sub>3</sub>PO<sub>4</sub>, 12H<sub>2</sub>O), sodium
                            nitrite (NaNO<sub>2</sub>) and caustic soda
                            (NaOH).<br/>
                            The role of the listed reagents is as follows. Caustic soda (NaOH) creates an alkaline
                            environment and protects the metal from oxygen corrosion.<br/>
                            Trisodium phosphate (Na<sub>3</sub>PO<sub>4</sub>) forms poorly soluble
                            films of calcium, magnesium and iron metaphosphate on steel. With scale formers, trisodium
                            phosphate forms a poorly soluble finely dispersed sludge, which remains suspended for a long
                            time. <br/>
                            Sodium nitrite NaNO<sub>2</sub> is a corrosion retarder (inhibitor). This reagent
                            exhibits protective properties at a NaNO<sub>2</sub> concentration above 300 mg/l and a pH
                            value of
                            about 10. At a pH below 6, sodium nitrite, on the contrary, accelerates steel corrosion.
                        </p>}
                    {lang == 'uz' &&
                        <p className="card-text">Dizel lokomotiv sovutish tizimlari uchun eng samarali inhibitor
                            trinatriy fosfat (Na<sub>3</sub>PO<sub>4</sub>, 12H<sub>2</sub>O), natriy nitrit
                            (NaNO<sub>2</sub>) va kaustik soda (NaOH)
                            aralashmasidir.<br/>
                            Trinatriy fosfat (Na<sub>3</sub>PO<sub>4</sub>)- Trinatriy fosfat po'latda kaltsiy, magniy
                            va temir metafosfatning
                            yomon eriydigan plyonkalarini hosil qiladi.<br/>
                            Kaustik soda (NaOH)-yumshatilgan suv tarkibidagi kislorodni ishqoriy metalga biriktirib,
                            oksid qatlam hosil qiladi vas hu bilan birga metalni kislorodli korroziyadan saqlaydi.<br/>
                            Natriy nitrit (NaNO<sub>2</sub>)-korroziyani to'xtatuvchi (ingibitor) hisoblanadi. Ushbu
                            reagent NaNO<sub>2</sub> konsentratsiyasi 300 mg/l dan yuqori bo'lganida va pH qiymati
                            taxminan 10 bo'lganida himoya xususiyatlarini namoyon qiladi. 6 dan past pHda natriy nitrit,
                            aksincha, po'lat korroziyasini tezlashtiradi.
                        </p>}
                </div>
            </div>
        </div>
    );
};

export default Mixture;