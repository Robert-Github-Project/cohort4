import csv 
f = open("C:/code/cohort4/python/Census_by_Community_2018.csv","rt")
counter = 0

classDict ={}
sectorDict={}
#print(classDict)
with f as csvDataFile:
    csvReader = csv.reader(csvDataFile)
    for row in csvReader:
        print(row[0])
        print(row[4])
        print(row[9])
        counter+=1
        break
    for row in csvReader:
        counter+=1
        val= classDict.get(row[0],0)
        classDict[row[0]] = val + int(row[9])
        # print(row[0], val)
        # try:
        #     classDict[row[0]]
        # except KeyError:
        #    classDict[row[0]]=0 
        #    classDict[row[0]]+=int(row[9])
        # else:
        #     classDict[row[0]]+=int(row[9])

        try:
           sectorDict[row[4]]
        except KeyError:
           sectorDict[row[4]]=0 
           sectorDict[row[4]]+=int(row[9])
        else:
            sectorDict[row[4]]+=int(row[9])
f.close()       
print(f"There are {counter} rows of data")
print(classDict)
print(sectorDict)

f=open("report.txt","w")
f.write(f"There are {counter} lines.  Here is a summary of all Res_CNT")
f.write(str(classDict))
f.write(str(sectorDict))
f.close()
f=open("report.txt","r")
print(f.read())
f.close()
for c in classDict:
    print(c, classDict[c])