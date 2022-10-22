const guides = {
    "en":{
        distance:"Distance",
        radius:"Radius",
        surfaceArea:"Surface Area",
        mass:"Mass",
        density:"Density",
        age:"Planet's Age",
        myAge: (plnt) => (`my age on the planet ${plnt}`)
    },
    "fr":{
        distance:"La Distance",
        radius:"Le Rayon",
        surfaceArea:"La Superficie",
        mass:"La Mass",
        density:"La Densité",
        age:"L'âge De La Planète",
        myAge: (plnt) => (`mon âge sur la planète ${plnt}`)
    },
    "ar":{
        distance:"البعد",
        radius:"الشعاع",
        surfaceArea:"المساحة",
        mass:"الكتلة",
        density:"الكثافة",
        age:"عمر الكوكب",
        myAge: (plnt) => (`عمري على كوكب ${plnt}`)
    }
}

export default guides;