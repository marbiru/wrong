class Problem < ActiveRecord::Base
  has_many :responses
end


class Response < ActiveRecord::Base
  belongs_to :problem
end


class CreateResponses < ActiveRecord::Migration
  def change
    create_table :responses do |t|
      t.integer :response_value

      t.timestamps null: false
    end
  end
end


class CreateProblems < ActiveRecord::Migration
  def change
    create_table :problems do |t|
      t.string :question
      t.string :unit
      t.float :solution
      t.string :source

      t.timestamps null: false
    end
  end
end


#####
SEEDS
#####

GDP = "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)"
POPULATION = "https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_population";
MARKETCAP = "https://en.wikipedia.org/wiki/List_of_public_corporations_by_market_capitalization";
RICH_PEOPLE = "http://www.forbes.com/billionaires/list/#version:static";
ASTRO = "http://www.wolframalpha.com/";
BUILDINGS = "https://en.wikipedia.org/wiki/List_of_tallest_buildings";


problems = [
  ["What is the annual GDP of the US?", "US Dollars", 18600000000000, GDP],
  ["What is the annual GDP of China?", "US Dollars", 11400000000000, GDP],
  ["What is the annual GDP of Japan?", "US Dollars", 4730000000000, GDP],
  ["What is the annual GDP of Germany?", "US Dollars", 3490000000000, GDP],
  ["What is the annual GDP of the UK?", "US Dollars", 2650000000000, GDP],
  ["What is the population of China?", "people", 1380000000, POPULATION],
  ["What is the population of India?", "people", 1330000000, POPULATION],
  ["What is the population of the US?", "people", 325000000, POPULATION],
  ["What is the market cap of Apple?", "US Dollars", 613000000000, MARKETCAP],
  ["What is the market cap of Alphabet (Google)?", "US Dollars", 541000000000, MARKETCAP],
  ["What is the market cap of Microsoft?", "US Dollars", 448000000000, MARKETCAP],
  ["What is the market cap of Amazon?", "US Dollars", 401000000000, MARKETCAP],
  ["What is the market cap of Exxon Mobil?", "US Dollars", 346000000000, MARKETCAP],
  ["What is the market cap of Johnson & Johnson?", "US Dollars", 300000000000, MARKETCAP],
  ["What is Bill Gate's net worth?", "US Dollars", 75000000000, RICH_PEOPLE],
  ["What is Mark Zuckerberg's net worth?", "US Dollars", 44600000000, RICH_PEOPLE],
  ["What is Oprah Winfrey's net worth?", "US Dollars", 3000000000, RICH_PEOPLE],
  ["What is Jay Z's net worth?", "US Dollars", 520000000, "https://en.wikipedia.org/wiki/Jay_Z"],
  ["What is Taylor Swift's net worth?", "US Dollars", 250000000, "https://en.wikipedia.org/wiki/Taylor_Swift"],
  ["How far is the Sun from Earth?", "Kilometers", 149600000, ASTRO],
  ["How far is the Moon from Earth?", "Kilometers", 385000, ASTRO],
  ["How far is the Earth from Alpha Centurai (nearest star system)?", "Kilometers", 41530000000000, ASTRO],
  ["What is the speed of light?", "metres per second", 299800000, ASTRO],
  ["How tall is the Burj Khalifa (world's tallest building)?", "Meters", 829.8, BUILDINGS],
  ["How tall is the Empire State Building?", "Meters", 381, BUILDINGS],
  ["How tall is Mount Everest?", "Meters", 8848, "https://en.wikipedia.org/wiki/List_of_highest_mountains_on_Earth"],
  ["How tall is Kilimanjaro?", "Meters", 4900, "https://en.wikipedia.org/wiki/Mount_Kilimanjaro"],
]

problems.map do |problem|
  unless Problem.find_by_question(problem[0])
    Problem.create(question: problem[0], unit: problem[1], solution: problem[2], source: problem[3])
  end
end


class ProblemsController < ApplicationController

  @eligible = []

  def take_question
    return "No more questions, sorry!" @eligible.empty?
    @eligible.shuffle!.pop
  end

  private

  def init_eligible_questions
    @eligible << all_problems
  end

  def all_problems
    @all_problems ||= Problem.all
  end
end


class ProblemsController < ApplicationController

  @served_questions = {}

  def index
    get_a_question
  end


  private

  def all_problem_ids
    @all_problem_ids ||= Problem.pluck(:id)
  end

  def init_served_questions
    all_problem_ids.each do |p_id|
      @served_questions[p_id] = false
    end
  end

  def get_a_quesiton
    return "No more questions, sorry!" if finished_questions?

    rand_id = all_problem_ids.sample
    if @served_questions[rand_id]
      @served_questions[rand_id] = true
      Problem.find(ran_id)
    else
      get_a_question
    end
  end

  def finished_questions?
    # are all the hash values flipped to true?
    @served_questions.values.all?
  end
end
