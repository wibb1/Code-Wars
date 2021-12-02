def digitize(n)
  answer = []
  array = n.to_s.split("").reverse()
  array.each do |i|
    answer << i.to_i
  end
  answer
end