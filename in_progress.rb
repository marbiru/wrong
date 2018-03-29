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
