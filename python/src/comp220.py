import os

f = open(r"C:\code\cohort4\01-getting-started\src\scripts\syntax.js","rt")
totalLength=0
totalElse=0
counter=0
for x in f: # determine number of lines
  length=len(x)
  counter +=1
  print(x)
  elseCounter=x.count("else")
  totalElse+=elseCounter
  totalLength+=length
f.close()
print(f"There are {totalLength} characters in the file")
print(f"There are {counter} lines in this file")
print(f"There are {totalElse} occurances of 'else'")

path = 'C:/code/cohort4/01-getting-started/src/scripts'

files = os.listdir(path)
fileCounter =0
total_file_size=0
for f1 in files:
    print(f1)
    print(os.stat(path+'/'+f1).st_size)
    fileCounter +=1    
    total_file_size+=os.stat(path+'/'+f1).st_size

print(f"There are {fileCounter} files with total size of {total_file_size} bytes")
