import csv 
f = open("C:/code/cohort4/python/Census_by_Community_2018.csv","rt")
counter = 0
for x in f: # determine number of lines
    print(x)
    break
for x in f: # determine number of lines
  counter +=1
  for c in x: 
    print(c)
    break
print(f"There are {counter} lines in this file")
f.close()
