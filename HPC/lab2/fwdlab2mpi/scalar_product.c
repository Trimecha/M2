/******************************************************************************
 * Perform scalar product of two random vectors.
 * Compilation: gcc -03 scalar_product.c -o sp
 ******************************************************************************/

// Std
#include <stdio.h>
#include <stdlib.h>

// Parsing
#include <unistd.h>

// Time
#include <time.h>
//
#include "mpi.h"


void print_usage(char *s) {
  printf("Usage: %s -n <size of vectors>\n", s);
  exit(0);
}

int main(int argc, char **argv)
{
  // Loop index and size
  int i, size;
  // MPI ini variables
  int size_mpi, rank, start_mpi,end_mpi;
  // Arrays
  double *y, *x;

  // Time
  time_t start, stop;

  // Scalar product
  //MPI SUM et total sum
  long double sp,sum_sp;

  // Check if we have at least one argument
  char c;
  if (argc <=1 ) {
    print_usage(argv[0]);
  }
  else {
    // Parse the arguments for a -h or -n flag
    while ((c=getopt(argc, argv, "hn:")) != EOF) {
      switch (c) {
        case 'h':
          print_usage(argv[0]);
        case 'n':
          size = atoi(optarg);    // Get size of vector
          break;
        default:
          print_usage(argv[0]);
      }
    }
  }
	// Initializes random number generator
	srand((unsigned) time(&start));

  // Allocate arrays
  x = malloc(size*sizeof(double));
  y = malloc(size*sizeof(double));

	// Starting time
	time(&start);
    // Initialize vector
  for(i=0; i<size; i++)
  {
    x[i] = rand();
    y[i] = rand();
  }

  // Perform computation
  
  MPI_Init(&argc,  &argv);
  MPI_Comm_size(MPI_COMM_WORLD, &size_mpi);
  MPI_Comm_rank(MPI_COMM_WORLD, &rank);
  start_mpi = rank * (size/size_mpi) +1;
  if (rank == (size_mpi-1)){
	end_mpi = size;
  } else{
	end_mpi = start_mpi + (size/size_mpi)-1;
  }
  sp = 0;
  sum_sp=0; 
 for (i=start_mpi; i<end_mpi; i++)
  {
  //  printf(" I am processe %d/%d/%d \n", rank+1, size_mpi,i);
    sp += x[i]*y[i];
  }
  MPI_Reduce(&sp,&sum_sp,1,MPI_LONG_DOUBLE,MPI_SUM,0,MPI_COMM_WORLD);
  printf("\nRank: %d, sp: %Le, sum_sp: %Le\n", rank,sp,sum_sp);
  MPI_Finalize();

  // Stopping time
  time(&stop);

  // Elapsed time
  printf("Elapsed time: %lf s\n",(double)(stop-start)/(CLOCKS_PER_SEC)*1000);

  free(x);
  free(y);

  return 0;

}
