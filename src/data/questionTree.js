const questionTree = [
    // Nivel 1
    {
        id: "1",
        question: "¿Cómo te parás en el quilombo, loco?",
        options: [
            { text: "Al frente, como si fuera un clásico", nextId: "2" },
            { text: "Tirando magia, como si supiera un truco", nextId: "3" },
            { text: "Haciéndome el vivo, sin que me pesquen", nextId: "4" },
            { text: "Chamuyando, como para ganar a todos", nextId: "5" }
        ]
    },
    // Nivel 2A
    {
        id: "2",
        question: "¿Sos de romper todo o de pelear con más onda?",
        options: [
            { text: "Rompo todo, como en una tribuna", nextId: "6" },
            { text: "Con estilo, como metiendo un caño", nextId: "7" },
            { text: "Con cabeza, como armando un plan", nextId: "8" }
        ]
    },
    // Nivel 2B
    {
        id: "3",
        question: "¿Esa magia tuya de dónde sale, capo?",
        options: [
            { text: "De estudiar, como un nerd total", nextId: "9" },
            { text: "De adentro, como si fuera un don", nextId: "10" },
            { text: "De un trato medio turbio", nextId: "11" },
            { text: "De algo más grosso, como una fe", nextId: "12" }
        ]
    },
    // Nivel 2C
    {
        id: "4",
        question: "¿Cómo te movés cuando nadie te ve?",
        options: [
            { text: "Robando, como un vivo en la calle", nextId: "13" },
            { text: "Cazando, como si fuera un bicho", nextId: "14" },
            { text: "Espiando, como un curioso sin remedio", nextId: "15" }
        ]
    },
    // Nivel 2D
    {
        id: "5",
        question: "¿Ese chamuyo tuyo para qué lo usás?",
        options: [
            { text: "Para inspirar, como arengando a la banda", nextId: "16" },
            { text: "Para engañar, como un vendedor de humo", nextId: "17" },
            { text: "Para cantar, como en una guitarreada", nextId: "18" }
        ]
    },
    // Nivel 3A
    {
        id: "6",
        question: "¿Esa furia tuya cómo la sacás?",
        options: [
            { text: "A lo bruto, como rompiendo todo", nextId: "19" },
            { text: "Con espíritu, como si tuviera un guía", nextId: "20" },
            { text: "Con bronca, como bancando un bondi lleno", nextId: "21" }
        ]
    },
    // Nivel 3B
    {
        id: "7",
        question: "¿Ese estilo en la pelea cómo lo llevás?",
        options: [
            { text: "A puño limpio, como en un gimnasio", nextId: "22" },
            { text: "Con espada, como un guapo", nextId: "23" },
            { text: "Con un toque de magia, como un truco", nextId: "24" }
        ]
    },
    // Nivel 3C
    {
        id: "8",
        question: "¿Sos estratega de qué tipo, loco?",
        options: [
            { text: "Con fierros, como un gaucho", nextId: "25" },
            { text: "Con magia, como un brujo piola", nextId: "26" },
            { text: "Con táctica, como armando jugadas", nextId: "27" }
        ]
    },
    // Nivel 3D
    {
        id: "9",
        question: "¿Esos libros de magia para qué los leés?",
        options: [
            { text: "Para pelear, como si fuera una guerra", nextId: "28" },
            { text: "Para saberlo todo, como un nerd", nextId: "29" },
            { text: "Para controlar, como un capo", nextId: "30" }
        ]
    },
    // Nivel 3E
    {
        id: "10",
        question: "¿Ese don mágico tuyo cómo lo usás?",
        options: [
            { text: "Para brillar, como en la Bombonera", nextId: "31" },
            { text: "Para lo oscuro, como en un callejón", nextId: "32" },
            { text: "Para chamuyar, como un vivo", nextId: "33" }
        ]
    },
    // Nivel 3F
    {
        id: "11",
        question: "¿Con quién hiciste ese trato turbio?",
        options: [
            { text: "Un demonio, como negocio en Once", nextId: "34" },
            { text: "Un bicho raro, como algo de otro mundo", nextId: "35" },
            { text: "Algo oscuro, como un secreto heavy", nextId: "36" }
        ]
    },
    // Nivel 3G
    {
        id: "12",
        question: "¿Esa fe tuya para qué la usás?",
        options: [
            { text: "Para sanar, como un médico piola", nextId: "37" },
            { text: "Para pelear, como un cruzado", nextId: "38" },
            { text: "Para la naturaleza, como un hippie", nextId: "39" }
        ]
    },
    // Nivel 3H
    {
        id: "13",
        question: "¿Cómo robás, capo?",
        options: [
            { text: "Con estilo, como un galán", nextId: "40" },
            { text: "Con magia, como un ilusionista", nextId: "41" },
            { text: "Con viveza, como un chorro piola", nextId: "42" }
        ]
    },
    // Nivel 3I
    {
        id: "14",
        question: "¿Cómo cazás, loco?",
        options: [
            { text: "Con arco, como un gaucho en las sierras", nextId: "43" },
            { text: "Con trampas, como un vivo", nextId: "44" },
            { text: "Con sigilo, como rastreando sin ruido", nextId: "45" }
        ]
    },
    // Nivel 3J
    {
        id: "15",
        question: "¿Para qué espiás, chusma?",
        options: [
            { text: "Para cazar, como un cazador piola", nextId: "46" },
            { text: "Para secretos, como un curioso", nextId: "47" },
            { text: "Para proteger, como un guardia", nextId: "48" }
        ]
    },
    // Nivel 3K
    {
        id: "16",
        question: "¿Esa arenga tuya cómo levanta a la banda?",
        options: [
            { text: "Con fe, como en la Bombonera", nextId: "49" },
            { text: "Con canciones, como en un fogón", nextId: "50" },
            { text: "Con justicia, como poniendo orden", nextId: "51" }
        ]
    },
    // Nivel 3L
    {
        id: "17",
        question: "¿Ese engaño tuyo cómo lo tirás?",
        options: [
            { text: "Con magia innata, como un don", nextId: "52" },
            { text: "Con cuentos, como un poeta", nextId: "53" },
            { text: "Con chamuyo puro, como un vendedor", nextId: "54" }
        ]
    },
    // Nivel 3M
    {
        id: "18",
        question: "¿Esas canciones tuyas para qué sirven?",
        options: [
            { text: "Para levantar, como en una guitarreada", nextId: "55" },
            { text: "Para burlarte, como un cómico", nextId: "56" },
            { text: "Para encantar, como un galán", nextId: "57" }
        ]
    },
    // Nivel 4A
    {
        id: "19",
        question: "¿Esa furia bruta cómo la canalizás?",
        options: [
            { text: "A lo loco, como en un quilombo", nextId: "58" },
            { text: "Con instinto, como un animal", nextId: "59" },
            { text: "Con bronca pura, como puteando", nextId: "60" }
        ]
    },
    {
        id: "20",
        question: "¿Ese espíritu tuyo es más salvaje o místico?",
        options: [
            { text: "Salvaje, como un bicho en el monte", nextId: "61" },
            { text: "Místico, como meditando tranqui", nextId: "62" },
            { text: "Con furia, como rompiendo todo", nextId: "63" }
        ]
    },
    {
        id: "21",
        question: "¿Esa bronca tuya es para pelear o para bancar?",
        options: [
            { text: "Para pelear, como en una tribuna", nextId: "64" },
            { text: "Para bancar, como en un bondi", nextId: "65" },
            { text: "Para liderar, como un capo", nextId: "66" }
        ]
    },
    // Nivel 4B
    {
        id: "22",
        question: "¿Esos puños cómo los usás, loco?",
        options: [
            { text: "Con fuerza, como rompiendo todo", nextId: "67" },
            { text: "Con chi, como en un dojo", nextId: "68" },
            { text: "Con estilo, como un boxeador piola", nextId: "69" }
        ]
    },
    {
        id: "23",
        question: "¿Esa espada la manejás con qué vibe?",
        options: [
            { text: "Con táctica, como un estratega", nextId: "70" },
            { text: "Con magia, como un brujo", nextId: "71" },
            { text: "Con estilo, como un guapo", nextId: "72" }
        ]
    },
    {
        id: "24",
        question: "¿Esa magia en la pelea para qué la usás?",
        options: [
            { text: "Para pelear, como en un ring", nextId: "73" },
            { text: "Para engañar, como un vivo", nextId: "74" },
            { text: "Para brillar, como en Caminito", nextId: "75" }
        ]
    },
    // Nivel 4C
    {
        id: "25",
        question: "¿Esos fierros los usás con qué estilo?",
        options: [
            { text: "Con fuerza, como un gaucho", nextId: "76" },
            { text: "Con precisión, como un arquero", nextId: "77" },
            { text: "Con magia, como un brujo", nextId: "78" }
        ]
    },
    {
        id: "26",
        question: "¿Esa magia estratégica cómo la tirás?",
        options: [
            { text: "Para pelear, como en el Luna Park", nextId: "79" },
            { text: "Para aprender, como un nerd", nextId: "80" },
            { text: "Para liderar, como un capo", nextId: "81" }
        ]
    },
    {
        id: "27",
        question: "¿Esa táctica tuya es para qué?",
        options: [
            { text: "Para liderar, como un DT", nextId: "82" },
            { text: "Para cazar, como un gaucho", nextId: "83" },
            { text: "Para pelear, como un estratega", nextId: "84" }
        ]
    },
    // Nivel 4D
    {
        id: "28",
        question: "¿Esa magia de libros para qué la usás?",
        options: [
            { text: "Para destruir, como un rayo", nextId: "85" },
            { text: "Para controlar, como un capo", nextId: "86" },
            { text: "Para aprender, como un nerd", nextId: "87" }
        ]
    },
    {
        id: "29",
        question: "¿Ese estudio de magia es para qué, loco?",
        options: [
            { text: "Para pelear, como un gladiador", nextId: "88" },
            { text: "Para saber todo, como un genio", nextId: "89" },
            { text: "Para explorar, como un curioso", nextId: "90" }
        ]
    },
    {
        id: "30",
        question: "¿Esa magia nerd para qué la querés?",
        options: [
            { text: "Para dominar, como un jefe", nextId: "91" },
            { text: "Para pelear, como un brujo", nextId: "92" },
            { text: "Para aprender, como en la UNC", nextId: "93" }
        ]
    },
    // Nivel 4E
    {
        id: "31",
        question: "¿Ese don mágico tuyo para qué lo usás?",
        options: [
            { text: "Para brillar, como un showman", nextId: "94" },
            { text: "Para pelear, como en un ring", nextId: "95" },
            { text: "Para chamuyar, como un galán", nextId: "96" }
        ]
    },
    {
        id: "32",
        question: "¿Esa magia oscura para qué la tirás?",
        options: [
            { text: "Para destruir, como un loco", nextId: "97" },
            { text: "Para manipular, como un vivo", nextId: "98" },
            { text: "Para brillar, como en un escenario", nextId: "99" }
        ]
    },
    {
        id: "33",
        question: "¿Ese chamuyo mágico cómo lo manejás?",
        options: [
            { text: "Para encantar, como un poeta", nextId: "100" },
            { text: "Para controlar, como un capo", nextId: "101" },
            { text: "Para pelear, como un vivo", nextId: "102" }
        ]
    },
    // Nivel 4F
    {
        id: "34",
        question: "¿Ese pacto con el demonio para qué lo usás?",
        options: [
            { text: "Para pelear, como en un duelo", nextId: "103" },
            { text: "Para poder, como un jefe", nextId: "104" },
            { text: "Para magia loca, como un brujo", nextId: "105" }
        ]
    },
    {
        id: "35",
        question: "¿Ese bicho raro te da poder para qué?",
        options: [
            { text: "Para pelear, como en un ring", nextId: "106" },
            { text: "Para magia, como un loco", nextId: "107" },
            { text: "Para destruir, como un brujo", nextId: "108" }
        ]
    },
    {
        id: "36",
        question: "¿Ese pacto oscuro para qué lo querés?",
        options: [
            { text: "Para destruir, como un rayo", nextId: "109" },
            { text: "Para engañar, como un vivo", nextId: "110" },
            { text: "Para poder, como un capo", nextId: "111" }
        ]
    },
    // Nivel 4G
    {
        id: "37",
        question: "¿Esa fe para sanar cómo la usás?",
        options: [
            { text: "Para curar, como un médico", nextId: "112" },
            { text: "Para liderar, como un cura", nextId: "113" },
            { text: "Para pelear, como un cruzado", nextId: "114" }
        ]
    },
    {
        id: "38",
        question: "¿Esa fe para pelear cómo la llevás?",
        options: [
            { text: "Para proteger, como un guardia", nextId: "115" },
            { text: "Para castigar, como un juez", nextId: "116" },
            { text: "Para sanar, como un médico", nextId: "117" }
        ]
    },
    {
        id: "39",
        question: "¿Esa fe por la naturaleza para qué es?",
        options: [
            { text: "Para proteger, como un hippie", nextId: "118" },
            { text: "Para usar, como un gaucho", nextId: "119" },
            { text: "Para conectar, como un druida", nextId: "120" }
        ]
    },
    // Nivel 4H
    {
        id: "40",
        question: "¿Ese robo con estilo para qué lo usás?",
        options: [
            { text: "Para ganar, como un galán", nextId: "121" },
            { text: "Para secretos, como un chusma", nextId: "122" },
            { text: "Para pelear, como un vivo", nextId: "123" }
        ]
    },
    {
        id: "41",
        question: "¿Esa magia para robar cómo la manejás?",
        options: [
            { text: "Para pelear, como un ilusionista", nextId: "124" },
            { text: "Para engañar, como un vivo", nextId: "125" },
            { text: "Para brillar, como un showman", nextId: "126" }
        ]
    },
    {
        id: "42",
        question: "¿Esa viveza tuya para qué sirve?",
        options: [
            { text: "Para sobrevivir, como en un quilombo", nextId: "127" },
            { text: "Para explorar, como un aventurero", nextId: "128" },
            { text: "Para secretos, como un chusma", nextId: "129" }
        ]
    },
    // Nivel 4I
    {
        id: "43",
        question: "¿Ese arco tuyo cómo lo usás?",
        options: [
            { text: "Para cazar, como un gaucho", nextId: "130" },
            { text: "Para proteger, como un guardia", nextId: "131" },
            { text: "Para pelear, como un arquero", nextId: "132" }
        ]
    },
    {
        id: "44",
        question: "¿Esas trampas para qué las armás?",
        options: [
            { text: "Para cazar, como un vivo", nextId: "133" },
            { text: "Para sobrevivir, como en la calle", nextId: "134" },
            { text: "Para explorar, como un aventurero", nextId: "135" }
        ]
    },
    {
        id: "45",
        question: "¿Ese sigilo tuyo para qué lo usás?",
        options: [
            { text: "Para cazar, como un rastreador", nextId: "136" },
            { text: "Para espiar, como un chusma", nextId: "137" },
            { text: "Para pelear, como un ninja", nextId: "138" }
        ]
    },
    // Nivel 4J
    {
        id: "46",
        question: "¿Ese cazar tuyo cómo lo hacés?",
        options: [
            { text: "Con arco, como un gaucho", nextId: "139" },
            { text: "Con trampas, como un vivo", nextId: "140" },
            { text: "Con sigilo, como un cazador", nextId: "141" }
        ]
    },
    {
        id: "47",
        question: "¿Esos secretos para qué los buscás?",
        options: [
            { text: "Para espiar, como un chusma", nextId: "142" },
            { text: "Para pelear, como un vivo", nextId: "143" },
            { text: "Para proteger, como un guardia", nextId: "144" }
        ]
    },
    {
        id: "48",
        question: "¿Ese proteger tuyo cómo lo llevás?",
        options: [
            { text: "Con arco, como un arquero", nextId: "145" },
            { text: "Con sigilo, como un ninja", nextId: "146" },
            { text: "Con táctica, como un estratega", nextId: "147" }
        ]
    },
    // Nivel 4K
    {
        id: "49",
        question: "¿Esa fe tuya cómo la usás para arengar?",
        options: [
            { text: "Para proteger, como un guardia", nextId: "148" },
            { text: "Para castigar, como un juez", nextId: "149" },
            { text: "Para sanar, como un médico", nextId: "150" }
        ]
    },
    {
        id: "50",
        question: "¿Esas canciones cómo levantan a la banda?",
        options: [
            { text: "Para inspirar, como en un fogón", nextId: "151" },
            { text: "Para burlarte, como un cómico", nextId: "152" },
            { text: "Para encantar, como un galán", nextId: "153" }
        ]
    },
    {
        id: "51",
        question: "¿Esa justicia tuya cómo la aplicás?",
        options: [
            { text: "Para proteger, como un vigilante", nextId: "154" },
            { text: "Para castigar, como un juez", nextId: "155" },
            { text: "Para liderar, como un DT", nextId: "156" }
        ]
    },
    // Nivel 4L
    {
        id: "52",
        question: "¿Esa magia innata para engañar cómo la usás?",
        options: [
            { text: "Para brillar, como un showman", nextId: "157" },
            { text: "Para manipular, como un vivo", nextId: "158" },
            { text: "Para pelear, como un brujo", nextId: "159" }
        ]
    },
    {
        id: "53",
        question: "¿Esos cuentos tuyos para qué sirven?",
        options: [
            { text: "Para encantar, como un poeta", nextId: "160" },
            { text: "Para burlarte, como un cómico", nextId: "161" },
            { text: "Para chamuyar, como un galán", nextId: "162" }
        ]
    },
    {
        id: "54",
        question: "¿Ese chamuyo puro cómo lo tirás?",
        options: [
            { text: "Para manipular, como un vendedor", nextId: "163" },
            { text: "Para brillar, como en un escenario", nextId: "164" },
            { text: "Para pelear, como un vivo", nextId: "165" }
        ]
    },
    // Nivel 5A
    {
        id: "58",
        question: "¿Ese caos tuyo es puro instinto o tiene un toque más?",
        options: [
            { text: "Instinto, como un animal", nextId: "166" },
            { text: "Furia, como en un clásico", nextId: "167" },
            { text: "Bronca, como puteando", nextId: "168" }
        ]
    },
    {
        id: "59",
        question: "¿Ese instinto tuyo es para romper o para conectar?",
        options: [
            { text: "Romper, como en un quilombo", nextId: "169" },
            { text: "Conectar, como un guía", nextId: "170" },
            { text: "Pelea, como en la tribuna", nextId: "171" }
        ]
    },
    {
        id: "60",
        question: "¿Esa bronca pura cómo la manejás?",
        options: [
            { text: "A lo loco, como rompiendo todo", nextId: "172" },
            { text: "Con espíritu, como un chamán", nextId: "173" },
            { text: "Con pelea, como en un ring", nextId: "174" }
        ]
    },
    {
        id: "61",
        question: "¿Ese lado salvaje tuyo cómo lo usás?",
        options: [
            { text: "Para pelear, como un bicho", nextId: "175" },
            { text: "Para conectar, como un druida", nextId: "176" },
            { text: "Para romper, como en la Bombonera", nextId: "177" }
        ]
    },
    {
        id: "62",
        question: "¿Ese misticismo tuyo para qué es?",
        options: [
            { text: "Para pelear, como un cruzado", nextId: "178" },
            { text: "Para conectar, como un guía", nextId: "179" },
            { text: "Para romper, como un loco", nextId: "180" }
        ]
    },
    {
        id: "63",
        question: "¿Esa furia espiritual cómo la tirás?",
        options: [
            { text: "A lo bruto, como rompiendo todo", nextId: "181" },
            { text: "Con instinto, como un animal", nextId: "182" },
            { text: "Con bronca, como en un clásico", nextId: "183" }
        ]
    },
    // Nivel 5B
    {
        id: "64",
        question: "¿Esa bronca tuya para pelear cómo la usás?",
        options: [
            { text: "A lo loco, como en una tribuna", nextId: "184" },
            { text: "Con espíritu, como un chamán", nextId: "185" },
            { text: "Con fuerza, como un gaucho", nextId: "186" }
        ]
    },
    {
        id: "65",
        question: "¿Esa resistencia tuya cómo la manejás?",
        options: [
            { text: "Con furia, como rompiendo todo", nextId: "187" },
            { text: "Con táctica, como un estratega", nextId: "188" },
            { text: "Con instinto, como un animal", nextId: "189" }
        ]
    },
    {
        id: "66",
        question: "¿Ese liderazgo tuyo cómo lo aplicás?",
        options: [
            { text: "Con fuerza, como un gaucho", nextId: "190" },
            { text: "Con táctica, como un DT", nextId: "191" },
            { text: "Con furia, como en la tribuna", nextId: "192" }
        ]
    },
    // Nivel 5C
    {
        id: "67",
        question: "¿Esa fuerza a puño limpio para qué la usás?",
        options: [
            { text: "Para pelear, como en un ring", nextId: "193" },
            { text: "Con chi, como en un dojo", nextId: "194" },
            { text: "Con estilo, como un boxeador", nextId: "195" }
        ]
    },
    {
        id: "68",
        question: "¿Ese chi tuyo cómo lo manejás?",
        options: [
            { text: "Con misticismo, como un monje", nextId: "196" },
            { text: "Con pelea, como un ninja", nextId: "197" },
            { text: "Con estilo, como un capo", nextId: "198" }
        ]
    },
    {
        id: "69",
        question: "¿Ese estilo de boxeo cómo lo llevás?",
        options: [
            { text: "Con puños, como en un gimnasio", nextId: "199" },
            { text: "Con chi, como en un dojo", nextId: "200" },
            { text: "Con táctica, como un estratega", nextId: "201" }
        ]
    },
    // Nivel 5D
    {
        id: "70",
        question: "¿Esa espada tuya con táctica para qué es?",
        options: [
            { text: "Para pelear, como un guapo", nextId: "202" },
            { text: "Para liderar, como un DT", nextId: "203" },
            { text: "Con magia, como un brujo", nextId: "204" }
        ]
    },
    {
        id: "71",
        question: "¿Esa espada con magia cómo la usás?",
        options: [
            { text: "Para pelear, como en un ring", nextId: "205" },
            { text: "Para engañar, como un vivo", nextId: "206" },
            { text: "Para brillar, como un showman", nextId: "207" }
        ]
    },
    {
        id: "72",
        question: "¿Ese estilo con espada para qué lo usás?",
        options: [
            { text: "Para pelear, como un guapo", nextId: "208" },
            { text: "Para cazar, como un arquero", nextId: "209" },
            { text: "Para liderar, como un capo", nextId: "210" }
        ]
    },
    // Nivel 5E
    {
        id: "73",
        question: "¿Esa magia de pelea cómo la tirás?",
        options: [
            { text: "Para destruir, como un rayo", nextId: "211" },
            { text: "Para engañar, como un ilusionista", nextId: "212" },
            { text: "Para brillar, como en un escenario", nextId: "213" }
        ]
    },
    {
        id: "74",
        question: "¿Esa magia para engañar cómo la manejás?",
        options: [
            { text: "Con viveza, como un chorro", nextId: "214" },
            { text: "Con estilo, como un galán", nextId: "215" },
            { text: "Con magia, como un brujo", nextId: "216" }
        ]
    },
    {
        id: "75",
        question: "¿Esa magia para brillar cómo la usás?",
        options: [
            { text: "Para pelear, como en el Luna Park", nextId: "217" },
            { text: "Para chamuyar, como un galán", nextId: "218" },
            { text: "Para brillar, como en Caminito", nextId: "219" }
        ]
    },
    // Nivel 5F
    {
        id: "76",
        question: "¿Esos fierros con fuerza para qué los usás?",
        options: [
            { text: "Para pelear, como un gaucho", nextId: "220" },
            { text: "Para liderar, como un DT", nextId: "221" },
            { text: "Para cazar, como un arquero", nextId: "222" }
        ]
    },
    {
        id: "77",
        question: "¿Esa precisión con fierros cómo la manejás?",
        options: [
            { text: "Para cazar, como un gaucho", nextId: "223" },
            { text: "Para pelear, como un arquero", nextId: "224" },
            { text: "Para proteger, como un guardia", nextId: "225" }
        ]
    },
    {
        id: "78",
        question: "¿Esa magia con fierros para qué la usás?",
        options: [
            { text: "Para pelear, como un brujo", nextId: "226" },
            { text: "Para aprender, como un nerd", nextId: "227" },
            { text: "Para liderar, como un capo", nextId: "228" }
        ]
    },
    // Nivel 5G
    {
        id: "79",
        question: "¿Esa magia de pelea cómo la tirás?",
        options: [
            { text: "Para destruir, como un rayo", nextId: "229" },
            { text: "Para controlar, como un capo", nextId: "230" },
            { text: "Para aprender, como un nerd", nextId: "231" }
        ]
    },
    {
        id: "80",
        question: "¿Esa magia para aprender cómo la usás?",
        options: [
            { text: "Para saber todo, como un genio", nextId: "232" },
            { text: "Para pelear, como un brujo", nextId: "233" },
            { text: "Para explorar, como un curioso", nextId: "234" }
        ]
    },
    {
        id: "81",
        question: "¿Esa magia para liderar cómo la manejás?",
        options: [
            { text: "Para pelear, como un DT", nextId: "235" },
            { text: "Para proteger, como un guardia", nextId: "236" },
            { text: "Para inspirar, como un capo", nextId: "237" }
        ]
    },
    // Nivel 5H
    {
        id: "82",
        question: "¿Ese liderazgo táctico para qué es?",
        options: [
            { text: "Para pelear, como un estratega", nextId: "238" },
            { text: "Para proteger, como un guardia", nextId: "239" },
            { text: "Para inspirar, como un DT", nextId: "240" }
        ]
    },
    {
        id: "83",
        question: "¿Esa táctica para cazar cómo la usás?",
        options: [
            { text: "Con arco, como un gaucho", nextId: "241" },
            { text: "Con trampas, como un vivo", nextId: "242" },
            { text: "Con sigilo, como un cazador", nextId: "243" }
        ]
    },
    {
        id: "84",
        question: "¿Esa táctica de pelea cómo la llevás?",
        options: [
            { text: "Con fierros, como un guapo", nextId: "244" },
            { text: "Con magia, como un brujo", nextId: "245" },
            { text: "Con estilo, como un galán", nextId: "246" }
        ]
    },
    // Nivel 5I
    {
        id: "85",
        question: "¿Esa magia para destruir cómo la tirás?",
        options: [
            { text: "Con rayos, como un loco", nextId: "247" },
            { text: "Con estudio, como un nerd", nextId: "248" },
            { text: "Con poder, como un capo", nextId: "249" }
        ]
    },
    {
        id: "86",
        question: "¿Esa magia para controlar cómo la manejás?",
        options: [
            { text: "Con estudio, como un genio", nextId: "250" },
            { text: "Con poder, como un jefe", nextId: "251" },
            { text: "Con pelea, como un brujo", nextId: "252" }
        ]
    },
    {
        id: "87",
        question: "¿Esa magia para aprender para qué es?",
        options: [
            { text: "Para saber todo, como un nerd", nextId: "253" },
            { text: "Para pelear, como un gladiador", nextId: "254" },
            { text: "Para explorar, como un curioso", nextId: "255" }
        ]
    },
    // Nivel 5J
    {
        id: "88",
        question: "¿Esa magia de pelea para qué la usás?",
        options: [
            { text: "Para destruir, como un rayo", nextId: "256" },
            { text: "Para controlar, como un capo", nextId: "257" },
            { text: "Para aprender, como un nerd", nextId: "258" }
        ]
    },
    {
        id: "89",
        question: "¿Ese genio tuyo para qué lo usás?",
        options: [
            { text: "Para saber todo, como un nerd", nextId: "259" },
            { text: "Para pelear, como un brujo", nextId: "260" },
            { text: "Para explorar, como un curioso", nextId: "261" }
        ]
    },
    {
        id: "90",
        question: "¿Esa magia para explorar cómo la manejás?",
        options: [
            { text: "Para aprender, como un genio", nextId: "262" },
            { text: "Para pelear, como un brujo", nextId: "263" },
            { text: "Para controlar, como un capo", nextId: "264" }
        ]
    },
    // Nivel 5K
    {
        id: "91",
        question: "¿Esa magia para dominar cómo la usás?",
        options: [
            { text: "Para pelear, como un gladiador", nextId: "265" },
            { text: "Para controlar, como un jefe", nextId: "266" },
            { text: "Para aprender, como un nerd", nextId: "267" }
        ]
    },
    {
        id: "92",
        question: "¿Esa magia de pelea cómo la tirás?",
        options: [
            { text: "Para destruir, como un rayo", nextId: "268" },
            { text: "Para controlar, como un capo", nextId: "269" },
            { text: "Para brillar, como un showman", nextId: "270" }
        ]
    },
    {
        id: "93",
        question: "¿Esa magia nerd cómo la manejás?",
        options: [
            { text: "Para aprender, como un genio", nextId: "271" },
            { text: "Para pelear, como un brujo", nextId: "272" },
            { text: "Para explorar, como un curioso", nextId: "273" }
        ]
    },
    // Nivel 5L
    {
        id: "94",
        question: "¿Ese don para brillar cómo lo usás?",
        options: [
            { text: "Para pelear, como en un ring", nextId: "274" },
            { text: "Para chamuyar, como un galán", nextId: "275" },
            { text: "Para brillar, como un showman", nextId: "276" }
        ]
    },
    {
        id: "95",
        question: "¿Ese don para pelear cómo lo manejás?",
        options: [
            { text: "Para destruir, como un rayo", nextId: "277" },
            { text: "Para brillar, como en un escenario", nextId: "278" },
            { text: "Para manipular, como un vivo", nextId: "279" }
        ]
    },
    {
        id: "96",
        question: "¿Ese chamuyo mágico para qué es?",
        options: [
            { text: "Para encantar, como un poeta", nextId: "280" },
            { text: "Para pelear, como un vivo", nextId: "281" },
            { text: "Para manipular, como un galán", nextId: "282" }
        ]
    },
    // Nivel 5M
    {
        id: "97",
        question: "¿Esa magia oscura para destruir cómo la tirás?",
        options: [
            { text: "Con poder, como un capo", nextId: "283" },
            { text: "Con pelea, como un brujo", nextId: "284" },
            { text: "Con manipulación, como un vivo", nextId: "285" }
        ]
    },
    {
        id: "98",
        question: "¿Esa magia para manipular cómo la usás?",
        options: [
            { text: "Para chamuyar, como un galán", nextId: "286" },
            { text: "Para pelear, como un brujo", nextId: "287" },
            { text: "Para brillar, como un showman", nextId: "288" }
        ]
    },
    {
        id: "99",
        question: "¿Esa magia oscura para brillar cómo la manejás?",
        options: [
            { text: "Para pelear, como en un ring", nextId: "289" },
            { text: "Para chamuyar, como un galán", nextId: "290" },
            { text: "Para brillar, como en un escenario", nextId: "291" }
        ]
    },
    // Nivel 5N
    {
        id: "100",
        question: "¿Ese chamuyo para encantar cómo lo tirás?",
        options: [
            { text: "Para inspirar, como en un fogón", nextId: "292" },
            { text: "Para burlarte, como un cómico", nextId: "293" },
            { text: "Para chamuyar, como un galán", nextId: "294" }
        ]
    },
    {
        id: "101",
        question: "¿Ese chamuyo para controlar cómo lo usás?",
        options: [
            { text: "Para manipular, como un vivo", nextId: "295" },
            { text: "Para pelear, como un brujo", nextId: "296" },
            { text: "Para brillar, como un showman", nextId: "297" }
        ]
    },
    {
        id: "102",
        question: "¿Ese chamuyo para pelear cómo lo manejás?",
        options: [
            { text: "Para encantar, como un poeta", nextId: "298" },
            { text: "Para manipular, como un galán", nextId: "299" },
            { text: "Para brillar, como en un escenario", nextId: "300" }
        ]
    },
    // Nivel 5O
    {
        id: "103",
        question: "¿Ese pacto para pelear cómo lo usás?",
        options: [
            { text: "Con poder, como un capo", nextId: "301" },
            { text: "Con magia, como un brujo", nextId: "302" },
            { text: "Con pelea, como en un ring", nextId: "303" }
        ]
    },
    {
        id: "104",
        question: "¿Ese pacto para poder cómo lo manejás?",
        options: [
            { text: "Para destruir, como un rayo", nextId: "304" },
            { text: "Para manipular, como un vivo", nextId: "305" },
            { text: "Para magia, como un brujo", nextId: "306" }
        ]
    },
    {
        id: "105",
        question: "¿Esa magia loca del pacto para qué es?",
        options: [
            { text: "Para pelear, como en un duelo", nextId: "307" },
            { text: "Para poder, como un capo", nextId: "308" },
            { text: "Para destruir, como un rayo", nextId: "309" }
        ]
    },
    // Nivel 5P
    {
        id: "106",
        question: "¿Ese poder para pelear cómo lo tirás?",
        options: [
            { text: "Con magia, como un brujo", nextId: "310" },
            { text: "Con poder, como un jefe", nextId: "311" },
            { text: "Con pelea, como en un ring", nextId: "312" }
        ]
    },
    {
        id: "107",
        question: "¿Esa magia del bicho raro cómo la usás?",
        options: [
            { text: "Para destruir, como un rayo", nextId: "313" },
            { text: "Para pelear, como un brujo", nextId: "314" },
            { text: "Para poder, como un capo", nextId: "315" }
        ]
    },
    {
        id: "108",
        question: "¿Ese poder para destruir cómo lo manejás?",
        options: [
            { text: "Con magia, como un brujo", nextId: "316" },
            { text: "Con pelea, como en un duelo", nextId: "317" },
            { text: "Con poder, como un jefe", nextId: "318" }
        ]
    },
    // Nivel 5Q
    {
        id: "109",
        question: "¿Ese pacto oscuro para destruir cómo lo tirás?",
        options: [
            { text: "Con magia, como un brujo", nextId: "319" },
            { text: "Con poder, como un capo", nextId: "320" },
            { text: "Con pelea, como en un ring", nextId: "321" }
        ]
    },
    {
        id: "110",
        question: "¿Ese pacto para engañar cómo lo usás?",
        options: [
            { text: "Para manipular, como un vivo", nextId: "322" },
            { text: "Para pelear, como un brujo", nextId: "323" },
            { text: "Para brillar, como un showman", nextId: "324" }
        ]
    },
    {
        id: "111",
        question: "¿Ese pacto oscuro para poder cómo lo manejás?",
        options: [
            { text: "Para destruir, como un rayo", nextId: "325" },
            { text: "Para manipular, como un vivo", nextId: "326" },
            { text: "Para magia, como un brujo", nextId: "327" }
        ]
    },
    // Nivel 5R
    {
        id: "112",
        question: "¿Esa fe para curar cómo la usás?",
        options: [
            { text: "Para sanar, como un médico", nextId: "328" },
            { text: "Para liderar, como un cura", nextId: "329" },
            { text: "Para pelear, como un cruzado", nextId: "330" }
        ]
    },
    {
        id: "113",
        question: "¿Esa fe para liderar cómo la manejás?",
        options: [
            { text: "Para sanar, como un médico", nextId: "331" },
            { text: "Para pelear, como un cruzado", nextId: "332" },
            { text: "Para proteger, como un guardia", nextId: "333" }
        ]
    },
    {
        id: "114",
        question: "¿Esa fe para pelear cómo la tirás?",
        options: [
            { text: "Para proteger, como un guardia", nextId: "334" },
            { text: "Para castigar, como un juez", nextId: "335" },
            { text: "Para sanar, como un médico", nextId: "336" }
        ]
    },
    // Nivel 5S
    {
        id: "115",
        question: "¿Esa fe para proteger cómo la usás?",
        options: [
            { text: "Para liderar, como un DT", nextId: "337" },
            { text: "Para pelear, como un cruzado", nextId: "338" },
            { text: "Para sanar, como un médico", nextId: "339" }
        ]
    },
    {
        id: "116",
        question: "¿Esa fe para castigar cómo la manejás?",
        options: [
            { text: "Para pelear, como un cruzado", nextId: "340" },
            { text: "Para proteger, como un guardia", nextId: "341" },
            { text: "Para liderar, como un DT", nextId: "342" }
        ]
    },
    {
        id: "117",
        question: "¿Esa fe para sanar cómo la tirás?",
        options: [
            { text: "Para curar, como un médico", nextId: "343" },
            { text: "Para liderar, como un cura", nextId: "344" },
            { text: "Para pelear, como un cruzado", nextId: "345" }
        ]
    },
    // Nivel 5T
    {
        id: "118",
        question: "¿Esa fe por la naturaleza cómo la usás?",
        options: [
            { text: "Para proteger, como un hippie", nextId: "346" },
            { text: "Para usar, como un gaucho", nextId: "347" },
            { text: "Para conectar, como un druida", nextId: "348" }
        ]
    },
    {
        id: "119",
        question: "¿Esa naturaleza para usar cómo la manejás?",
        options: [
            { text: "Para pelear, como un gaucho", nextId: "349" },
            { text: "Para proteger, como un hippie", nextId: "350" },
            { text: "Para conectar, como un druida", nextId: "351" }
        ]
    },
    {
        id: "120",
        question: "¿Esa conexión con la naturaleza para qué es?",
        options: [
            { text: "Para proteger, como un hippie", nextId: "352" },
            { text: "Para usar, como un gaucho", nextId: "353" },
            { text: "Para pelear, como un druida", nextId: "354" }
        ]
    },
    // Nivel 5U
    {
        id: "121",
        question: "¿Ese robo con estilo para qué lo usás?",
        options: [
            { text: "Para ganar, como un galán", nextId: "355" },
            { text: "Para secretos, como un chusma", nextId: "356" },
            { text: "Para pelear, como un vivo", nextId: "357" }
        ]
    },
    {
        id: "122",
        question: "¿Esos secretos para qué los buscás?",
        options: [
            { text: "Para espiar, como un chusma", nextId: "358" },
            { text: "Para pelear, como un vivo", nextId: "359" },
            { text: "Para sobrevivir, como un chorro", nextId: "360" }
        ]
    },
    {
        id: "123",
        question: "¿Ese robo para pelear cómo lo manejás?",
        options: [
            { text: "Con estilo, como un galán", nextId: "361" },
            { text: "Con viveza, como un chorro", nextId: "362" },
            { text: "Con magia, como un ilusionista", nextId: "363" }
        ]
    },
    // Nivel 5V
    {
        id: "124",
        question: "¿Esa magia para pelear cómo la tirás?",
        options: [
            { text: "Con viveza, como un vivo", nextId: "364" },
            { text: "Con estilo, como un galán", nextId: "365" },
            { text: "Con magia, como un ilusionista", nextId: "366" }
        ]
    },
    {
        id: "125",
        question: "¿Esa magia para engañar cómo la usás?",
        options: [
            { text: "Para sobrevivir, como un chorro", nextId: "367" },
            { text: "Para espiar, como un chusma", nextId: "368" },
            { text: "Para pelear, como un vivo", nextId: "369" }
        ]
    },
    {
        id: "126",
        question: "¿Esa magia para brillar cómo la manejás?",
        options: [
            { text: "Para chamuyar, como un galán", nextId: "370" },
            { text: "Para pelear, como un ilusionista", nextId: "371" },
            { text: "Para brillar, como un showman", nextId: "372" }
        ]
    },
    // Nivel 5W
    {
        id: "127",
        question: "¿Esa viveza para sobrevivir cómo la usás?",
        options: [
            { text: "Para robar, como un chorro", nextId: "373" },
            { text: "Para espiar, como un chusma", nextId: "374" },
            { text: "Para pelear, como un vivo", nextId: "375" }
        ]
    },
    {
        id: "128",
        question: "¿Esa viveza para explorar cómo la manejás?",
        options: [
            { text: "Con trampas, como un vivo", nextId: "376" },
            { text: "Con sigilo, como un cazador", nextId: "377" },
            { text: "Con arco, como un gaucho", nextId: "378" }
        ]
    },
    {
        id: "129",
        question: "¿Esa viveza para secretos cómo la tirás?",
        options: [
            { text: "Para espiar, como un chusma", nextId: "379" },
            { text: "Para sobrevivir, como un chorro", nextId: "380" },
            { text: "Para pelear, como un vivo", nextId: "381" }
        ]
    },
    // Nivel 5X
    {
        id: "130",
        question: "¿Ese arco para cazar cómo lo usás?",
        options: [
            { text: "Con sigilo, como un cazador", nextId: "382" },
            { text: "Con trampas, como un vivo", nextId: "383" },
            { text: "Con pelea, como un arquero", nextId: "384" }
        ]
    },
    {
        id: "131",
        question: "¿Ese arco para proteger cómo lo manejás?",
        options: [
            { text: "Con sigilo, como un ninja", nextId: "385" },
            { text: "Con táctica, como un estratega", nextId: "386" },
            { text: "Con pelea, como un arquero", nextId: "387" }
        ]
    },
    {
        id: "132",
        question: "¿Ese arco para pelear cómo lo tirás?",
        options: [
            { text: "Con sigilo, como un cazador", nextId: "388" },
            { text: "Con trampas, como un vivo", nextId: "389" },
            { text: "Con táctica, como un estratega", nextId: "390" }
        ]
    },
    // Nivel 5Y
    {
        id: "133",
        question: "¿Esas trampas para cazar cómo las armás?",
        options: [
            { text: "Con sigilo, como un cazador", nextId: "391" },
            { text: "Con viveza, como un vivo", nextId: "392" },
            { text: "Con arco, como un gaucho", nextId: "393" }
        ]
    },
    {
        id: "134",
        question: "¿Esas trampas para sobrevivir cómo las usás?",
        options: [
            { text: "Para robar, como un chorro", nextId: "394" },
            { text: "Para espiar, como un chusma", nextId: "395" },
            { text: "Para pelear, como un vivo", nextId: "396" }
        ]
    },
    {
        id: "135",
        question: "¿Esas trampas para explorar cómo las manejás?",
        options: [
            { text: "Con sigilo, como un cazador", nextId: "397" },
            { text: "Con arco, como un gaucho", nextId: "398" },
            { text: "Con viveza, como un aventurero", nextId: "399" }
        ]
    },
    // Nivel 5Z
    {
        id: "136",
        question: "¿Ese sigilo para cazar cómo lo usás?",
        options: [
            { text: "Con arco, como un gaucho", nextId: "400" },
            { text: "Con trampas, como un vivo", nextId: "401" },
            { text: "Con pelea, como un ninja", nextId: "402" }
        ]
    },
    {
        id: "137",
        question: "¿Ese sigilo para espiar cómo lo manejás?",
        options: [
            { text: "Para secretos, como un chusma", nextId: "403" },
            { text: "Para pelear, como un vivo", nextId: "404" },
            { text: "Para sobrevivir, como un chorro", nextId: "405" }
        ]
    },
    {
        id: "138",
        question: "¿Ese sigilo para pelear cómo lo tirás?",
        options: [
            { text: "Con estilo, como un galán", nextId: "406" },
            { text: "Con viveza, como un chorro", nextId: "407" },
            { text: "Con magia, como un ilusionista", nextId: "408" }
        ]
    },
    // Nivel 5AA
    {
        id: "139",
        question: "¿Ese arco para cazar cómo lo manejás?",
        options: [
            { text: "Con sigilo, como un cazador", nextId: "409" },
            { text: "Con trampas, como un vivo", nextId: "410" },
            { text: "Con pelea, como un arquero", nextId: "411" }
        ]
    },
    {
        id: "140",
        question: "¿Esas trampas para cazar cómo las usás?",
        options: [
            { text: "Con sigilo, como un cazador", nextId: "412" },
            { text: "Con arco, como un gaucho", nextId: "413" },
            { text: "Con viveza, como un vivo", nextId: "414" }
        ]
    },
    {
        id: "141",
        question: "¿Ese sigilo para cazar cómo lo tirás?",
        options: [
            { text: "Con arco, como un gaucho", nextId: "415" },
            { text: "Con trampas, como un vivo", nextId: "416" },
            { text: "Con pelea, como un ninja", nextId: "417" }
        ]
    },
    // Nivel 5AB
    {
        id: "142",
        question: "¿Esos secretos para espiar cómo los buscás?",
        options: [
            { text: "Con viveza, como un chorro", nextId: "418" },
            { text: "Con estilo, como un galán", nextId: "419" },
            { text: "Con magia, como un ilusionista", nextId: "420" }
        ]
    },
    {
        id: "143",
        question: "¿Esos secretos para pelear cómo los usás?",
        options: [
            { text: "Con sigilo, como un ninja", nextId: "421" },
            { text: "Con viveza, como un chorro", nextId: "422" },
            { text: "Con estilo, como un galán", nextId: "423" }
        ]
    },
    {
        id: "144",
        question: "¿Esos secretos para proteger cómo los manejás?",
        options: [
            { text: "Con arco, como un arquero", nextId: "424" },
            { text: "Con sigilo, como un cazador", nextId: "425" },
            { text: "Con táctica, como un estratega", nextId: "426" }
        ]
    },
    // Nivel 5AC
    {
        id: "145",
        question: "¿Ese arco para proteger cómo lo usás?",
        options: [
            { text: "Con sigilo, como un cazador", nextId: "427" },
            { text: "Con trampas, como un vivo", nextId: "428" },
            { text: "Con pelea, como un arquero", nextId: "429" }
        ]
    },
    {
        id: "146",
        question: "¿Ese sigilo para proteger cómo lo manejás?",
        options: [
            { text: "Con arco, como un gaucho", nextId: "430" },
            { text: "Con trampas, como un vivo", nextId: "431" },
            { text: "Con pelea, como un ninja", nextId: "432" }
        ]
    },
    {
        id: "147",
        question: "¿Esa táctica para proteger cómo la tirás?",
        options: [
            { text: "Con arco, como un arquero", nextId: "433" },
            { text: "Con sigilo, como un cazador", nextId: "434" },
            { text: "Con pelea, como un estratega", nextId: "435" }
        ]
    },
    // Nivel 5AD
    {
        id: "148",
        question: "¿Esa fe para proteger cómo la usás?",
        options: [
            { text: "Para liderar, como un DT", nextId: "436" },
            { text: "Para pelear, como un cruzado", nextId: "437" },
            { text: "Para sanar, como un médico", nextId: "438" }
        ]
    },
    {
        id: "149",
        question: "¿Esa fe para castigar cómo la manejás?",
        options: [
            { text: "Para pelear, como un cruzado", nextId: "439" },
            { text: "Para proteger, como un guardia", nextId: "440" },
            { text: "Para liderar, como un DT", nextId: "441" }
        ]
    },
    {
        id: "150",
        question: "¿Esa fe para sanar cómo la tirás?",
        options: [
            { text: "Para curar, como un médico", nextId: "442" },
            { text: "Para liderar, como un cura", nextId: "443" },
            { text: "Para pelear, como un cruzado", nextId: "444" }
        ]
    },
    // Nivel 5AE
    {
        id: "151",
        question: "¿Esas canciones para inspirar cómo las usás?",
        options: [
            { text: "Para levantar, como en un fogón", nextId: "445" },
            { text: "Para encantar, como un galán", nextId: "446" },
            { text: "Para burlarte, como un cómico", nextId: "447" }
        ]
    },
    {
        id: "152",
        question: "¿Esas canciones para burlarte cómo las tirás?",
        options: [
            { text: "Para chamuyar, como un galán", nextId: "448" },
            { text: "Para inspirar, como en un fogón", nextId: "449" },
            { text: "Para burlarte, como un cómico", nextId: "450" }
        ]
    },
    {
        id: "153",
        question: "¿Esas canciones para encantar cómo las manejás?",
        options: [
            { text: "Para inspirar, como en un fogón", nextId: "451" },
            { text: "Para burlarte, como un cómico", nextId: "452" },
            { text: "Para chamuyar, como un galán", nextId: "453" }
        ]
    },
    // Nivel 5AF
    {
        id: "154",
        question: "¿Esa justicia para proteger cómo la usás?",
        options: [
            { text: "Para liderar, como un DT", nextId: "454" },
            { text: "Para pelear, como un cruzado", nextId: "455" },
            { text: "Para sanar, como un médico", nextId: "456" }
        ]
    },
    {
        id: "155",
        question: "¿Esa justicia para castigar cómo la manejás?",
        options: [
            { text: "Para pelear, como un cruzado", nextId: "457" },
            { text: "Para proteger, como un guardia", nextId: "458" },
            { text: "Para liderar, como un DT", nextId: "459" }
        ]
    },
    {
        id: "156",
        question: "¿Esa justicia para liderar cómo la tirás?",
        options: [
            { text: "Para proteger, como un guardia", nextId: "460" },
            { text: "Para pelear, como un cruzado", nextId: "461" },
            { text: "Para sanar, como un médico", nextId: "462" }
        ]
    },
    // Nivel 5AG
    {
        id: "157",
        question: "¿Esa magia innata para brillar cómo la usás?",
        options: [
            { text: "Para pelear, como en un ring", nextId: "463" },
            { text: "Para chamuyar, como un galán", nextId: "464" },
            { text: "Para brillar, como un showman", nextId: "465" }
        ]
    },
    {
        id: "158",
        question: "¿Esa magia para manipular cómo la manejás?",
        options: [
            { text: "Para chamuyar, como un galán", nextId: "466" },
            { text: "Para pelear, como un brujo", nextId: "467" },
            { text: "Para brillar, como un showman", nextId: "468" }
        ]
    },
    {
        id: "159",
        question: "¿Esa magia para pelear cómo la tirás?",
        options: [
            { text: "Para destruir, como un rayo", nextId: "469" },
            { text: "Para manipular, como un vivo", nextId: "470" },
            { text: "Para brillar, como un showman", nextId: "471" }
        ]
    },
    // Nivel 5AH
    {
        id: "160",
        question: "¿Esos cuentos para encantar cómo los usás?",
        options: [
            { text: "Para inspirar, como en un fogón", nextId: "472" },
            { text: "Para burlarte, como un cómico", nextId: "473" },
            { text: "Para chamuyar, como un galán", nextId: "474" }
        ]
    },
    {
        id: "161",
        question: "¿Esos cuentos para burlarte cómo los tirás?",
        options: [
            { text: "Para chamuyar, como un galán", nextId: "475" },
            { text: "Para inspirar, como en un fogón", nextId: "476" },
            { text: "Para burlarte, como un cómico", nextId: "477" }
        ]
    },
    {
        id: "162",
        question: "¿Esos cuentos para chamuyar cómo los manejás?",
        options: [
            { text: "Para inspirar, como en un fogón", nextId: "478" },
            { text: "Para burlarte, como un cómico", nextId: "479" },
            { text: "Para encantar, como un galán", nextId: "480" }
        ]
    },
    // Nivel 5AI
    {
        id: "163",
        question: "¿Ese chamuyo para manipular cómo lo usás?",
        options: [
            { text: "Para pelear, como un vivo", nextId: "481" },
            { text: "Para chamuyar, como un galán", nextId: "482" },
            { text: "Para brillar, como un showman", nextId: "483" }
        ]
    },
    {
        id: "164",
        question: "¿Ese chamuyo para brillar cómo lo tirás?",
        options: [
            { text: "Para pelear, como un brujo", nextId: "484" },
            { text: "Para chamuyar, como un galán", nextId: "485" },
            { text: "Para brillar, como un showman", nextId: "486" }
        ]
    },
    {
        id: "165",
        question: "¿Ese chamuyo para pelear cómo lo manejás?",
        options: [
            { text: "Para manipular, como un vivo", nextId: "487" },
            { text: "Para brillar, como un showman", nextId: "488" },
            { text: "Para chamuyar, como un galán", nextId: "489" }
        ]
    },
    // Nivel 6 (Nodos finales)
    { id: "166", question: "¡A romper todo como un animal!", result: "Barbarian" },
    { id: "167", question: "¡Furia pura en la tribuna!", result: "Barbarian" },
    { id: "168", question: "¡Bronca que no para!", result: "Barbarian" },
    { id: "169", question: "¡A romper todo como loco!", result: "Barbarian" },
    { id: "170", question: "¡Conexión con el espíritu!", result: "Barbarian" },
    { id: "171", question: "¡Pelea sin parar!", result: "Barbarian" },
    { id: "172", question: "¡Furia a lo bruto!", result: "Barbarian" },
    { id: "173", question: "¡Espíritu de pelea!", result: "Barbarian" },
    { id: "174", question: "¡Bronca en el ring!", result: "Barbarian" },
    { id: "175", question: "¡Pelea como un bicho!", result: "Barbarian" },
    { id: "176", question: "¡Conexión salvaje!", result: "Druid" },
    { id: "177", question: "¡Rompiendo todo como en la Bombonera!", result: "Barbarian" },
    { id: "178", question: "¡Pelea con misticismo!", result: "Monk" },
    { id: "179", question: "¡Conexión espiritual!", result: "Druid" },
    { id: "180", question: "¡Rompiendo con furia!", result: "Barbarian" },
    { id: "181", question: "¡Furia bruta!", result: "Barbarian" },
    { id: "182", question: "¡Instinto animal!", result: "Barbarian" },
    { id: "183", question: "¡Bronca de clásico!", result: "Barbarian" },
    { id: "184", question: "¡Pelea a lo loco!", result: "Barbarian" },
    { id: "185", question: "¡Espíritu de lucha!", result: "Barbarian" },
    { id: "186", question: "¡Fuerza de gaucho!", result: "Fighter" },
    { id: "187", question: "¡Furia para bancar!", result: "Barbarian" },
    { id: "188", question: "¡Táctica para resistir!", result: "Fighter" },
    { id: "189", question: "¡Instinto para bancar!", result: "Barbarian" },
    { id: "190", question: "¡Fuerza para liderar!", result: "Fighter" },
    { id: "191", question: "¡Táctica como un DT!", result: "Fighter" },
    { id: "192", question: "¡Furia para liderar!", result: "Barbarian" },
    { id: "193", question: "¡Puños en el ring!", result: "Monk" },
    { id: "194", question: "¡Chi como en un dojo!", result: "Monk" },
    { id: "195", question: "¡Estilo de boxeador!", result: "Monk" },
    { id: "196", question: "¡Misticismo de monje!", result: "Monk" },
    { id: "197", question: "¡Pelea como ninja!", result: "Monk" },
    { id: "198", question: "¡Estilo de capo!", result: "Monk" },
    { id: "199", question: "¡Puños a lo bruto!", result: "Monk" },
    { id: "200", question: "¡Chi para pelear!", result: "Monk" },
    { id: "201", question: "¡Táctica de boxeador!", result: "Monk" },
    { id: "202", question: "¡Espada de guapo!", result: "Fighter" },
    { id: "203", question: "¡Liderazgo con espada!", result: "Fighter" },
    { id: "204", question: "¡Espada con magia!", result: "Fighter" },
    { id: "205", question: "¡Pelea con espada mágica!", result: "Fighter" },
    { id: "206", question: "¡Engaño con espada!", result: "Rogue" },
    { id: "207", question: "¡Brillo con espada!", result: "Fighter" },
    { id: "208", question: "¡Pelea como guapo!", result: "Fighter" },
    { id: "209", question: "¡Caza con espada!", result: "Ranger" },
    { id: "210", question: "¡Liderazgo de espada!", result: "Fighter" },
    { id: "211", question: "¡Magia para destruir!", result: "Wizard" },
    { id: "212", question: "¡Magia para engañar!", result: "Rogue" },
    { id: "213", question: "¡Magia para brillar!", result: "Sorcerer" },
    { id: "214", question: "¡Viveza mágica!", result: "Rogue" },
    { id: "215", question: "¡Estilo mágico!", result: "Rogue" },
    { id: "216", question: "¡Magia de ilusionista!", result: "Rogue" },
    { id: "217", question: "¡Pelea mágica en el ring!", result: "Sorcerer" },
    { id: "218", question: "¡Chamuyo mágico!", result: "Sorcerer" },
    { id: "219", question: "¡Brillo como en Caminito!", result: "Sorcerer" },
    { id: "220", question: "¡Fierros para pelear!", result: "Fighter" },
    { id: "221", question: "¡Fierros para liderar!", result: "Fighter" },
    { id: "222", question: "¡Fierros para cazar!", result: "Ranger" },
    { id: "223", question: "¡Precisión para cazar!", result: "Ranger" },
    { id: "224", question: "¡Pelea con precisión!", result: "Fighter" },
    { id: "225", question: "¡Precisión para proteger!", result: "Ranger" },
    { id: "226", question: "¡Fierros con magia!", result: "Fighter" },
    { id: "227", question: "¡Magia para aprender!", result: "Wizard" },
    { id: "228", question: "¡Magia para liderar!", result: "Fighter" },
    { id: "229", question: "¡Magia para destruir!", result: "Wizard" },
    { id: "230", question: "¡Magia para controlar!", result: "Wizard" },
    { id: "231", question: "¡Magia para aprender!", result: "Wizard" },
    { id: "232", question: "¡Saber todo como genio!", result: "Wizard" },
    { id: "233", question: "¡Pelea como brujo!", result: "Wizard" },
    { id: "234", question: "¡Explorar con magia!", result: "Wizard" },
    { id: "235", question: "¡Pelea para liderar!", result: "Fighter" },
    { id: "236", question: "¡Proteger con magia!", result: "Paladin" },
    { id: "237", question: "¡Inspirar con magia!", result: "Paladin" },
    { id: "238", question: "¡Pelea como estratega!", result: "Fighter" },
    { id: "239", question: "¡Proteger como guardia!", result: "Paladin" },
    { id: "240", question: "¡Inspirar como DT!", result: "Paladin" },
    { id: "241", question: "¡Caza con arco!", result: "Ranger" },
    { id: "242", question: "¡Caza con trampas!", result: "Ranger" },
    { id: "243", question: "¡Caza con sigilo!", result: "Ranger" },
    { id: "244", question: "¡Fierros de guapo!", result: "Fighter" },
    { id: "245", question: "¡Fierros con magia!", result: "Fighter" },
    { id: "246", question: "¡Estilo de estratega!", result: "Fighter" },
    { id: "247", question: "¡Rayos de magia!", result: "Wizard" },
    { id: "248", question: "¡Estudio de magia!", result: "Wizard" },
    { id: "249", question: "¡Poder de magia!", result: "Wizard" },
    { id: "250", question: "¡Control con estudio!", result: "Wizard" },
    { id: "251", question: "¡Control con poder!", result: "Wizard" },
    { id: "252", question: "¡Control con pelea!", result: "Wizard" },
    { id: "253", question: "¡Saber todo como nerd!", result: "Wizard" },
    { id: "254", question: "¡Pelea como gladiador!", result: "Wizard" },
    { id: "255", question: "¡Explorar como curioso!", result: "Wizard" },
    { id: "256", question: "¡Destruir con magia!", result: "Wizard" },
    { id: "257", question: "¡Controlar con magia!", result: "Wizard" },
    { id: "258", question: "¡Aprender con magia!", result: "Wizard" },
    { id: "259", question: "¡Saber todo como genio!", result: "Wizard" },
    { id: "260", question: "¡Pelea como brujo!", result: "Wizard" },
    { id: "261", question: "¡Explorar con magia!", result: "Wizard" },
    { id: "262", question: "¡Aprender como genio!", result: "Wizard" },
    { id: "263", question: "¡Pelea con magia!", result: "Wizard" },
    { id: "264", question: "¡Controlar como capo!", result: "Wizard" },
    { id: "265", question: "¡Pelea como gladiador!", result: "Wizard" },
    { id: "266", question: "¡Controlar como jefe!", result: "Wizard" },
    { id: "267", question: "¡Aprender como nerd!", result: "Wizard" },
    { id: "268", question: "¡Destruir con magia!", result: "Sorcerer" },
    { id: "269", question: "¡Controlar con magia!", result: "Sorcerer" },
    { id: "270", question: "¡Brillar con magia!", result: "Sorcerer" },
    { id: "271", question: "¡Aprender como genio!", result: "Wizard" },
    { id: "272", question: "¡Pelea con magia!", result: "Wizard" },
    { id: "273", question: "¡Explorar como curioso!", result: "Wizard" },
    { id: "274", question: "¡Pelea con don mágico!", result: "Sorcerer" },
    { id: "275", question: "¡Chamuyo con magia!", result: "Sorcerer" },
    { id: "276", question: "¡Brillo como showman!", result: "Sorcerer" },
    { id: "277", question: "¡Destruir con don!", result: "Sorcerer" },
    { id: "278", question: "¡Brillar con don!", result: "Sorcerer" },
    { id: "279", question: "¡Manipular con don!", result: "Sorcerer" },
    { id: "280", question: "¡Encantar con chamuyo!", result: "Bard" },
    { id: "281", question: "¡Pelea con chamuyo!", result: "Sorcerer" },
    { id: "282", question: "¡Manipular con chamuyo!", result: "Sorcerer" },
    { id: "283", question: "¡Poder oscuro!", result: "Warlock" },
    { id: "284", question: "¡Pelea oscura!", result: "Warlock" },
    { id: "285", question: "¡Manipular oscuro!", result: "Warlock" },
    { id: "286", question: "¡Chamuyo con magia!", result: "Sorcerer" },
    { id: "287", question: "¡Pelea con magia!", result: "Sorcerer" },
    { id: "288", question: "¡Brillar con magia!", result: "Sorcerer" },
    { id: "289", question: "¡Pelea con magia oscura!", result: "Sorcerer" },
    { id: "290", question: "¡Chamuyo con magia oscura!", result: "Sorcerer" },
    { id: "291", question: "¡Brillar con magia oscura!", result: "Sorcerer" },
    { id: "292", question: "¡Inspirar con canciones!", result: "Bard" },
    { id: "293", question: "¡Burlarte con canciones!", result: "Bard" },
    { id: "294", question: "¡Chamuyar con canciones!", result: "Bard" },
    { id: "295", question: "¡Manipular con chamuyo!", result: "Sorcerer" },
    { id: "296", question: "¡Pelea con chamuyo!", result: "Sorcerer" },
    { id: "297", question: "¡Brillar con chamuyo!", result: "Sorcerer" },
    { id: "298", question: "¡Encantar con chamuyo!", result: "Bard" },
    { id: "299", question: "¡Manipular con chamuyo!", result: "Sorcerer" },
    { id: "300", question: "¡Brillar con chamuyo!", result: "Sorcerer" },
    { id: "301", question: "¡Poder con pacto!", result: "Warlock" },
    { id: "302", question: "¡Magia con pacto!", result: "Warlock" },
    { id: "303", question: "¡Pelea con pacto!", result: "Warlock" },
    { id: "304", question: "¡Destruir con pacto!", result: "Warlock" },
    { id: "305", question: "¡Manipular con pacto!", result: "Warlock" },
    { id: "306", question: "¡Magia turbia con pacto!", result: "Warlock" },
    { id: "307", question: "¡Pelea con pacto loco!", result: "Warlock" },
    { id: "308", question: "¡Poder con pacto raro!", result: "Warlock" },
    { id: "309", question: "¡Destruir con pacto turbio!", result: "Warlock" },
    { id: "310", question: "¡Magia con bicho raro!", result: "Warlock" },
    { id: "311", question: "¡Poder con bicho raro!", result: "Warlock" },
    { id: "312", question: "¡Pelea con bicho raro!", result: "Warlock" },
    { id: "313", question: "¡Destruir con magia loca!", result: "Warlock" },
    { id: "314", question: "¡Pelea con magia rara!", result: "Warlock" },
    { id: "315", question: "¡Poder con magia rara!", result: "Warlock" },
    { id: "316", question: "¡Magia oscura con pacto!", result: "Warlock" },
    { id: "317", question: "¡Pelea con pacto oscuro!", result: "Warlock" },
    { id: "318", question: "¡Poder con pacto oscuro!", result: "Warlock" },
    { id: "319", question: "¡Magia turbia con pacto!", result: "Warlock" },
    { id: "320", question: "¡Poder con pacto turbio!", result: "Warlock" },
    { id: "321", question: "¡Pelea con pacto turbio!", result: "Warlock" },
    { id: "322", question: "¡Engañar con pacto oscuro!", result: "Warlock" },
    { id: "323", question: "¡Pelea con pacto oscuro!", result: "Warlock" },
    { id: "324", question: "¡Brillar con pacto oscuro!", result: "Warlock" },
    { id: "325", question: "¡Destruir con pacto oscuro!", result: "Warlock" },
    { id: "326", question: "¡Manipular con pacto turbio!", result: "Warlock" },
    { id: "327", question: "¡Magia con pacto turbio!", result: "Warlock" },
    { id: "328", question: "¡Curar con fe!", result: "Cleric" },
    { id: "329", question: "¡Liderar con fe!", result: "Cleric" },
    { id: "330", question: "¡Pelea con fe!", result: "Cleric" },
    { id: "331", question: "¡Curar como médico!", result: "Cleric" },
    { id: "332", question: "¡Pelea como cruzado!", result: "Cleric" },
    { id: "333", question: "¡Proteger con fe!", result: "Cleric" },
    { id: "334", question: "¡Proteger como guardia!", result: "Paladin" },
    { id: "335", question: "¡Castigar con fe!", result: "Cleric" },
    { id: "336", question: "¡Curar con fe!", result: "Cleric" },
    { id: "337", question: "¡Liderar como DT!", result: "Paladin" },
    { id: "338", question: "¡Pelea como cruzado!", result: "Paladin" },
    { id: "339", question: "¡Curar con fe!", result: "Cleric" },
    { id: "340", question: "¡Pelea como cruzado!", result: "Cleric" },
    { id: "341", question: "¡Proteger como guardia!", result: "Paladin" },
    { id: "342", question: "¡Liderar con fe!", result: "Cleric" },
    { id: "343", question: "¡Curar como médico!", result: "Cleric" },
    { id: "344", question: "¡Liderar como cura!", result: "Cleric" },
    { id: "345", question: "¡Pelea con fe!", result: "Cleric" },
    { id: "346", question: "¡Proteger la naturaleza!", result: "Druid" },
    { id: "347", question: "¡Usar la naturaleza!", result: "Druid" },
    { id: "348", question: "¡Conectar con la naturaleza!", result: "Druid" },
    { id: "349", question: "¡Pelea con naturaleza!", result: "Druid" },
    { id: "350", question: "¡Proteger como hippie!", result: "Druid" },
    { id: "351", question: "¡Conectar como druida!", result: "Druid" },
    { id: "352", question: "¡Proteger la naturaleza!", result: "Druid" },
    { id: "353", question: "¡Usar la naturaleza!", result: "Druid" },
    { id: "354", question: "¡Pelea como druida!", result: "Druid" },
    { id: "355", question: "¡Robar como galán!", result: "Rogue" },
    { id: "356", question: "¡Secretos como chusma!", result: "Rogue" },
    { id: "357", question: "¡Pelea como vivo!", result: "Rogue" },
    { id: "358", question: "¡Espiar como chusma!", result: "Rogue" },
    { id: "359", question: "¡Pelea como vivo!", result: "Rogue" },
    { id: "360", question: "¡Sobrevivir como chorro!", result: "Rogue" },
    { id: "361", question: "¡Robar con estilo!", result: "Rogue" },
    { id: "362", question: "¡Viveza de chorro!", result: "Rogue" },
    { id: "363", question: "¡Magia de ilusionista!", result: "Rogue" },
    { id: "364", question: "¡Viveza mágica!", result: "Rogue" },
    { id: "365", question: "¡Estilo de galán!", result: "Rogue" },
    { id: "366", question: "¡Magia para pelear!", result: "Rogue" },
    { id: "367", question: "¡Sobrevivir con magia!", result: "Rogue" },
    { id: "368", question: "¡Espiar con magia!", result: "Rogue" },
    { id: "369", question: "¡Pelea con magia!", result: "Rogue" },
    { id: "370", question: "¡Chamuyar con magia!", result: "Sorcerer" },
    { id: "371", question: "¡Pelea como ilusionista!", result: "Rogue" },
    { id: "372", question: "¡Brillar con magia!", result: "Sorcerer" },
    { id: "373", question: "¡Robar como chorro!", result: "Rogue" },
    { id: "374", question: "¡Espiar como chusma!", result: "Rogue" },
    { id: "375", question: "¡Pelea como vivo!", result: "Rogue" },
    { id: "376", question: "¡Caza con trampas!", result: "Ranger" },
    { id: "377", question: "¡Caza con sigilo!", result: "Ranger" },
    { id: "378", question: "¡Caza con arco!", result: "Ranger" },
    { id: "379", question: "¡Espiar como chusma!", result: "Rogue" },
    { id: "380", question: "¡Sobrevivir como chorro!", result: "Rogue" },
    { id: "381", question: "¡Pelea como vivo!", result: "Rogue" },
    { id: "382", question: "¡Caza con sigilo!", result: "Ranger" },
    { id: "383", question: "¡Caza con trampas!", result: "Ranger" },
    { id: "384", question: "¡Pelea con arco!", result: "Ranger" },
    { id: "385", question: "¡Proteger con sigilo!", result: "Ranger" },
    { id: "386", question: "¡Proteger con táctica!", result: "Ranger" },
    { id: "387", question: "¡Pelea como arquero!", result: "Ranger" },
    { id: "388", question: "¡Caza con sigilo!", result: "Ranger" },
    { id: "389", question: "¡Caza con trampas!", result: "Ranger" },
    { id: "390", question: "¡Pelea con táctica!", result: "Ranger" },
    { id: "391", question: "¡Caza con sigilo!", result: "Ranger" },
    { id: "392", question: "¡Caza con viveza!", result: "Ranger" },
    { id: "393", question: "¡Caza con arco!", result: "Ranger" },
    { id: "394", question: "¡Robar como chorro!", result: "Rogue" },
    { id: "395", question: "¡Espiar como chusma!", result: "Rogue" },
    { id: "396", question: "¡Pelea como vivo!", result: "Rogue" },
    { id: "397", question: "¡Explorar con sigilo!", result: "Ranger" },
    { id: "398", question: "¡Explorar con arco!", result: "Ranger" },
    { id: "399", question: "¡Explorar con viveza!", result: "Ranger" },
    { id: "400", question: "¡Caza con arco!", result: "Ranger" },
    { id: "401", question: "¡Caza con trampas!", result: "Ranger" },
    { id: "402", question: "¡Pelea como ninja!", result: "Rogue" },
    { id: "403", question: "¡Espiar como chusma!", result: "Rogue" },
    { id: "404", question: "¡Pelea como vivo!", result: "Rogue" },
    { id: "405", question: "¡Sobrevivir como chorro!", result: "Rogue" },
    { id: "406", question: "¡Pelea con estilo!", result: "Rogue" },
    { id: "407", question: "¡Pelea con viveza!", result: "Rogue" },
    { id: "408", question: "¡Pelea con magia!", result: "Rogue" },
    { id: "409", question: "¡Caza con sigilo!", result: "Ranger" },
    { id: "410", question: "¡Caza con trampas!", result: "Ranger" },
    { id: "411", question: "¡Pelea con arco!", result: "Ranger" },
    { id: "412", question: "¡Caza con sigilo!", result: "Ranger" },
    { id: "413", question: "¡Caza con arco!", result: "Ranger" },
    { id: "414", question: "¡Caza con viveza!", result: "Ranger" },
    { id: "415", question: "¡Caza con arco!", result: "Ranger" },
    { id: "416", question: "¡Caza con trampas!", result: "Ranger" },
    { id: "417", question: "¡Pelea como ninja!", result: "Rogue" },
    { id: "418", question: "¡Espiar con viveza!", result: "Rogue" },
    { id: "419", question: "¡Espiar con estilo!", result: "Rogue" },
    { id: "420", question: "¡Espiar con magia!", result: "Rogue" },
    { id: "421", question: "¡Pelea con sigilo!", result: "Rogue" },
    { id: "422", question: "¡Pelea con viveza!", result: "Rogue" },
    { id: "423", question: "¡Pelea con estilo!", result: "Rogue" },
    { id: "424", question: "¡Proteger con arco!", result: "Ranger" },
    { id: "425", question: "¡Proteger con sigilo!", result: "Ranger" },
    { id: "426", question: "¡Proteger con táctica!", result: "Ranger" },
    { id: "427", question: "¡Proteger con sigilo!", result: "Ranger" },
    { id: "428", question: "¡Proteger con trampas!", result: "Ranger" },
    { id: "429", question: "¡Pelea como arquero!", result: "Ranger" },
    { id: "430", question: "¡Proteger con arco!", result: "Ranger" },
    { id: "431", question: "¡Proteger con trampas!", result: "Ranger" },
    { id: "432", question: "¡Pelea como ninja!", result: "Rogue" },
    { id: "433", question: "¡Proteger con arco!", result: "Ranger" },
    { id: "434", question: "¡Proteger con sigilo!", result: "Ranger" },
    { id: "435", question: "¡Proteger con táctica!", result: "Ranger" },
    { id: "436", question: "¡Liderar con fe!", result: "Paladin" },
    { id: "437", question: "¡Pelea como cruzado!", result: "Paladin" },
    { id: "438", question: "¡Curar con fe!", result: "Cleric" },
    { id: "439", question: "¡Castigar como cruzado!", result: "Paladin" },
    { id: "440", question: "¡Proteger con fe!", result: "Paladin" },
    { id: "441", question: "¡Liderar como DT!", result: "Paladin" },
    { id: "442", question: "¡Curar como médico!", result: "Cleric" },
    { id: "443", question: "¡Liderar con fe!", result: "Cleric" },
    { id: "444", question: "¡Pelea con fe!", result: "Cleric" },
    { id: "445", question: "¡Inspirar con canciones!", result: "Bard" },
    { id: "446", question: "¡Encantar con canciones!", result: "Bard" },
    { id: "447", question: "¡Burlarte con canciones!", result: "Bard" },
    { id: "448", question: "¡Chamuyar con canciones!", result: "Bard" },
    { id: "449", question: "¡Inspirar con canciones!", result: "Bard" },
    { id: "450", question: "¡Burlarte como cómico!", result: "Bard" },
    { id: "451", question: "¡Inspirar como en un fogón!", result: "Bard" },
    { id: "452", question: "¡Burlarte con canciones!", result: "Bard" },
    { id: "453", question: "¡Encantar con chamuyo!", result: "Bard" },
    { id: "454", question: "¡Proteger con justicia!", result: "Paladin" },
    { id: "455", question: "¡Pelea como cruzado!", result: "Paladin" },
    { id: "456", question: "¡Curar con justicia!", result: "Cleric" },
    { id: "457", question: "¡Castigar con justicia!", result: "Paladin" },
    { id: "458", question: "¡Proteger como guardia!", result: "Paladin" },
    { id: "459", question: "¡Liderar con justicia!", result: "Paladin" },
    { id: "460", question: "¡Proteger con justicia!", result: "Paladin" },
    { id: "461", question: "¡Pelea con justicia!", result: "Paladin" },
    { id: "462", question: "¡Curar con justicia!", result: "Cleric" },
    { id: "463", question: "¡Pelea con don mágico!", result: "Sorcerer" },
    { id: "464", question: "¡Chamuyo con magia!", result: "Sorcerer" },
    { id: "465", question: "¡Brillar como showman!", result: "Sorcerer" },
    { id: "466", question: "¡Chamuyo para manipular!", result: "Sorcerer" },
    { id: "467", question: "¡Pelea con magia innata!", result: "Sorcerer" },
    { id: "468", question: "¡Brillar con magia!", result: "Sorcerer" },
    { id: "469", question: "¡Destruir con don!", result: "Sorcerer" },
    { id: "470", question: "¡Manipular con don!", result: "Sorcerer" },
    { id: "471", question: "¡Brillar con don!", result: "Sorcerer" },
    { id: "472", question: "¡Encantar con cuentos!", result: "Bard" },
    { id: "473", question: "¡Burlarte con cuentos!", result: "Bard" },
    { id: "474", question: "¡Chamuyar con cuentos!", result: "Bard" },
    { id: "475", question: "¡Chamuyar como galán!", result: "Bard" },
    { id: "476", question: "¡Inspirar con cuentos!", result: "Bard" },
    { id: "477", question: "¡Burlarte como cómico!", result: "Bard" },
    { id: "478", question: "¡Inspirar con chamuyo!", result: "Bard" },
    { id: "479", question: "¡Burlarte con chamuyo!", result: "Bard" },
    { id: "480", question: "¡Encantar como galán!", result: "Bard" },
    { id: "481", question: "¡Pelea con chamuyo!", result: "Sorcerer" },
    { id: "482", question: "¡Chamuyar como galán!", result: "Sorcerer" },
    { id: "483", question: "¡Brillar con chamuyo!", result: "Sorcerer" },
    { id: "484", question: "¡Pelea con chamuyo!", result: "Sorcerer" },
    { id: "485", question: "¡Chamuyar como galán!", result: "Sorcerer" },
    { id: "486", question: "¡Brillar como showman!", result: "Sorcerer" },
    { id: "487", question: "¡Manipular con chamuyo!", result: "Sorcerer" },
    { id: "488", question: "¡Brillar con chamuyo!", result: "Sorcerer" },
    { id: "489", question: "¡Chamuyar con magia!", result: "Sorcerer" }
];

export default questionTree;