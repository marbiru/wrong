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

