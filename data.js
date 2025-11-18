const animals = [
    {
        name: "Обыкновенный бегемот",
        country: "Африка",
        image: "images/hippopotamus-amphibius.jpg"
    },
    {
        name: "Короткоухий слоновый прыгунчик",
        country: "Африка",
        image: "images/macroscelides-proboscideus.jpg"
    },
    {
        name: "Мартышка Мона",
        country: "Африка",
        image: "images/cercopithecus-mona.jpg"
    },
    {
        name: "Африканский лев",
        country: "Африка",
        image: "images/panthera-leo-nubica.jpg"
    },
    {
        name: "Жираф",
        country: "Африка",
        image: "images/giraffa-camelopardalis.jpg"
    },
    {
        name: "Кошачий лемур",
        country: "Мадагаскар",
        image: "images/lemur-catta.jpg"
    },
    {
        name: "Руконожка",
        country: "Мадагаскар",
        image: "images/daubentonia-madagascariensis.jpg"
    },
    {
        name: "Фосса",
        country: "Мадагаскар",
        image: "images/cryptoprocta-ferox.jpg"
    },
    {
        name: "Воалаво",
        country: "Мадагаскар",
        image: "images/hypogeomys-antimena.jpg"
    },
    {
        name: "Листохвостый геккон",
        country: "Мадагаскар",
        image: "images/uroplatus-guentheri.jpg"
    },
    {
        name: "Гигантский серый кенгуру",
        country: "Австралия",
        image: "images/macropus-giganteus.jpg"
    },
    {
        name: "Прыткий валлаби",
        country: "Австралия",
        image: "images/macropus-agilis.jpg"
    },
    {
        name: "Сахарная сумчатая летяга",
        country: "Австралия",
        image: "images/petaurus-breviceps.jpg"
    },
    {
        name: "Коала",
        country: "Австралия",
        image: "images/phascolarctos-cinereus.jpg"
    },
    {
        name: "Динго",
        country: "Австралия",
        image: "images/canis-lupus-dingo.jpg"
    },
    {
        name: "Росомаха",
        country: "Северная Америка",
        image: "images/gulo-gulo.jpg"
    },
    {
        name: "Койот",
        country: "Северная Америка",
        image: "images/canis-latrans.jpg"
    },
    {
        name: "Барибал",
        country: "Северная Америка",
        image: "images/ursus-americanus.jpg"
    },
    {
        name: "Рыжая рысь",
        country: "Северная Америка",
        image: "images/lynx-rufus.jpg"
    },
    {
        name: "Пума",
        country: "Северная Америка",
        image: "images/puma-concolor.jpg"
    },
    {
        name: "Двупалый ленивец",
        country: "Южная Америка",
        image: "images/choloepus-didactylus.jpg"
    },
    {
        name: "Обыкновенная игрунка",
        country: "Южная Америка",
        image: "images/callithrix-jacchus.jpg"
    },
    {
        name: "Рыжий ревун",
        country: "Южная Америка",
        image: "images/alouatta-seniculus.jpg"
    },
    {
        name: "Чёрный кайман",
        country: "Южная Америка",
        image: "images/melanosuchus-niger.jpg"
    },
    {
        name: "Равнинный тапир",
        country: "Южная Америка",
        image: "images/tapirus-terrestris.jpg"
    },
    {
        name: "Волк",
        country: "Евразия",
        image: "images/canis-lupus.jpg"
    },
    {
        name: "Карликовый лори",
        country: "Евразия",
        image: "images/nycticebus-pygmaeus.jpg"
    },
    {
        name: "Амурский леопард",
        country: "Евразия",
        image: "images/panthera-pardus-orientalis.jpg"
    },
    {
        name: "Бинтуронг",
        country: "Евразия",
        image: "images/arctictis-binturong.jpg"
    },
    {
        name: "Белорукий гиббон",
        country: "Евразия",
        image: "images/hylobates-lar.jpg"
    },
    {
        name: "Амурский тигр",
        country: "Россия",
        image: "images/panthera-tigris-altaica.jpg"
    },
    {
        name: "Заяц-русак",
        country: "Россия",
        image: "images/lepus-europaeus.jpg"
    },
    {
        name: "Бурый медведь",
        country: "Россия",
        image: "images/ursus-arctos.jpg"
    },
    {
        name: "Кабан",
        country: "Россия",
        image: "images/sus-scrofa.jpg"
    },
    {
        name: "Лось",
        country: "Россия",
        image: "images/alces-alces.jpg"
    },
    {
        name: "Суматранский орангутан",
        country: "Юго-Восточная Азия",
        image: "images/pongo-abelii.jpg"
    },
    {
        name: "Кошка-рыболов",
        country: "Юго-Восточная Азия",
        image: "images/felis-viverrina.jpg"
    },
    {
        name: "Гребнистый крокодил",
        country: "Юго-Восточная Азия",
        image: "images/crocodylus-porosus.jpg"
    },
    {
        name: "Малайский дикобраз",
        country: "Юго-Восточная Азия",
        image: "images/hystrix-brachyura.jpg"
    },
    {
        name: "Обыкновенная тупайа",
        country: "Юго-Восточная Азия",
        image: "images/tupaia-glis.jpg"
    },
    {
        name: "Белый медведь",
        country: "Арктика",
        image: "images/ursus-maritimus.jpg"
    },
    {
        name: "Полярный волк",
        country: "Арктика",
        image: "images/canis-lupus-arctos.jpg"
    },
    {
        name: "Морж",
        country: "Арктика",
        image: "images/odobenus-rosmarus.jpg"
    },
    {
        name: "Кольчатая нерпа",
        country: "Арктика",
        image: "images/phoca-hispida.jpg"
    },
    {
        name: "Песец",
        country: "Арктика",
        image: "images/alopex-lagopus.jpg"
    },
    {
        name: "Странствующий альбатрос",
        country: "Антарктида",
        image: "images/diomedea-exulans.jpg"
    },
    {
        name: "Антарктический пингвин",
        country: "Антарктида",
        image: "images/pygoscelis-antarcticus.jpg"
    },
    {
        name: "Императорский пингвин",
        country: "Антарктида",
        image: "images/aptenodytes-forsteri.jpg"
    },
    {
        name: "Южный морской слон",
        country: "Антарктида",
        image: "images/mirounga-leonina.jpg"
    },
    {
        name: "Косатка",
        country: "Антарктида",
        image: "images/Orcinus_orca.jpg"
    },
];
