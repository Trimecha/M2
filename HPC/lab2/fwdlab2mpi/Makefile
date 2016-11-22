# extra flags pour le link
LDFLAGS = -lm

# Compilation options
CFLAGS = -O3 -I/usr/include/openmpi-x86_64
CXXFLAGS = -O3

CC  = gcc
CXX = g++
MPICC = mpicc
MPIXX = mpicxx

SRC = $(wildcard *.c)
OBJ = $(SRC:.c=.o)
#EXEC = scalar_product.c,display_mpi.c 
all: scalar_product display_mpi test 
#all : $(EXEC)

display_mpi: display_mpi.o
	$(MPICC) $(CFLAGS) $(LDFLAGS) -o $@ $+

scalar_product: scalar_product.o
	$(MPICC) $(CFLAGS) $(LDFLAGS) -o $@ $+
test : test.o
	$(MPICC) $(CFLAGS) $(LDFLAGS) -o $@ $+
%.o: %.c
	$(MPICC) $(CFLAGS) -c $<

%.o: %.cpp
	$(MPIXX) $(CXXFLAGS) -c $<

clean:
		rm -f *.o

mrproper: clean
		rm $(EXEC)
