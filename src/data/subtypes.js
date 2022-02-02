const subtypes = [
    {
        id: "species",
        list: [
            {
                id: "calvus",
                text: "Calvus (cal) je tvar cumulonimbu, kdy není viditelná žádná vláknitá struktura jeho horní vrstvy. Vrchol oblaku je však již zploštělý. Jedná se o jeden ze dvou tvarů cumulonimbu, opak capillatu.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/09/cumulonimbus-calvus-clouds.jpg",
            },
            {
                id: "capillatus",
                text: "Capillatus (cap) je tvar cumulonimbu, kdy v jeho horní vrstvě můžeme pozorovat vláknitou strukturu laminárního proudění. Cumulonimbus capillatus často tvoří srážky a bouřky. Jedná se o opak calvu.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/09/cumulonimbus-capillatus-cloud.jpg",
            },
            {
                id: "castellanus",
                text: "Castellanus (cas) je tvar oblaků, který obsahuje v jejich horní části kupovité výčnělky připomínající věže. Tyto výčnělky jsou často vyšší než jsou široké a jsou spojené společnou základnou. Tento tvar je dobře rozeznatelný při pohledu na oblak z boku. Tvar castellanus určujeme u cirru, cirrocumulu, altocumulu a stratocumulu.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/09/castellanus-cloud.jpg",
            },
            {
                id: "congestus",
                text: "Congestus (con) je tvar specifický pro cumulus. Cumulus označujeme congestem, když jeho výška přesahuje šířku. Jedná se o třetí fázi růstu cumulu. Při další konvekci congestu vzniká cumulonimbus.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/09/cumulus-congestus-cloud.jpg",
            },
            {
                id: "fibratus",
                text: "Fibratus (fib) je tvar cirru a cirrostratu. Oblak označujeme fibratem, vidíme-li u něj výraznou vláknitou strukturu.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/09/fibratus-cloud.jpg",
            },
            {
                id: "floccus",
                text: "Floccus (flo) je tvar oblaků, kdy každá jednotka oblaku má vzhled kupovitého obláčku. Spodní okraje takových oblaků bývají zpravidla potrhané a doprovázené virgou. Floccus přiřazujeme k cirru, cirrocumulu, altocumulu a stratocumulu.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/09/floccus-cloud-species.jpg",
            },
            {
                id: "fractus",
                text: "Fractus (fra) je tvar cumulu a stratocumulu. Oblak označujeme fractem, má-li tvar nepravidelných útržků s výrazně potrhaným vzhledem.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2019/03/cumulus-fractus-fluctus.jpg",
            },
            {
                id: "humilis",
                text: "Humilis (hum) je tvar cumulu. Jedná se o první fázi vertikálního vývoje cumulu, kdy je jeho šířka větší než výška.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/09/cumulus-humilis-clouds.jpg",
            },
            {
                id: "lenticularis",
                text: "Lenticularis (len) je tvar oblaků, kdy jeho jednotlivé jednotky mají tvar čočky nebo mandlí. Tato oblaka mají časo jasně rozeznatelné obrysy a mohou vytvořit irizaci. Většinou se tvoří díky orografie (známé jsou například fotogenické altocumuly lenticularis tvořené nad vrcholy symetrických hor), mohou se ale také tvořit nad povrchy bez výrazné orografie.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/09/lenticuarlis-cloud.jpg",
            },
            {
                id: "mediocris",
                text: "Mediocris (med) je tvar cumulu. Jedná se o druhou fázi vertikálního vývoje cumulu, kdy jeho šířka je přibližně stejná jako jeho výška.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/09/cumulus-mediocris-cloud.jpg",
            },
            {
                id: "nebulosus",
                text: "Nebulosus (neb) je tvar cirrostratu a stratu. Svým vzhledem je prakticky totožný s mlhou. Nemívá žádné značné detaily, jedná se spíše o jednolitou vrstvu.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/09/nebulosus-cloud-example.jpg",
            },
            {
                id: "spissatus",
                text: "Spissatus (spi) je tvar cirru, kdy jeho částice jsou více nahušťené a samotný oblak je tlustší. Cirrus spissatus má tmavší barvu oproti ostatním cirrům.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/09/cirrus-spissatus-cloud.jpg",
            },
            {
                id: "stratiformis",
                text: "Stratiformis (str) je tvar oblaků, který se vyznačuje tím, že je velmi horizontálně rozsáhlý. Můžeme ho určit u altocumulu, stratocumulu a občasně i cirrocumulu.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2019/03/cirrocumulus-undulatus-clouds.jpg",
            },
            {
                id: "uncinus",
                text: "Uncinus (unc) je tvar cirru podobný fibratu, ale je na konci zahnutý do tvaru háčku nebo tvoří na konci malé obláčky bez horních výčnělků.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/09/cirrus-uncinus-cloud.jpg",
            },
            {
                id: "volutus",
                text: "Volutus (vol) je tvar altocumulu a stratocumulu. Jedná se o dlouhý horizontální oblak ve tvaru válce rotujícího kolem horizontální osy. Volutus zpravidla nebývá spojený s ostatními oblaky.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/09/volutus-cloud.jpg",
            },
        ],
    },
    {
        id: "varietes",
        list: [],
    },
    {
        id: "features",
        list: [],
    },
    {
        id: "accessory",
        list: [],
    },
    {
        id: "other",
        list: [],
    },
];

export default subtypes;
