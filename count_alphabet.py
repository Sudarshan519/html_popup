def count(sentence:str):
    result=[* sentence] 
    result =[element.lower() for element in result]
    countresult=[]
    countedaplhabets=[]
    # print(result)
    for i in result:
        if i.isalpha():
            if not countedaplhabets.__contains__(i):
                count=result.count(i)
                countresult.append((i,count))
                countedaplhabets.append(i)
    
    sortedarr=sorted(countresult, key=lambda element: (element[1]   ),reverse=True)
    print(sortedarr[:3])

    

        




sentence="The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog."
count(sentence.replace(' ',''))