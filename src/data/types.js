const types = [
    {
        id: "cirrus",
        abbr: "Ci",
        definition:
            "Vzájemně oddělené oblaky v podobě bílých jemných vláken, bílých plošek nebo úzkých pruhů.",
        level: "high",
        img: "https://whatsthiscloud.com/wp-content/uploads/2018/07/cirrus-floccus-cirrus-uncinus-1040x585.jpg",
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
