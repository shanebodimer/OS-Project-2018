/*

- Example test file that accepts command line arguments
- Simple demonstration of what actual test files need to do
- The passed parameter will be the number of threads

Compile: g++ test.cpp -o test
Run: ./test [parameter]

*/

#include <iostream>
using namespace std;

int main(int argc, char *argv[])
{
    cout << "Passed value: " << argv[1] << endl;
    return 0;
}