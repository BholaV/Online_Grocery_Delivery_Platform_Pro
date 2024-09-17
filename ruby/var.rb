# Ruby Program to demonstrate various variable types

# Global Variable
$global_variable = "I am a global variable"

# Class Definition
class Example
  # Class Variable
  @@class_variable = "I am a class variable"
  @instance_variable;
  # Initializer Method
  def initialize(instance_var)
    @instance_variable = instance_var
    # Instance Variable
  end

  # Method to demonstrate variable types
  def demonstrate_variables
    # Local Variable
    local_variable = "I am a local variable"

    # Output all variables
    puts "Global Variable: #{$global_variable}"
    puts "Class Variable: #{@@class_variable}"
    puts "Instance Variable: #{@instance_variable}"
    puts "Local Variable: #{local_variable}"
  end

  # Class Method to access class variable
  def self.class_variable
    @@class_variable
  end
end

# Creating an instance of Example
example_instance = Example.new("I am an instance variable")

# Call method to demonstrate variable types
example_instance.demonstrate_variables

# Access class variable using class method
puts "Accessing Class Variable via Class Method: #{Example.class_variable}"

# Demonstrate constants
MY_CONSTANT = "I am a constant"
puts "Constant: #{MY_CONSTANT}"

# Uncommenting the line below will raise an error because constants should not be changed
# MY_CONSTANT = "Trying to change a constant" # Warning: already initialized constant MY_CONSTANT
