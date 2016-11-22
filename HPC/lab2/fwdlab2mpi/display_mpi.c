#include <stdio.h>
#include "mpi.h"


int main ( int argc , char** argv )
{
	int size, rank;
	MPI_Init(&argc,  &argv);
	MPI_Comm_size(MPI_COMM_WORLD, &size);
	MPI_Comm_rank(MPI_COMM_WORLD, &rank);
	printf(" I am processe %d/%d \n", rank+1, size);
	MPI_Finalize();
	printf(" I am processe");
	return 0;
}
