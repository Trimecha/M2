#part1

n = 1000
X1 = rnorm(n,0,1)
X2 = rnorm(n,0,1)
X3 = rnorm(n,0,1) - X1
X4 = rnorm(n,0,1) -2*X3
X5 = rnorm(n,0,1) - X2
X6 = X1 + 2*X3 - X2 + rnorm(n,0,1)
X = data.frame(X1,X2,X3,X4,X5,X6)

plot(gs(X))
plot(hc(X))

graphviz.plot(gs(X))
graphviz.plot(hc(X))

#part2

mydata = read.table("/user/0/frejj/Proba/Returns250d.txt")
data = subset(mydata, select=c("AIR.FRANCE.KLM", "ALCATEL.LUCENT","AXA","FAURECIA","GAUMONT","GEODIS","PPR","UNION.FINC.FRANC."))
data = na.omit(data)
plot(gs(data))
plot(hc(data))

#ci.test tells us if the variables are dependants : just look at the p-value not the cor
#examples : (these are not the answer to the part 2 !!!!!!!!)

ci.test("GEODIS","ALCATEL.LUCENT","GAUMONT",data)

ci.test("GAUMONT","FAURECIA",c("AIR.FRANCE.KLM", "ALCATEL.LUCENT","AXA","PPR","UNION.FINC.FRANC."),data)

ci.test("AIR.FRANCE.KLM","UNION.FINC.FRANC.",c( "ALCATEL.LUCENT","AXA","PPR","FAURECIA","GAUMONT"),data)

