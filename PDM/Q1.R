data  = read.table("Returns250d.txt");
test = subset(data, select = c("AIR.FRANCE.KLM", "ALCATEL.LUCENT", "AXA", "FAURECIA",
              "GAUMONT", "GEODIS", "PPR", "UNION.FINC.FRANC." ));
test = na.omit(test)
bn.gs1 = gs(test);
graphviz.plot(bn.gs1)

hc.gs1 = hc(test);
graphviz.plot(hc.gs1)

ci.test("GEODIS","UNION.FINC.FRANC.",data=T)

