# Ruby Program to understand Global Variable

# Global variable
$global_variable = 10

# Defining class with parameter
class Class1
  # Class variable
  @@class_ver = 20

  # Initializer to accept a parameter
  def initialize(param)
    @param = param
  end

  # Method to print global variable and instance variable
  def print_global
    puts "Global variable in Class1 is #{$global_variable}"
    puts "Instance variable in Class1 is #{@param}"
    puts "Class variable in Class1 is #{@@class_ver}"
  end

  # Method to access class variable
  def self.class_ver
    @@class_ver
  end
end

# Defining another class
class Class2
  def print_global
    puts "Global variable in Class2 is #{$global_variable}"
  end
end

# Creating an object of Class1 with a parameter
class1obj = Class1.new("Hello, World!")
class1obj.print_global

# Creating another object of Class2
class2obj = Class2.new
class2obj.print_global
