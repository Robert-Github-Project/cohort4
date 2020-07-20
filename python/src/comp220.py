import os
# f = open("readme.txt","rt")
# print(f.read())

f = open(r"C:\code\cohort4\01-getting-started\src\scripts\syntax.js","rt")
#print(f.read()) # this prints the entire document
print(f"There are {len(f.read())} characters in the file") # how many characters in file
f.close()

f = open(r"C:\code\cohort4\01-getting-started\src\scripts\syntax.js","rt")

counter=0
for x in f: # determine number of lines
  counter +=1
print(f"There are {counter} lines in this file")
f.close()

f = open(r"C:\code\cohort4\01-getting-started\src\scripts\syntax.js","rt")
elseCounter = f.read().count("else")
print(f"There are {elseCounter} occurances of 'else'")


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
