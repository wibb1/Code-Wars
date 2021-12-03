def get_factors(n):
    factors = {}
    divisor = 2
    while n >= 2:
        if n % divisor == 0:
          if divisor not in factors:
              factors[divisor] = 0
          factors[divisor] = factors[divisor] + 1
          n = n / divisor
        else:
            divisor += 1
    return factors
  
def prime_factors(n):
    answer = ''
    obj = get_factors(n)
    for key, value in obj.items():
      if value < 2:
        answer += f'({key})'
      else:
        answer += f'({key}**{value})'
    return answer
  

