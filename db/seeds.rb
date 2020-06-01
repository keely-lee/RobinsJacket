# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#ASK ABOUT DROPPING TABLES

hermione = User.create(email: "hgranger@gmail.com", password: "password1")
harry = User.create(email: "hpotter@gmail.com", password: "password2")
ron = User.create(email: "rweasley@gmail.com", password: "password3")