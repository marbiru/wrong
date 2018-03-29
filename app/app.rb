## QUESTIONS
# 2. If I can store them on the session, can I access session across ajax request?
# 3. If no to either, can I store them on sessionStorage?  If I do, then I should just leave the JS code as it is and build the DB out as the questions are pulled

# app.rb
require "json"
require "pry"

get "/" do
  puts "indexin"
  erb :index
end

get "/init" do
  Problem.all.shuffle.to_json
end

post "/record_answer" do
  post_body = JSON.parse(request.body.read)
  problem_id, response_value = validate_and_destructure_data(post_body)

  if problem_id
    Response.create(
      response_value: response_value,
      problem_id: problem_id
    )
    status 201
    {ok: "Answer recorded"}.to_json
  else
    status 400
    {err: "bad params"}.to_json
  end
end

options "*" do
  response.headers["Allow"] = "GET, POST, OPTIONS"
  response.headers["Access-Control-Allow-Headers"] = "Authorization, Content-Type, Accept, X-Auth-Token, Origin"
  response.headers["Access-Control-Allow-Origin"] = "*"
  200
end

private

def validate_and_destructure_data(post_body)
  problem_id = post_body["problem_id"]
  response_value = post_body["response_value"]
  if Problem.find_by(id: problem_id) && !response_value.match?(/\D/)
      [problem_id, response_value]
  else
    nil
  end
end
