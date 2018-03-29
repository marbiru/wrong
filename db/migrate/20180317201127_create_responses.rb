class CreateResponses < ActiveRecord::Migration
  def change
    create_table :responses do |t|
      t.integer :response_value

      t.timestamps null: false
    end
  end
end
