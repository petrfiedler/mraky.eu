const subtypes = [
    {
        id: "species",
        idCZ: "tvary",
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
        idCZ: "odrudy",
        list: [
            {
                id: "duplicatus",
                text: "Duplicatus (du) je odrůda oblaků, kdy se jednotlivé části oblaku nacházejí na různých vertikálních úrovních. Duplicatus přiřazujeme oblakům cirrocumulus, cirrus, altocumulus, altostratus a stratocumulus.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/09/duplicatus-cloud-example.jpg",
            },
            {
                id: "intortus",
                text: "Intortus (in) je odrůda cirru, kdy jsou jeho vlákna nepravidelně zakřivená a navzájem proplétají.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/09/intortus-cloud-example.jpg",
            },
            {
                id: "lacunosus",
                text: "Lacunosus (la) je odrůda oblaků, která se vyznačuje tím, že oblak, obvykle poměrně tenký, obsahuje nepravidelně rozložené díry. Často mají ostře zakřivené okraje. Lacunosus může připomínat síť nebo plástev. Lacunosus můžeme pozorovat u cirrocumulu, altocumulu nebo stratocumulu.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2019/03/altocumulus-lacunosus.jpg",
            },
            {
                id: "opacus",
                text: "Opacus (op) je odrůda oblaků, kdy je vrstva oblaku tak hustá, že přes ní nejdou rozeznat obrysy Slunce. Jedná se o opak translucidu, nemůžeme tedy k oblaku přiřadit tyto dvě odrůdy zároveň. Opacus určujeme u oblaků altocumulus, altostratus, stratus a stratocumulus.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/09/opacus-cloud.jpg",
            },
            {
                id: "perlucidus",
                text: "Perlucidus (pe) je odrůda altocumulu a stratocumulu. Jedná se o vrstvu nebo skupinu oblaků s rozeznatelnými mezerami mezi jednotlivými prvky. Tyto mezery umožňují možný čistý průhled na Slunce či Měsíc.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/09/perlucidus-cloud-example.jpg",
            },
            {
                id: "radiatus",
                text: "Radiatus (ra) je odrůda oblaků, kdy je oblak uspořádán do paralelních pruhů. Díky perspektivě se tyto pruhy zdánlivě sbíhají v bodě na obzoru. Radiatus můžeme pozorovat u cirru, altocumulu, altostratu, stratocumulu a cumulu.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/09/radiatus-cloud.jpg",
            },
            {
                id: "translucidus",
                text: "Translucidus (tr) je odrůda oblaků, kdy je přes vrstvu oblaku viditelná pozice Slunce. Jedná se o opak opacu, takže nelze zvolit tyto dvě odrůdy zároveň. Translucidus můžeme určit u altocumulu, altostratu, stratu a stratocumulu.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/09/translucidus-cloud.jpg",
            },
            {
                id: "undulatus",
                text: "Undulatus (un) je odrůda oblaků, která se vyznačuje výrazným uspořádáním oblaku do vln. Vlny se nemusí vyskytovat pouze na oblačné vrstvě, ale mohou se skládat i z jednotlivých vzájemně oddělených částí oblaku. Někdy můžeme pozorovat i dvojitý systém těchto vln. Undulatus pozorujeme u oblaků cirrocumulus, cirrostratus, altocumulus, altostratus, stratus a stratocumulus.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/09/undulatus-cloud.jpg",
            },
            {
                id: "vertebratus",
                text: "Vertebratus (ve) je odrůda cirru. Tuto odrůdu přiřazujeme, má-li cirrus žebrovitou strukturu připomínající rybí kostru.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/09/vertebratus-cloud-variety.jpg",
            },
        ],
    },
    {
        id: "features",
        idCZ: "zvlastnosti",
        list: [
            {
                id: "arcus",
                text: "Arcus (arc) je zvláštnost cumulonimbu a občasně i cumulu. Jedná se o hustý oblak ve tvaru horizontálního válce. Tvoří se na pohybujících se oblacích. Často tvoří čelo hrozivě vypadajícího bouřkového systému.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/10/arcus-cloud-example.jpg",
            },
            {
                id: "asperitas",
                text: "Asperitas (asp) je zvláštnost altocumulu či stratocumulu. Tvoří velice výrazné vlnovité struktury na spodním okraji oblaku. Má vzhled rozbouřeného moře. Oproti samotnému undulatu je více chaotický a míně horizontální.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/10/asperitas-cloud.jpg",
            },
            {
                id: "cauda",
                text: "Cauda (cau) je zvláštnost cumulonimbu. Jedná se o výběžek ve tvaru ocasu pod základem cumulonimbu. Je většinou připojen na murus. Tento výběžek je horizontální, protáhlý a nejedná se o vír.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/10/cauda-cloud-feature.jpg",
            },
            {
                id: "cavum",
                text: "Cavum (cav) je zvláštnost objevující se na altocumulu, cirrocumulu a vzácně stratocumulu. Jedná se o zakulacenou díru v tenké části vrstvy oblaku tvořeného kapičkami přechlazené vody. Uprostřed tohoto otvoru se často vyskytuje virga tvořená ledovými krystalky, které vznikly zmražením přechlazené vody v daném místě.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2019/03/cirrocumulus-cavum.jpg",
            },
            {
                id: "fluctus",
                text: "Fluctus (flu) je zvláštnost ve tvaru vertikálních vln. Tato zvláštnost je poměrně krátkodobá. Fluctu se také říká Kelvinův-Helmholtzův oblak podle Kelvinovy-Helmholtzovy nestability, díky které flucty vznikají. Fluctus se objevuje na cirru, altocumulu, stratocumulu, stratu a cumulu.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2019/03/kelvin-helmholtz-clouds.jpg",
            },
            {
                id: "incus",
                text: "Incus (inc) je zvláštnost cumulonimbu, kdy se jeho horní část rozšiřuje do podoby kovadliny. Vzniká konvekcí při dosažení tropopauzy, kde se teplota přestává snižovat s výškou, rozšiřuje se tedy v horizontálním směru.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/10/incus-cloud.jpg",
            },
            {
                id: "mamma",
                text: "Mamma (mam) je zvláštnost nacházející se na spodním okraji oblaků. Má podobu skupiny mnoha výrazně kulatých výbežků v podobě vemen. Vzniká při výraznou nestabilitou při rozpadu oblaků. Zvláštnost mamma můžeme najít na cirru, cirrocumulu, altocumulu,altostratu, stratocumulu a cumulonimbu.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/10/mamma-cloud-feature.jpg",
            },
            {
                id: "murus",
                text: "Murus (mur) je zvláštnost cumulonimbu, když z jeho základny vyčnívá oblak připomínající zeď. Často je zaměňován s arcem. Jeho rozdíl je, že se nevyskytuje před cumulonimbem jako čelo bouře, nýbrž je snížený pod jeho základnou.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/10/murus-cloud-example.jpg",
            },
            {
                id: "praecipitatio",
                text: "Praecipitatio (pra) je zvláštnost oblaků. Jedná se o zřetelně viditelné srážky padající z oblaku. Pokud srážky nedopadnou až na zem, nejedná se o praecipitatio, nýbrž o virgu. Praecipitatio můžeme zpozorovat u oblaků altostratus, nimbostratus, stratocumulus, stratus, cumulus a cumulonimbus.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/10/praecipitatio-cloud.jpg",
            },
            {
                id: "tuba",
                text: "Tuba (tub) je zvláštnost cumulonimbu a cumulu. Má vzhled úzkého kužele sestupujícího z oblaku k zemi. Jedná se o vír tvořený oblakem. Nejsilnější takovéto oblaky tvořené supercelami nazýváme tornáda.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/10/tuba-cloud.jpg",
            },
            {
                id: "virga",
                text: "Virga je zvláštnost všech druhů oblaků vyjma cirru, cirrostratu a altocumulu. Tato zvláštnost je tvořena vypařováním padajících srážek předtím, než dosáhnou země. Virga má vzhled vláknitých proužků sestupujících z oblaku.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/10/virga-cloud.jpg",
            },
        ],
    },
    {
        id: "accessory",
        idCZ: "pruvodni-oblaky",
        list: [
            {
                id: "flumen",
                text: "Flumen (flm) je průvodní oblak vyskytující se pod cumulonimbem. Jeho vzhled bývá široký, protáhlý, připomínající bobří ocas. Podobá se zvláštnosti cauda, avšak je již odtržený od muru. Často vzniká působením supercel, kdy se pohybuje směrem do jejich středu.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/10/flumen-cloud.jpg",
            },
            {
                id: "pannus",
                text: "Pannus (pan) je průvodní oblak, který se vyskytuje jako skupina oblačných útržků pod daným oblakem. Pannus může tvořit i vrstvu. Je typický pro altostratus, nimbostratus, cumulonimbus a cumulus.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/10/pannus-cloud.jpg",
            },
            {
                id: "pileus",
                text: "Pileus (pil) je průvodní oblak cumulonimbu a cumulu. Vyskytuje se nad vrcholy oblaků a má mírně horizontálně roztažený vzhled připomínající čepici nad daným oblakem. Občas se může vytvořit více pileů nad sebou.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/10/pileus-cloud.jpg",
            },
            {
                id: "velum",
                text: "Velum (vel) je průvodní oblak cumulu a cumulonimbu. Vyznačuje se vzhledem horizontálně roztaženého závoje obklopujícího daný oblak. Velum je podobný pileu, avšak je roztáhlejší a nenachází se nad oblakem, nýbrž ho obklopuje.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/10/velum-cloud-accessory.jpg",
            },
        ],
    },
    {
        id: "other",
        idCZ: "ostatni",
        list: [
            {
                id: "cataractagenitus",
                text: "Cataractagenitus (cagen) je poddruh cumulu nebo stratu. Vzniká nad vodopády z kapiček rozprášených padající vodou. Ke vzniku tohoto oblaku je zpravidla potřeba vodopád většího rozměru.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/10/cataractagenitus-cloud.jpg",
            },
            {
                id: "flammagenitus",
                text: "Flammagenitus (flgen) je poddruh cumulu či cumulonimbu. Vznik tohoto oblaku je zapříčiněn požárem nebo jiným zdrojem velmi vysokých teplot, například při sopečné činnosti. Stoupající teplý vzduch ze zdroje tepla kondenzuje v atmosféře a vytváří oblak, který může dosahovat nemalých rozměrů. Může dokonce způsobit bouřku. Tento oblak je také někdy nazýván pyrocumulus.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/10/flammagenitus-cloud.jpg",
            },
            {
                id: "homogenitus",
                text: "Homogenitus (hogen) je oblak vzniklý přímou činností člověka. Oblak může vznikat například z kondenzačních čar letadel nebo z výparů z elektráren. Takto může vzniknout cirrus, cumulus nebo stratus",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/10/homogenitus-cloud.jpg",
            },
            {
                id: "homomutatus",
                text: "Homomutatus (homut) je přeměněný homogenitus (oblak vzniklý lidskou činností), který nabývá přirozenějšího vzhledu. Tedy například z kondenzační čáry letadla vznikne cirrus homogenitus, který je následně působením atmosféry přeměněn na cirrocumulus homomutatus. U takového oblaku je pořád zjevné, že před proměnou vznikl lidskou činností, avšak již dostává jiný tvar než při vzniku. Homomutatem můžeme nazývat cirrus, cirrocumulus nebo cirrostratus.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2019/03/cirrus-fibratus-homomutatus.jpg",
            },
            {
                id: "silvagenitus",
                text: "Silvagenitus (sigen) je poddruh stratu. Tento oblak vzniká vypařováním vody z lesních porostů. Tento oblak se nachází nízko nad zemí a má roztrhanější vzhled než běžný stratus.",
                img: "https://whatsthiscloud.com/wp-content/uploads/2018/10/silvagenitus-cloud-formation.jpg",
            },
        ],
    },
];

export default subtypes;
