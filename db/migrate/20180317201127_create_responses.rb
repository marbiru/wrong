class CreateResponses < ActiveRecord::Migration[4.2]
  def change
    create_table :responses do |t|
      t.integer :response_value
      t.references :problem, index: true, foreign_key: "problem_id"
    end
  end
end
