#include "z3/include/z3++.h"
#include "json.hpp"

#include <iostream>
#include <vector>
#include <string>
#include <Windows.h>
#include <fstream>
#include <format>

std::vector <int> seq{};
std::fstream config("config.json");
std::fstream predFile("number.prediction");
std::string configContents;



void readConfig()
{
    // reads contents of config.json and stores it all in a variable

    std::cout << "Getting config.json contents...\n";

    if (config.is_open()) {
        while (config.good()) {
            config >> configContents;
        }
    }
}

int predict()
{
    // Placeholder for now so code can compile
    int predicted;
    std::string notice = std::format();
    return predicted;
}

int main()
{
    // void readConfig();
    readConfig();
    return 0;
}
