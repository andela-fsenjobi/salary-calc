states = [ "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Lagos", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyomin"]
titles = [ "Professors", "Teachers", "Clergy", "Philosophers", "Anesthesiologists","Audiologists","Chiropractors","Dentists","Dietitians","Nurses","Optometrists","Pharmacists","Physical therapists","Physicians","Podiatrists","Psychologists","Radiographers","Radiotherapists","Speech-language pathologists","Surgeons","Veterinarians","Accountants","Actuaries","Airline Pilots","Architects","Engineers","Linguistics","Translators","Interpreters","Surveyors","Military","Lawyers","Social Workers","Police officer","Health inspector","Park ranger" ]

states.each { |state| State.create(name: state) }
titles.each { |title| JobTitle.create(name: title) }

titles.each_with_index do |state, title_id|
  states.each_with_index do |title, state_id|
    Salary.create(state_id: state_id+1, title_id: title_id+1, salary: rand(30000..220000))
  end
end
