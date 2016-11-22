# extra flags pour le link
LDFLAGS=-fopenmp

# Flags pour la compilation
CXXFLAGS=-fopenmp -O3
CFLAGS=-fopenmp -O3

CC=clang-omp
CXX=clang-omp++

## liste de exécutables à créer
SRC= $(wildcard *.c)
OBJ= $(SRC:.c=.o)
EXEC = trapezium dgemm gs

all : $(EXEC)

trapezium: trapezium_omp.o
	$(CC) $(LDFLAGS) -o $@ $+

dgemm: dgemm_omp.o
	$(CC) $(LDFLAGS) -o $@ $+

gs: gs_omp.o
	$(CC) $(LDFLAGS) -o $@ $+

clean:
		rm -f *.o

mrproper: clean
		rm -f $(EXEC)
