def comp(array1, array2)
  if array1 == nil || array2 == nil
    return false
  end
  if array1.length() == 0 || array2.length() == 0
    return array1.length() == array2.length()
  end

  array1&.sort!
  array2&.sort!
  i=0
  array1.each do |value|
    if value.nil? || array2[i].nil?
      return false
    elsif value**2 != array2[i]
      return false
    end
    i+=1
  end
  return true
end