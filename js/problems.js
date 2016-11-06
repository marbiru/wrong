var gdpSource = "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)";

var GDPs = [
["What is the annual GDP of the US?", "US Dollars", 18600000000000, ],
["What is the annual GDP of China?", "US Dollars", 11400000000000, gdpSource],
["What is the annual GDP of Japan?", "US Dollars", 4730000000000, gdpSource],
["What is the annual GDP of Germany?", "US Dollars", 3490000000000, gdpSource],
["What is the annual GDP of the UK?", "US Dollars", 2650000000000, gdpSource],
["What is the annual GDP of India?", "US Dollars", 2250000000000, gdpSource],
["What is the annual GDP of South Korea?", "US Dollars", 1400000000000, gdpSource],
["What is the annual GDP of Russia?", "US Dollars", 1270000000000, gdpSource],
];

var populationSource = "https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_population";

var populations = [
["What is the population of China?", "people", 1380000000, populationSource],
["What is the population of India?", "people", 1330000000, populationSource],
["What is the population of the US?", "people", 325000000, populationSource],
["What is the population of Indonesia?", "people", 261000000, populationSource],
["What is the population of Brazil?", "people", 207000000, populationSource],
["What is the population of Pakistan?", "people", 195000000, populationSource],
["What is the population of Nigeria?", "people", 187000000, populationSource],
["What is the population of Bangladesh?", "people", 161000000, populationSource],
];

var marketCapSource = "https://en.wikipedia.org/wiki/List_of_public_corporations_by_market_capitalization";

var marketCaps = [
["What is the market cap of Apple?", "US Dollars", 613000000000, marketCapSource],
["What is the market cap of Alphabet (Google)?", "US Dollars", 541000000000, marketCapSource],
["What is the market cap of Microsoft?", "US Dollars", 448000000000, marketCapSource],
["What is the market cap of Amazon?", "US Dollars", 401000000000, marketCapSource],
["What is the market cap of Exxon Mobil?", "US Dollars", 346000000000, marketCapSource],
["What is the market cap of Johnson & Johnson?", "US Dollars", 300000000000, marketCapSource],
["What is the market cap of General Electric?", "US Dollars", 296000000000, marketCapSource],
["What is the market cap of Tencent?", "US Dollars", 261000000000, marketCapSource],
];

var richPeopleSource = "http://www.forbes.com/billionaires/list/#version:static";

var richPeople = [
["What is the Bill Gate's net worth?", "US Dollars", 75000000000, richPeopleSource],
["What is the Mark Zuckerberg's net worth?", "US Dollars", 44600000000, richPeopleSource],
["What is the Oprah Winfrey's net worth?", "US Dollars", 3000000000, richPeopleSource],
["What is the Jay Z's net worth?", "US Dollars", 520000000, "https://en.wikipedia.org/wiki/Jay_Z"],
["What is the Taylor Swift's net worth?", "US Dollars", 250000000, "https://en.wikipedia.org/wiki/Taylor_Swift"],
];

var astroSource = "http://www.wolframalpha.com/";

var astroDistances = [
["How far is the Sun from Earth?", "Kilometers", 149600000, astroSource],
["How far is the Moon from Earth?", "Kilometers", 385000, astroSource],
["How far is the Moon from Alpha Centurai (nearest star system)?", "Kilometers", 41530000000000, astroSource],
["What is the speed of light?", "metres per second", 299800000, astroSource],
];

var problems = GDPs.concat(populations, marketCaps, richPeople, astroDistances);










