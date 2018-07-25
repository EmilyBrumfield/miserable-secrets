const REGION = {

    CA: "Under Green Shadow - Scent of Summer",
    C2: "By the Waters - Riverport",
    C3: "Skeleton City - Tower Town",
    C4: "Big Sky Plains - Season’s Nomad Camp",
    C5: "Among The Crags - Shadowed Valley",
    CQ: "Edge of the Wastes - Last Water",
    SA: "Under Green Shadow - Edge of the Green",
    S2: "By the Waters - Seaport", 
    S3: "Skeleton City - Scavtown",
    S4: "Big Sky Plains - Waves of Grain",
    S5: "Among The Crags - In The Foothills",
    SQ: "Edge of the Wastes - Clean Oasis",
    DA: "Under Green Shadow - Overgrown",
    D2: "By the Waters - In the Marsh",
    D3: "Skeleton City - Feral Parkland",
    D4: "Big Sky Plains - Turbine Farm",
    D5: "Among The Crags - Thin Air",
    DQ: "Edge of the Wastes - Blacktop Battlezone",
    HA: "Under Green Shadow - Bunkertown",
    H2: "By the Waters - Floodtown",
    H3: "Skeleton City - Tunneltown",
    H4: "Big Sky Plains - Badlands",
    H5: "Among The Crags - Mountain Fastness",
    HQ: "Edge of the Wastes - Radiation Blistered"
}

const LANDMARK = {

    CA: "Unexplored Cave System",
    C2: "Standing Stones",
    C3: "Deep Lake",
    C4: "Rich Fossil Beds",
    C5: "Hot Springs",
    CQ: "Ancient Tombs",
    SA: "Stables",
    S2: "Central Well",
    S3: "Smithy",
    S4: "Aqueduct",
    S5: "Machine Graveyard",
    SQ: "Regional Court",
    DA: "Graveyard",
    D2: "School",
    D3: "Abbey",
    D4: "Regional Guildhouse",
    D5: "Ecclesiastical Court",
    DQ: "Famous Holy Shrine",
    HA: "Rowdy Tavern",
    H2: "Rooming House",
    H3: "Amphitheater",
    H4: "Bathhouse",
    H5: "Library",
    HQ: "Pleasure Garden"
}

const OCCUPATION = {

    CA: "Child",
    C2: "Youth",
    C3: "Herder",
    C4: "Herbalist",
    C5: "Farmer",
    CQ: "Witch",
    SA: "Constable",
    S2: "Carpenter",
    S3: "Brewer",
    S4: "Miller",
    S5: "Blacksmith",
    SQ: "Merchant",
    DA: "Priest",
    D2: "Scholar",
    D3: "Teacher",
    D4: "Beadle",
    D5: "Physician",
    DQ: "Wise One",
    HA: "Artist",
    H2: "Potter",
    H3: "Musician",
    H4: "Judge",
    H5: "Town Counselor",
    HQ: "Mayor"
}

const QUIRK = {

    CA: "A former soldier.",
    C2: "Inherited a grand house.",
    C3: "Famously beautiful singing voice.",
    C4: "Sitting on a fortune in art.",
    C5: "Unbreakable loyalty.",
    CQ: "Highly skeptical of claims about the supernatural.",
    SA: "The town's most famous beauty.",
    S2: "A touch of Wolf's blood.",
    S3: "Madly, wonderfully in love.",
    S4: "A near miraculous healing touch.",
    S5: "A deft hand with the fiddle.",
    SQ: "Unfailingly generous.",
    DA: "Member of the mortal clergy.",
    D2: "The gift of second sight.",
    D3: "A confidante to the powerful.",
    D4: "A touch of Noble blood.",
    D5: "Comfortably rich.",
    DQ: "Seems genuinely trustworthy.",
    HA: "Fearless.",
    H2: "Easy to like.",
    H3: "Owns a great deal of real estate.",
    H4: "Will come into a fortune when they marry.",
    H5: "Gifted poet.",
    HQ: "Unfailingly honest."
}

const TROUBLE = {

    CA: "Has greatly exaggerated their skills.",
    C2: "An imposter living under a stolen name.",
    C3: "Infected with a curse nearing its culmination.",
    C4: "Dying of an unknown exotic disease.",
    C5: "Owes a great deal of money to the Wrong People.",
    CQ: "Haunted by a restless soul.",
    SA: "Only witness to an unsolve murder, and too scared to testify.",
    S2: "Haunted by dreams of a coming doom.",
    S3: "Tragically enthralled by forbidden love.",
    S4: "Secretly sewn together from the parts of dead people.",
    S5: "Initiate of a savage cult.",
    SQ: "Fighting a terrible addiction.",
    DA: "Amnesiac unaware of their former life.",
    D2: "Being blackmailed for a secret sin.",
    D3: "Helped bury evidence of a loved one's crime.",
    D4: "A ghost, dead but unaware of it.",
    D5: "Deeply in debt, and borrowing more to keep up appearances.",
    DQ: "Baptized in a pagan faith.",
    HA: "Violent drunk.",
    H2: "A spy who has betrayed the town to outsiders.",
    H3: "Serially unfaithful.",
    H4: "Missing the hours of sunrise and sunset, with no memory of what they do during those times.",
    H5: "Buried alive by unknown murderer, and only barely survived.",
    HQ: "Secretly a cunning machine-mind automaton."
}

const NOBLESSE = {

    A: "A Free City, having wholly thrown off Noble rule.",
    2: "Active plots to rebel against Noble rule.",
    3: "A distant Noble who is mostly ignored.",
    4: "A Noble who makes occasional demands or pronouncements, but rarely acts directly.",
    5: "Noble rule is felt in everyday life, though the town may not be in direct vassalage to the Liege.",
    Q: "Directly overseen by a Noble, with all locals direct vassals to the Liege."
}

const CHURCH = {

    A: "A pagan town, almost entirely Unchurched.",
    2: "Mostly still pagan, with a minority of Christian congregants.",
    3: "Casual churchgoing mixed with pagan and folk religion.",
    4: "Christendom predominates, with pagan faiths pushed out or pushed underground.",
    5: "A strong center of Church worship, with no open pagan worship.",
    Q: "A center of orthodox theological observance, with no known pagan worship."
}

const HEALTH = {

    A: "Plague time, dying time.",
    2: "Afflicted by many chronic and seasonal pestilences.",
    3: "Occasional pestilence not chronic.",
    4: "Deadly illness is rare, though not entirely unknown.",
    5: "All illness is rare, though not entirely unknown.",
    Q: "Almost universal health and longevity."
}

const PROSPERITY = {

    A: "Ruined. Almost universal poverty.",
    2: "Grinding poverty, though some few have more than they need.",
    3: "Many are poor, some are rich, and some aspire to riches.",
    4: "The comfortable outnumber the poor.",
    5: "The wealthy outnumber the poor.",
    Q: "Many are wealthy, none are truly poor."
}

const HARMONY = {

    A: "Open armed conflict between clans and factions.",
    2: "Constant danger of factional violence.",
    3: "Simmering tensions, occasionally resulting in factional violence.",
    4: "Generally harmonious, though a great shock might still drive violence.",
    5: "Very peaceable, with locals pursuing dialogue over violence with possible.",
    Q: "A town that speaks with one voice."
}

const JUSTICE = {

    A: "No courts, and the only law is Clan Law and blood feud.",
    2: "Courts are called only for major crime, Clan Law dominates otherwise.",
    3: "Clan Law and the courts compete to win hearts and provide justice.",
    4: "The courts provide most of the justice in town, and Clan Law is pushed into the shadows.",
    5: "Applying Clan Law is illegal, and the courts work hard to achieve justice.",
    Q: "The courts manage justice efficiently, supported by a professional constable service."
}

const THEME = {

    CA: "Market - Caravansary",
    C2: "Agriculture - Herding",
    C3: "Crossroads - Place of Pilgrimage",
    C4: "Craft - Carpentry",
    C5: "Industry - Slaughterhouses",
    CQ: "Seat of Power - Noble",
    SA: "Market - Seasonal Market",
    S2: "Agriculture - Orchards",
    S3: "Crossroads - Contested Borderland", 
    S4: "Craft - Stone-cutting",
    S5: "Industry - Smelting",
    SQ: "Seat of Power - Church",
    DA: "Market - Bazaar",
    D2: "Agriculture - Gardens",
    D3: "Crossroads - Refugee Crisis",
    D4: "Craft - Brewing",
    D5: "Industry - Lumber",
    DQ: "Seat of Power - Warlord",
    HA: "Market - Illicit Trade",
    H2: "Agriculture - Psychedelics",
    H3: "Crossroads - Smuggler’s Den",
    H4: "Craft - Weaving",
    H5: "Industry - Mining",
    HQ: "Seat of Power - Criminal"
}

const TROUBLES = {
    CA: "A monster native to the region stalks the outlying cottages and farms",
    C2: "A mysterious explosion destroys an otherwise innocuous building",
    C3: "Marauders threaten to burn the town unless it complies with their demands",
    C4: "A highly addictive drug is given to local youth, with the promise of more if they comply with some simple demands",
    C5: "A sinkhole opens suddenly, consuming several cottages, and the people within",
    CQ: "A local’s past as a mercenary solider catches up with them when their former comrades arrive and demand the local leave with them",
    SA: "A monster of unknown type and foreign nature stalks the town and none know its name or how to stop it",
    S2: "A shady character has opened a gambling den, and a surprising number of locals find themselves as regular patrons, despite many being strongly averse to games of chance and wagers. When their losses mount, the shady character offers a deal to help clear those debts.",
    S3: "During renovations of the Mayor’s Court, the bones of a ritually sacrificed youth are found packed into the floorboards beneath the judge’s stand, surrounded by the symbols of daemonic worship",
    S4: "The crows have begun hanging about, and muttering about the great feast to come",
    S5: "A rash of poisoned wells has left several families terribly ill, and a few old folks dead.",
    SQ: "An ominous cloud hangs over the town, and lighting stabs downwards, though only seems to threaten members of a single clan",
    DA: "Monsters normally too stupid or animalist to work together have begun to attack the town as an organized force, with surprising tactical acumen",
    D2: "Major local industry or trade collapses, plunging the town into potential ruin",
    D3: "Fire ravages the local church, leaving it a burnt-out shell and destroying everything within.",
    D4: "A zealot priest militant has come to town to persecute witches, and seems to have no trouble finding targets they deem infernal enough to harass",
    D5: "A popular child has run afoul of Wolves while playout outside of town, and they howl louder and creep closer every night until the child is given over to them, or somebody intervenes somehow.",
    DQ: "A genealogical researcher finds evidence that the first family of the town are illegitimate heirs to the family name and fortunes.",
    HA: "A monster demands to be admitted to the town as a citizen, and offers to share its wealth and power to help the town. The price it asks seems so small.",
    H2: "Children are snatched in the night, and last night the child of somebody very powerful was taken",
    H3: "A harbinger is planting Greenseed around the town",
    H4: "A betrothed youth has vanished on their wedding night",
    H5: "The Mayor is dead, killed by a single stab to the heart.",
    HQ: "A foreign noble has arrived in town for mysterious reasons. They and their people are unfailingly polite, but many of the local youth have come down with acute anemia."
}

/*
const TEMPLATE = {

    CA: "",
    C2: "",
    C3: "",
    C4: "",
    C5: "",
    CQ: "",
    SA: "",
    S2: "",
    S3: "",
    S4: "",
    S5: "",
    SQ: "",
    DA: "",
    D2: "",
    D3: "",
    D4: "",
    D5: "",
    DQ: "",
    HA: "",
    H2: "",
    H3: "",
    H4: "",
    H5: "",
    HQ: ""
}

const TEMPLATE2 = {

    CA:
    C2:
    C3:
    C4:
    C5:
    CQ:
    SA:
    S2:
    S3:
    S4:
    S5:
    SQ:
    DA:
    D2:
    D3:
    D4:
    D5:
    DQ:
    HA:
    H2:
    H3:
    H4:
    H5:
    HQ:
}

const TEMPLATE3 = {

    A: "",
    2: "",
    3: "",
    4: "",
    5: "",
    Q: ""
}

*/