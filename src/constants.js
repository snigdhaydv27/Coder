export const LANGUAGE_VERSIONS = {
  cpp: "10.2.0",
  c: "10.2.0",
  java: "15.0.2",
  python: "3.10.0",
  javascript: "18.15.0",
};

export const CODE_SNIPPETS = {
  javascript: `
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Snigdha");
`,
  python: `
def greet(name):
  print("Hello, " + name + "!")

greet("Snigdha")
`,
  java: `
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}
`,
  cpp: `
#include <iostream>
using namespace std;

void greet(string name) {
  cout << "Hello, " << name << "!" << endl;
}

int main() {
  greet("Snigdha");
  return 0;
}
`,
  c: `
#include <stdio.h>

void greet(const char* name) {
  printf("Hello, %s!\\n", name);
}

int main() {
  greet("Snigdha");
  return 0;
}
`,
};
