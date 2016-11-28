set.seed(0)

###########PART1#####################
#A = function(n=100,sig = 1)
#{
n = 100;
X1 = rnorm(n,0,1);
X2 = rnorm(n,0,1);
X3 = -X1 + rnorm(n,0,1);
X4 = -2*X3 + rnorm(n,0,1);
X5 = -X2 + rnorm(n,0,1);
X6 = X1 + 2 * X3 - X2 + rnorm(n,0,1)  ;
A = data.frame(cbind(X1,X2,X3,X4,X5,X6));

graphviz.plot(gs(A));
graphviz.plot(hc(A));

#bn.s = gs(A);
#graphviz.plot(bn.s)

################""PART2##############
mydata = read.table("Returns250d.txt")
data = subset(mydata, select=c("AIR.FRANCE.KLM", "ALCATEL.LUCENT","AXA","FAURECIA","GAUMONT","GEODIS","PPR","UNION.FINC.FRANC."))
data = na.omit(data)
plot(gs(data))
plot(hc(data))

#Test dependancy gs not hc
ci.test("GEODIS","ALCATEL.LUCENT","GAUMONT",data)

#Test dependancy hc not gs
ci.test("GAUMONT","FAURECIA",c("AIR.FRANCE.KLM", "ALCATEL.LUCENT","AXA","PPR","UNION.FINC.FRANC."),data)

#Test dependancy found on hc and gs
ci.test("AIR.FRANCE.KLM","UNION.FINC.FRANC.",c( "ALCATEL.LUCENT","AXA","PPR","FAURECIA","GAUMONT"),data)

