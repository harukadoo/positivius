import random

def main(): 

    #-----------------Zad 1-------------------

    try:
        numerator = 10  
        denominator = 0  
        result = numerator / denominator

    except ZeroDivisionError:
        print("Error: Attempt to divide by zero!") 


    #-----------------Zad 2-------------------

    def divide_numbers(num1, num2):
        try:
            result = num1 / num2 
            return result
        
        except ZeroDivisionError:
            return "Error: Cannot divide by zero!"

    print(divide_numbers(10, 2)) 
    print(divide_numbers(10, 0)) 


    #------------------Zad 3-------------------

    try:
        with open('file.txt', 'r') as file:
            content = file.read() 
            print(content)

    except IOError:
        print("Error: The file was not found or could not be opened.")


    #-----------------Zad 4-------------------

    class CustomException(Exception):
        pass

    def check_positive_number(number):
        if number < 0:
            raise CustomException("Error: The number is negative!") 
        return number

    try:
        result = check_positive_number(-5)

    except CustomException as e:
        print(f"Handled CustomException: {e}")


    #-------------------Zad 5--------------------

    def check_login(login):
        if " " in login or not login.isalnum():
            raise ValueError("Invalid login: Login contains forbidden characters (e.g., spaces).")
        
        return "Login is valid"

    try:
        user_login = input("Enter your login: ")
        result = check_login(user_login) 
        print(result)

    except ValueError as e:
        print(f"Error: {e}") 


    #-------------------Zad 6---------------------

    class Book:
        def __init__(self, title, total_pages):
            self.title = title  
            self.total_pages = total_pages  
            self.current_page = 1  

        def next_page(self):
            if self.current_page >= self.total_pages:
                raise IndexError("Cannot go to the next page. You've reached the end of the book.")
            
            self.current_page += 1

        def get_current_page(self):
            return self.current_page

    try:
        my_book = Book("Python Programming", 100)
        print(f"Current page: {my_book.get_current_page()}")

        for _ in range(102):
            my_book.next_page()
            print(f"Turned to page: {my_book.get_current_page()}")

    except IndexError as e:
        print(f"Error: {e}") 


    #------------------Zad 7--------------------

    def is_prime(number):
        if not isinstance(number, int):
            raise TypeError("The input must be an integer.")
        
        if number < 2:
            return False
        
        for i in range(2, int(number ** 0.5) + 1):
            if number % i == 0:
                return False
        
        return True

    try:
        num = int(input("Enter a number: ")) 
        if is_prime(num):
            print(f"{num} is a prime number.")
        else:
            print(f"{num} is not a prime number.")

    except TypeError as e:
        print(f"Error: {e}") 


    #-----------------Zad 8-------------------

    def calculate_monthly_payment(principal, annual_rate, years):
        monthly_rate = annual_rate / 100 / 12
        total_payments = years * 12

        monthly_payment = (principal * monthly_rate) / (1 - (1 + monthly_rate) ** -total_payments)
        return monthly_payment

    try:
        principal = float(input("Enter the loan amount (principal): "))  
        annual_rate = float(input("Enter the annual interest rate (in %): ")) 
        years = int(input("Enter the number of years for the loan: "))  
        
        if principal <= 0 or annual_rate <= 0 or years <= 0:
            raise ValueError("The loan amount, interest rate, and years must be positive values.")

        monthly_payment = calculate_monthly_payment(principal, annual_rate, years)

        print(f"Your monthly mortgage payment is: {monthly_payment:.2f}")
    except ValueError as e:
        print(f"Error: {e}")

    except ZeroDivisionError:
        print("Error: Annual interest rate cannot be zero.")


    #----------------------Zad 9---------------------

    def exponentiate(base, exponent):
        return base ** exponent

    try:
        base = input("Enter the base number: ")  
        exponent = input("Enter the exponent: ")  
        
        base = int(base)
        exponent = int(exponent)
        
        result = exponentiate(base, exponent)
        
        print(f"{base} raised to the power of {exponent} is: {result}")

    except ValueError:
        print("Error: Please enter valid integer values.")

    except TypeError as e:
        print(f"Error: {e}") 



    #-------------------Zad 10--------------------

    def guess_the_number():
        target_number = random.randint(1, 100)
        attempts = 0

        print("Welcome to the Guess the Number game!")
        print("I have selected a number between 1 and 100. Try to guess it.")

        while True:
            try:
                guess = input("Enter your guess: ")

                guess = int(guess)
                
                if guess < 1 or guess > 100:
                    raise ValueError("The guess must be between 1 and 100.")
                
                attempts += 1

                if guess < target_number:
                    print("Too low! Try again.")

                elif guess > target_number:
                    print("Too high! Try again.")
                else:
                    print(f"Congratulations! You've guessed the number in {attempts} attempts.")
                    break

            except ValueError as ve:
                print(f"Error: {ve}") 

            except TypeError as te:
                print(f"Error: {te}") 

            except Exception as e:
                print(f"Unexpected error: {e}")

    guess_the_number()

if __name__ == "__main__":
    main()




