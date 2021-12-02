def likes(names)
  if names.length() == 0 return 'no one likes this'
  if names.length() == 1 return "#{names[0]} likes this"
  namesReversed = names.reverse()
  usedNames = []
  while namesReversed.length() > 1 && usedNames.length()<2
    usedNames.push(namesReversed.pop())
  end
  return "#{usedNames.join(", ")} and #{namesReversed.length() > 1 ? namesReversed.length().to_s + " others" : namesReversed[0]} like this"
end
