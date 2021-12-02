def solution(number)
  sum = 0
  for num in 1..number
    sum += number if(num % 3 == 0 || num % 5 == 0)
  end
  return sum
end