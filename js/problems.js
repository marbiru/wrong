var gdpSource = "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)";

var GDPs = [
["What is the annual GDP of the US?", "US Dollars", 18600000000000, ],
["What is the annual GDP of China?", "US Dollars", 11400000000000, gdpSource],
["What is the annual GDP of Japan?", "US Dollars", 4730000000000, gdpSource],
["What is the annual GDP of Germany?", "US Dollars", 3490000000000, gdpSource],
["What is the annual GDP of the UK?", "US Dollars", 2650000000000, gdpSource],
];

var populationSource = "https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_population";

var populations = [
["What is the population of China?", "people", 1380000000, populationSource],
["What is the population of India?", "people", 1330000000, populationSource],
["What is the population of the US?", "people", 325000000, populationSource],
];

var marketCapSource = "https://en.wikipedia.org/wiki/List_of_public_corporations_by_market_capitalization";

var marketCaps = [
["What is the market cap of Apple?", "US Dollars", 613000000000, marketCapSource],
["What is the market cap of Alphabet (Google)?", "US Dollars", 541000000000, marketCapSource],
["What is the market cap of Microsoft?", "US Dollars", 448000000000, marketCapSource],
["What is the market cap of Amazon?", "US Dollars", 401000000000, marketCapSource],
["What is the market cap of Exxon Mobil?", "US Dollars", 346000000000, marketCapSource],
["What is the market cap of Johnson & Johnson?", "US Dollars", 300000000000, marketCapSource],
];

var richPeopleSource = "http://www.forbes.com/billionaires/list/#version:static";

var richPeople = [
["What is Bill Gate's net worth?", "US Dollars", 75000000000, richPeopleSource],
["What is Mark Zuckerberg's net worth?", "US Dollars", 44600000000, richPeopleSource],
["What is Oprah Winfrey's net worth?", "US Dollars", 3000000000, richPeopleSource],
["What is Jay Z's net worth?", "US Dollars", 520000000, "https://en.wikipedia.org/wiki/Jay_Z"],
["What is Taylor Swift's net worth?", "US Dollars", 250000000, "https://en.wikipedia.org/wiki/Taylor_Swift"],
];

var astroSource = "http://www.wolframalpha.com/";

var astroDistances = [
["How far is the Sun from Earth?", "Kilometers", 149600000, astroSource],
["How far is the Moon from Earth?", "Kilometers", 385000, astroSource],
["How far is the Earth from Alpha Centurai (nearest star system)?", "Kilometers", 41530000000000, astroSource],
["What is the speed of light?", "metres per second", 299800000, astroSource],
];

var buildingsSource = "https://en.wikipedia.org/wiki/List_of_tallest_buildings";

var heights = [
["How tall is the Burj Khalifa (world's tallest building)?", "Meters", 829.8, buildingsSource],
["How tall is the Empire State Building?", "Meters", 381, buildingsSource],
["How tall is Mount Everest?", "Meters", 8848, "https://en.wikipedia.org/wiki/List_of_highest_mountains_on_Earth"],
["How tall is Kilimanjaro?", "Meters", 4900, "https://en.wikipedia.org/wiki/Mount_Kilimanjaro"],
]

var problems = GDPs.concat(populations, marketCaps, richPeople, astroDistances, heights);