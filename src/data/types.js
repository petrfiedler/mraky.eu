const types = [
    {
        id: "cirrus",
        abbr: "Ci",
        definition:
            "Vzájemně oddělené oblaky v podobě bílých jemných vláken, bílých plošek nebo úzkých pruhů.",
        level: "high",
        img: "https://whatsthiscloud.com/wp-content/uploads/2018/07/cirrus-floccus-cirrus-uncinus-1040x585.jpg",
        article: [
            {
                type: "text",
                text: "Cirrus, v češtině řasa, je oblak vysokého patra. Je definován jako vzájemně oddělené oblaky v podobě bílých jemných vláken, bílých plošek nebo úzkých pruhů. Díky svému výskytu ve vysoké nadmořské výšce jsou tato oblaka tvořena téměř výhradně ledovými krystalky, které jsou velmi malé a řídké, což přispívá k průhlednosti většiny cirrů. Cirrus je obecně označován zkratkou Ci.",
            },
            {
                type: "image",
                src: "https://whatsthiscloud.com/wp-content/uploads/2019/03/cirrus-fibratus-floccus.jpg",
                alt: "Cirrus fibratus, Cirrus floccus",
            },
            {
                type: "text",
                text: "Cirrus má přirozeně vláknitý vzhled, díky tomu je poměrně dobře rozpoznatelný od ostatních druhů oblaků. Ne všechny cirry však mají vláknitý vzhled výrazný. Také často mívají hedvábný lesk. Cirry mohou být shluklé do sebe, potom oproti běžnému bílému zbarvení nabírají šedé (spissatus). Také mohou být zamotané (intortus). Dále se cirry vyskytují v mnoha dalších ruzných tvarech, dokonce mohou vytvořit i chomáčkovitý vzhled. V takových případech už je morfologická klasifikace obtížnější.",
            },
            {
                type: "image",
                src: "https://whatsthiscloud.com/wp-content/uploads/2018/07/cirrus-floccus-radiatus-1040x585.jpg",
                alt: "Cirrus floccus radiatus",
            },
            {
                type: "text",
                text: "Cirrus vzniká turbulencí při silné vertikální změně směru větru nebo konvekcí v nestabilních vrstvách atmosféry. Také může vznikat oddělením ledových krystalků při rozpadu cumulonimbu či jiných oblaků s rozsahem do vysoké výšky. Může se vytvořit z cirrocumulu nebo altocumulu, konkrétně z jejich zvláštnosti virga. Také se může vytvořit vypařováním tenčích částí cirrostratu.",
            },
            {
                type: "image",
                src: "https://whatsthiscloud.com/wp-content/uploads/2018/03/cirrus-uncinus-1040x585.jpg",
                alt: "Cirrus uncinus",
            },
            {
                type: "text",
                text: "Na cirru, stejně jako na cirrostratu, můžeme také pozorovat halové jevy. Ty jsou tvořeny pomocí hexagonálních krystalků ledu, které ohýbají dopadající sluneční paprsky. Vhodné podmínky mohou přispět k tvorbě bílých nebo barevných kruhů, oblouků a skvrn vizuálně okolo nebo v blízkosti Slunce či Měsíce. Běžné halové jevy jsou například velké halo, malé halo, cirkumzenitální oblouk, halový sloup nebo parhelický kruh. Na cirru se však téměř nikdy nevyskytuje celý halový kruh.",
            },
        ],
    },
    {
        id: "cirrocumulus",
        abbr: "Cc",
        definition:
            "Tenké, menší nebo větší skupiny nebo vrstvy bílých oblaků bez vlastního stínu, složené z velmi malých oblačných částí v podobě zrnek nebo vlnek apod.",
        level: "high",
        img: "https://whatsthiscloud.com/wp-content/uploads/2018/03/cirrocumulus-floccus-1040x585.jpg",
    },
    {
        id: "cirrostratus",
        abbr: "Cs",
        definition:
            "Průsvitný bělavý oblačný závoj vláknitého nebo hladkého vzhledu, který úplně, nebo částečně zakrývá oblohu a dává vznik halovým jevům.",
        level: "high",
        img: "https://whatsthiscloud.com/wp-content/uploads/2018/03/cirrostratus-fibratus-undulatus-halo-1040x585.jpg",
    },
    {
        id: "altocumulus",
        abbr: "Ac",
        definition:
            "Menší nebo větší skupiny nebo vrstvy oblaků barvy bílé či šedé, popř. bílé a šedé, které mají vlastní stíny.",
        level: "middle",
        img: "https://whatsthiscloud.com/wp-content/uploads/2018/03/altocumulus-stratiformis-undulatus-1040x585.jpg",
    },
    {
        id: "altostratus",
        abbr: "As",
        definition:
            "Šedavá a modravá oblačná plocha nebo vrstva s vláknitou nebo žebrovitou strukturou nebo i bez patrné struktury, která pokrývá úplně nebo částečně oblohu.",
        level: "middle",
        img: "https://whatsthiscloud.com/wp-content/uploads/2018/03/altostratus-translucidus-1-1040x585.jpg",
    },
    {
        id: "nimbostratus",
        abbr: "Ns",
        definition:
            "Šedá, často tmavá oblačná vrstva nebo plocha, která má vlivem vypadávání více méně trvalých dešťových nebo sněhových srážek matný rozplývavý vzhled.",
        level: "middle",
        img: "https://whatsthiscloud.com/wp-content/uploads/2019/03/nimbostratus-praecipitatio.jpg",
    },
    {
        id: "stratocumulus",
        abbr: "Sc",
        definition:
            "Bílé nebo šedobílé vrsvy nebo skupiny oblaků, které mají téměř vždy tmavá místa.",
        level: "low",
        img: "https://whatsthiscloud.com/wp-content/uploads/2019/03/stratocumulus-sunset.jpg",
    },
    {
        id: "stratus",
        abbr: "St",
        definition:
            "Šedá oblačná vrstva s dosti jednotvárnou základnou, z níž může vypadávat mrholení, popř. ledové jehličky nebo sněhová zrna.",
        level: "low",
        img: "https://whatsthiscloud.com/wp-content/uploads/2019/03/stratus-nebulosus1.jpg",
    },
    {
        id: "cumulus",
        abbr: "Cu",
        definition:
            "Osamocený oblak, obvykle hustý a s ostře ohraničenými obrysy, vyvíjející se směrem vzhůru ve tvaru kup, kupolí nebo věží.",
        level: "low",
        img: "https://whatsthiscloud.com/wp-content/uploads/2018/03/cumulus-2-1040x585.jpg",
    },
    {
        id: "cumulonimbus",
        abbr: "Cb",
        definition:
            "Mohutný a hustý oblak velkého vertikálního rozsahu v podobě hor nebo obrovských věží.",
        level: "low",
        img: "https://whatsthiscloud.com/wp-content/uploads/2018/03/cumulonimbus-capillatus-incus-1040x585.jpg",
    },
];

export default types;
