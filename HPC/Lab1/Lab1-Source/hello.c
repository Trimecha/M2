/*
 **  PROGRAM: Hello World
 **
 **  PURPOSE: Standard Hello World program in C
 **
 **  COMPILATION: gcc hello.c -o hello
 **
 **  USAGE: ./hello
 **
 */

#include <stdio.h>

#include <omp.h>

int main ()
{
	int tid;
  #pragma omp parallel default(shared) private(tid)
	tid = omp_get_thread_num();
  printf("Hello World!\n");
}
