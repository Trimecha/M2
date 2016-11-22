/*
 **  PROGRAM: Hello World
 **
 **  PURPOSE: Standard Hello World program in C
 **
 **  COMPILATION: gcc hello.c -o hello
 **
 **  USAGE: ./hello
 **  export OMP_NUM_THREADS=10  to change thread number
 */

#include <stdio.h>
#include <omp.h>

int main ()
{
  int tid;
  #pragma omp parallel
  printf("Hello World!\n");
}
