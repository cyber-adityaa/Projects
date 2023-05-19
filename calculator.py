# Define a function to perform calculations

def calculate(num1, num2, operator):

    if operator == '+':

        return num1 + num2

    elif operator == '-':

        return num1 - num2

    elif operator == '*':

        return num1 * num2

    elif operator == '/':

        if num2 == 0:

            return "Cannot divide by zero"

        else:

            return num1 / num2

    elif operator == '%':

        return num1 % num2

    elif operator == '**':

        return num1 ** num2

    elif operator == '//':

        if num2 == 0:

            return "Cannot divide by zero"

        else:

            return num1 // num2

    else:

        return "Invalid operator"

# Get user input

num1 = float(input("Enter first number: "))

operator = input("Enter operator (+, -, *, /, %, **, //): ")

num2 = float(input("Enter second number: "))

# Call the calculate function and print the result

result = calculate(num1, num2, operator)

print("Result: ", result)
