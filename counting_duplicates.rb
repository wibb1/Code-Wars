def duplicate_count(text)
  answer = []
  array = text.downcase.split("").sort
  count=0
  while count < array.length()-1
    if array[count] == array[count+1] 
      answer << array[count] 
    end  
    count +=1
  end
  answer.uniq.length()
end