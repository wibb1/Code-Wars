def iq_test(numbers)
  reals = numbers.split(" ")
  odd=[]
  even=[]
  reals.each do |number|
    number.to_i%2==0 ? even.push(reals.index(number)) : odd.push(reals.index(number))
  end
  return odd.length == 1 ? odd[0].to_i + 1 : even[0].to_i + 1
end