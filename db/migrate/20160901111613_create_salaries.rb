class CreateSalaries < ActiveRecord::Migration[5.0]
  def change
    create_table :salaries do |t|
      t.references :title
      t.references :state
      t.integer :salary

      t.timestamps
    end
  end
end
